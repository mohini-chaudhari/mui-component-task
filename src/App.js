// import { AppBar, Container, Tab, Tabs ,Box,Typography} from "@mui/material";
// import "./App.css";
// import PropTypes from 'prop-types';
// import ColorPicker from "./components/ColorPicker";
// import DragAndDrop from "./components/DragAndDrop";
// import FileDownload from "./components/FileDownload";
// import ImageCarousel from "./components/ImageCarousel";
// import MapComponent from "./components/MapComponent";
// import MultiStepForm from "./components/MultiStepForm";
// import PaginationComponent from "./components/PaginationComponent";
// import ResponsiveAppBar from "./components/ResponsiveAppBar";
// import SearchAndHighlight from "./components/SearchAndHighlight";
// import SearchBar from "./components/SearchBar";
// import TaskManagement from "./components/TaskManagement/TaskManagement";
// import React,{ useState } from "react";
// import { useTheme } from "@mui/material/styles";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           {children}
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

// function App() {
//   const theme = useTheme();
//   const [value, setValue] = useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <>
//       <Box sx={{ bgcolor: 'background.paper',height:'100vh'}}>
//       <AppBar position="static">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="secondary"
//           textColor="inherit"
//           variant="fullWidth"
//           aria-label="full width tabs example"
//         >
//           <Tab label="Searchbar" {...a11yProps(0)} />
//           <Tab label="Drag and Drop" {...a11yProps(1)} />
//           <Tab label="ImageCarousel" {...a11yProps(2)} />
//           <Tab label="Multi-step Form" {...a11yProps(3)} />
//           <Tab label="Pagination Component" {...a11yProps(4)} />
//           <Tab label="Color Picker" {...a11yProps(5)} />
//           <Tab label="Text Search and Highlight" {...a11yProps(6)} />
//           <Tab label="File Download" {...a11yProps(7)} />
//           <Tab label="Task Management" {...a11yProps(8)} />
//           <Tab label="Map Component" {...a11yProps(9)} />
          
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0} dir={theme.direction}>
//         <SearchBar/>
//       </TabPanel>
//       <TabPanel value={value} index={1} dir={theme.direction}>
//         <DragAndDrop/>
//       </TabPanel>
//       <TabPanel value={value} index={2} dir={theme.direction}>
//         <ImageCarousel/>
//       </TabPanel>
//       <TabPanel value={value} index={3} dir={theme.direction}>
//         <MultiStepForm/>
//       </TabPanel>
//       <TabPanel value={value} index={4} dir={theme.direction}>
//         <PaginationComponent/>
//       </TabPanel>
//       <TabPanel value={value} index={5} dir={theme.direction}>
//         <ColorPicker/>
//       </TabPanel>
//       <TabPanel value={value} index={6} dir={theme.direction}>
//         <SearchAndHighlight/>
//       </TabPanel>
//       <TabPanel value={value} index={7} dir={theme.direction}>
//         <FileDownload/>
//       </TabPanel>
//       <TabPanel value={value} index={8} dir={theme.direction}>
//         <TaskManagement/>
//       </TabPanel>
//       <TabPanel value={value} index={9} dir={theme.direction}>
//         <MapComponent/>
//       </TabPanel>
//     </Box>
//     </>
//   );
// }

// export default App;
import "./App.css";
import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Routes from "./routes/Routes";
import ResponsiveAppBar from './components/ResponsiveAppBar'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar/>
        <Routes/>
      </BrowserRouter>
    </>
  )
}

export default App
