import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ChromePicker } from 'react-color';

const ColorPicker = () => {

  const [color,setColor] = useState('#ffffff');
  const [open,setOpen] = useState(false);

  const handleColorChange = (color) =>{
    setColor(color.hex);
  }

  const toggleColorPicker = ()=>{
    setOpen(!open);
  }
  return (
    <>
      <Container maxWidth='xl' sx={{mt:'20px'}}>
      <Typography variant="h4" align="center" gutterBottom>
        Color Picker
      </Typography>
      <Box>
      <TextField
          variant='outlined'
          value={color}
          onClick={toggleColorPicker}
          sx={{
            mb:2,
            width:200,
            cursor:'pointer',
            backgroundColor:color
          }}
          aria-readonly
        />
        <Button variant='contained' onClick={toggleColorPicker}>
          {open? 'Close Color Picker':'Open Color Picker'}
        </Button>
        {open && (
          <ChromePicker color={color} onChangeComplete={handleColorChange}/>
        )}
      </Box>
      </Container>
    </>
  )
}

export default ColorPicker
