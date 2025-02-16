import { Button, Container, Typography } from "@mui/material";
import React from "react";

const FileDownload = () => {
  const handleDownload = () => {
    const texts = ['This is a downloded file']

    const file = new Blob(texts, {type: 'text/plain'});

    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "file" + Date.now() + ".txt";

    // simulate link click
    document.body.appendChild(element);
    element.click();
}

  return (
    <>
      <Container maxWidth="sm" sx={{mt:'20px'}}>
        <Typography>File Download example</Typography>
        <Button variant="contained" sx={{mt:'20px'}} onClick={handleDownload}>Download</Button>
        
      </Container>
    </>
  );
};

export default FileDownload;
