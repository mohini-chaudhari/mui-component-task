import React, { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField } from "@mui/material";
import { Delete, Edit, Save } from "@mui/icons-material";

const TaskList = () => {
  const { tasks, dispatch } = useContext(TaskContext);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>
                {editId === task.id ? (
                  <TextField value={editText} onChange={(e) => setEditText(e.target.value)} />
                ) : (
                  task.text
                )}
              </TableCell>
              <TableCell>
                {editId === task.id ? (
                  <IconButton
                    onClick={() => {
                      dispatch({ type: "EDIT_TASK", payload: { id: task.id, text: editText } });
                      setEditId(null);
                    }}
                  >
                    <Save/>
                  </IconButton>
                ) : (
                  <IconButton onClick={() => { setEditId(task.id); setEditText(task.text); }}>
                    <Edit color="success"/>
                  </IconButton>
                )}
                <IconButton onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}>
                  <Delete color="error"/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskList;