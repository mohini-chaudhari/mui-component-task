import React,{lazy} from 'react'
import { useRoutes } from 'react-router-dom'

const Searchbar = lazy(()=>import('../components/SearchBar'))
const DragAndDrop = lazy(()=>import('../components/DragAndDrop'))
const ImageCarousel = lazy(()=>import('../components/ImageCarousel'))
const MultiStepForm = lazy(()=>import('../components/MultiStepForm'))
const PaginationComponent = lazy(()=>import('../components/PaginationComponent'))
const ColorPicker = lazy(()=>import('../components/ColorPicker'))
const SearchAndHighlight = lazy(()=>import('../components/SearchAndHighlight'))
const FileDownload = lazy(()=>import('../components/FileDownload'))
const TaskManagement = lazy(()=>import('../components/TaskManagement/TaskManagement'))
const MapComponent = lazy(()=>import('../components/MapComponent'))

const Routes = () => {
  const routes = useRoutes([
    {
      path:'/',
      element:<Searchbar/>,
    },
    {
      path:'/searchbar',
      element:<Searchbar/>,
    },
    {
      path:'/drag-and-drop',
      element:<DragAndDrop/>,
    },
    {
      path:'/image-carousel',
      element:<ImageCarousel/>,
    },
    {
      path:'/multi-step-form',
      element:<MultiStepForm/>,
    },
    {
      path:'/pagination-component',
      element:<PaginationComponent/>,
    },
    {
      path:'/color-picker',
      element:<ColorPicker/>,
    },
    {
      path:'/text-search-and-highlight',
      element:<SearchAndHighlight/>,
    },
    {
      path:'/file-download',
      element:<FileDownload/>,
    },
    {
      path:'/task-management',
      element:<TaskManagement/>,
    },
    {
      path:'/map-component',
      element:<MapComponent/>,
    },
  ])
  return routes
}

export default Routes
