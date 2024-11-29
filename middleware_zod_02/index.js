const express = require("express");
const app = express();

app.use(express.json());

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "pradeep" && password != "pass") {
    res.status(403).json({
      msg: "incorrect inputs",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "Incorrect input",
    });
  } else {
    next();
  }
}
app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.json({
    msg: "you are healthy ",
  });
});

app.get("/kidney-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.json({
    msg: "your kidney is healthy ",
  });
});

app.post("/kidney-checkup", (req, res) => {
  //kidneys = [1,2]
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;
  res.send("you have" + kidneyLength + "kidneys");
});


//global catches
let errorCount = 0;
app.use((err, req, res, next) => {
  errorCount++;
  res.json({
    msg: "sorry something is up with our server",
  });
  console.log(errorCount);
});

app.listen(3500);
