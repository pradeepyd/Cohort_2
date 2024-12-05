//write basic express boilerplate code ,
//with express.json()middleware

const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
app.use(express.json());
const cors = require("cors");
const PORT = 3000;
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayLoad = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  try {
    await todo.create({
      title: createPayLoad.title,
      description: createPayLoad.description,
      completed: false,
    });
    return res.status(200).json({
      msg: "Todo created",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "there is a problem in adding todo ",
    });
  }
});

app.get("/todos", async (req, res) => {
  // console.log("been hitten")
  const todos = await todo.find({});
  res.status(200).json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  await todo.updateById(req.body._id, { completed: true });
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
