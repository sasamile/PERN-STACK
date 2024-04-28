import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TaskLis() {
  const navitate = useNavigate();

  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await fetch("http://localhost:4000/task");
    const data = await res.json();
    setTasks(data);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/task/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log({ error: error.messaje });
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold my-4 text-center">Taks List</h1>
      {tasks.map((task) => (
        <Card
          key={task.id}
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="text-gray-300">
              <Typography>
                <span className="font-bold text-white">Title : </span>{" "}
                {task.title}
              </Typography>
              <Typography>
                <span className="font-bold text-white">Description : </span>
                {task.description}
              </Typography>
            </div>
            <div className="flex gap-4">
              <Button
                variant="contained"
                color="inherit"
                onClick={() => navitate(`/task/${task.id}/edit`)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default TaskLis;
