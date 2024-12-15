const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middlewares/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;

  try {
    await User.create({
      username: username,
      password: password,
    });
    return res.status(201).send({
      message: "User created successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error creating user account", error: error });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const allCourses = await Course.find({});
    return res.status(200).send({ courses: allCourses });
  } catch (error) {
    return res.status(500).send({ message: "Error fetching all courses" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).send({ message: "Course not found" });
    }
    if (User.myCourses.includes(course._id)) {
      return res
        .status(400)
        .send({ message: "You already have this course in your library" });
    }
    await User.updateOne(
      {
        username: username,
      },
      {
        $push: {
          purchasedCourses: courseId,
        },
      }
    );
    res.status(200).send({ message: "Course purchased successfully" });
  } catch (error) {
    return res.status(500).send({ message: "Error fetching course" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const user = await User.findOne({
      username: req.headers.username,
    });
    const courses = Course.find({
      _id: {
        $in: user.purchasedCourses,
      },
    });
    res.json({
      courses: courses,
    });
  } catch (error) {
    return res.status(500).send({ message: "Error fetching courses" });
  }
});

module.exports = router;
