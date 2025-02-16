import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const steps = ["Personal Info", "Contact Details", "Review & Submit"];

// Validation schemas for each step
const validationSchemas = [
  Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
  }),
  Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone must be 10 digits")
      .required("Phone is required"),
  }),
];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleNext = (values) => {
    setFormData(values);
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const renderStepContent = (formik) => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <Field
              as={TextField}
              label="First Name"
              name="firstName"
              fullWidth
              margin="normal"
              error={formik.errors.firstName && formik.touched.firstName}
              helperText={<ErrorMessage name="firstName" />}
            />
            <Field
              as={TextField}
              label="Last Name"
              name="lastName"
              fullWidth
              margin="normal"
              error={formik.errors.lastName && formik.touched.lastName}
              helperText={<ErrorMessage name="lastName" />}
            />
          </>
        );
      case 1:
        return (
          <>
            <Field
              as={TextField}
              label="Email"
              name="email"
              type="email"
              fullWidth
              margin="normal"
              error={formik.errors.email && formik.touched.email}
              helperText={<ErrorMessage name="email" />}
            />
            <Field
              as={TextField}
              label="Phone Number"
              name="phone"
              type="tel"
              fullWidth
              margin="normal"
              error={formik.errors.phone && formik.touched.phone}
              helperText={<ErrorMessage name="phone" />}
            />
          </>
        );
      case 2:
        return (
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6">Review Your Information</Typography>
            <Typography><strong>First Name:</strong> {formData.firstName}</Typography>
            <Typography><strong>Last Name:</strong> {formData.lastName}</Typography>
            <Typography><strong>Email:</strong> {formData.email}</Typography>
            <Typography><strong>Phone:</strong> {formData.phone}</Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Multi-Step Form
      </Typography>

      <Formik
        initialValues={formData}
        validationSchema={validationSchemas[activeStep]}
        onSubmit={(values,{resetForm}) => {
          if (activeStep === steps.length - 1) {
            alert("Form submitted successfully!");
            // window.location.reload()
            setActiveStep(0)
            resetForm();
          } else {
            handleNext(values);
          }
        }}
      >
        {(formik) => (
          <Form>
            {renderStepContent(formik)}

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
              <Button variant="contained" onClick={handleBack} disabled={activeStep === 0}>
                Back
              </Button>

              <Button
                variant="contained"
                type="submit"
                color={activeStep === steps.length - 1 ? "success" : "primary"}
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mt: 4 }}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
};

export default MultiStepForm;
