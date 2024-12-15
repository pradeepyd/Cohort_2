const express = require("express");
const adminMiddleware = require("../middlewares/admin");
const users = require("..");
const { Admin, Course } = require("../db");
const router = express.Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
   
  try {
    await Admin.create({
      username: username,
      password: password,
    });
    return res.status(201).send({
      message: "Admin created successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error creating admin account", error: error });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const { title, description, price, imageLink } = req.body;
  if(!title || !description || !price || !imageLink){
    return res.status(400).send({message:"All fields are required!"})
  }
  try {
    const admin = await Admin.findById(req.admin._id);
    const newCourse = await Course.create({
      title: title,
      description: description,
      price: price,
      imageLink: imageLink,
       
    });
    
    return res.status(201).send({
      message: "Course created successfully",
      courseId: newCourse._id,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error creating course", error: error });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const response = await Course.find({})
    return res.status(200).send({ courses: response });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error fetching courses", error: error });
  }
});

module.exports = router;