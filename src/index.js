const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const taskRouter = require("./routes/task.routes");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(taskRouter);

app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

app.listen(4000);
console.log("server en el puerto 4000");
