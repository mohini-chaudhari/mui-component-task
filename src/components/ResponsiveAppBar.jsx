import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

export default function ResponsiveAppBar() {
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const toggleProductMenu = () => {
    setProductOpen(!productOpen);
  };

  const menu = [
    {
      name:'Searchbar',
      link:'/searchbar'
    },
    {
      name:'Drag And Drop',
      link:'/drag-and-drop'
    },
    {
      name:'Image Carousel',
      link:'/image-carousel'
    },{
      name:'Multi-Step Form',
      link:'/multi-step-form'
    },{
      name:'Pagination Component',
      link:'/pagination-component'
    },{
      name:'Color Picker',
      link:'/color-picker'
    },{
      name:'Text Search And Highlight',
      link:'/text-search-and-highlight'
    },{
      name:'File Download',
      link:'/file-download'
    },{
      name:'Task Management',
      link:'/task-management'
    },{
      name:'Map Component',
      link:'/map-component'
    }
  ]
  return (
    <Box>
      <AppBar position="static" sx={{boxShadow:0}}>
        <Toolbar sx={{justifyContent:'space-evenly'}}>
          {/* <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography> */}
          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon color="primary"/>
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {menu.map((item) =>(
                <Link to={item.link} style={{textDecoration:'none',color:'#000'}}>{item.name}</Link>
              ))}
              {/* <Typography variant="button">Home</Typography>
              <Typography variant="button">About</Typography>
              <Typography variant="button" onClick={toggleProductMenu}>
                Product {productOpen ? <ExpandLess /> : <ExpandMore />}
              </Typography> */}
              {/* <Collapse in={productOpen} timeout="auto" unmountOnExit>
                <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
                  <Typography variant="button">Product 1</Typography>
                  <Typography variant="button">Product 2</Typography>
                  <Typography variant="button">Product 3</Typography>
                </Box>
              </Collapse> */}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <List>
          {menu.map((item) =>(
          <ListItem button>
              <ListItemText>
              <Link to={item.link} style={{textDecoration:'none',color:'#000'}} onClick={toggleDrawer(false)}>{item.name}</Link>
              </ListItemText>
            </ListItem>
          ))}
            {/* <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={toggleProductMenu}>
              <ListItemText primary="Product" />
              {productOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={productOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Product 1" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Product 2" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Product 3" />
                </ListItem>
              </List>
            </Collapse> */}
          </List>
        </Drawer>
      )}
    </Box>
  );
}
