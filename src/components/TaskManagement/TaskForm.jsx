import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TaskContext } from "../../context/TaskContext";
import { TextField, Button } from "@mui/material";

const TaskForm = () => {
  const { dispatch } = useContext(TaskContext);
  const formik = useFormik({
    initialValues: { text: "" },
    validationSchema: Yup.object({
      text: Yup.string().required("Task is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch({ type: "ADD_TASK", payload: { id: Date.now(), text: values.text } });
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        label="New Task"
        name="text"
        value={formik.values.text}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.text && Boolean(formik.errors.text)}
        helperText={formik.touched.text && formik.errors.text}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;
