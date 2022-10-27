import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Home/Home'
import Cursos from './pages/Cursos/Cursos'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cursos",
    element: <Cursos/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>
)
