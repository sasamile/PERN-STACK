import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskLis from "./components/TaskLis";
import TaskForm from "./components/TaskForm";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<TaskLis />} />
          <Route path="/task/new" element={<TaskForm />} />
          <Route path="/task/:id/edit" element={<TaskForm />} />

          {/**Falta la ruta de editar  */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
