import React from "react";
import { TaskProvider } from "../../context/TaskContext";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { Container } from "@mui/material";

const TaskManagement= () => {
  return (
    <TaskProvider>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <TaskForm />
        <TaskList />
      </Container>
    </TaskProvider>
  );
};

export default TaskManagement;
