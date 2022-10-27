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
import { Curso } from './pages/Cursos/Curso'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cursos",
    element: <Cursos/>
  },
  {
    path: "/cursos/:id",
    element: <Curso/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>
)
