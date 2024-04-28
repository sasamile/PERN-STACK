const db = require("../db");

// Funcion para Ver Todos los datos
const getAllTask = async (req, res, next) => {
  try {
    const allTask = await db.query("SELECT * FROM task");
    res.json(allTask.rows);
  } catch (error) {
    next(error);
  }
};

// Funcion Para Crear task
const CreatetTask = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO task (title, description) VALUES ($1 , $2) RETURNING *",
      [title, description]
    );

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

// Funcion Para Eliminar task
const Deletetask = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await db.query(
      "DELETE FROM task WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

// Funcion Para Actualizar task
const UpdateTask = async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const result = await db.query(
      "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
      [title, description, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

// Funcion Para Obtener una sola task
const getTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await db.query("SELECT * FROM task WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTask,
  CreatetTask,
  Deletetask,
  getTask,
  UpdateTask,
};
