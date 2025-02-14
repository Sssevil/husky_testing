import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { AboutUs } from '../pages/aboutUs'
import { HomePage } from '../pages/HomePage'


export const router = createBrowserRouter([
  {
    element: <Layout /> ,
    children: [
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/aboutUs',
        element:<AboutUs/>
      }
    ]
  }
])