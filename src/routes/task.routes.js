const { Router } = require("express");
const {
  getAllTask,
  getTask,
  CreatetTask,
  Deletetask,
  UpdateTask,
} = require("../controller/task.controller");
const router = Router();

router.get("/task", getAllTask);

router.post("/task", CreatetTask);

router.delete("/task/:id", Deletetask);

router.put("/task/:id", UpdateTask);

router.get("/task/:id", getTask);

module.exports = router;
