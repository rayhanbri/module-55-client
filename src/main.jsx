import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Mainlayout from './layout/Mainlayout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
   Component:Mainlayout,
   children:[
    {index:true,Component:App}
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
