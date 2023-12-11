import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Route from './Route.jsx/Route.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/ContactUs/Contactus.jsx'
import Github from './Components/Github/Github.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Route/>,
      children:[
        {path:"",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
        {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/github",
        element:<Github/>
      }
      ]
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
