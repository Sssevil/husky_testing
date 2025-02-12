import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { HomePage } from '../../pages/HomePage'
import { AboutUs } from '../../pages/AboutUs'

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