import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout } from './pages/_layouts/default-layout'
import { Home } from './pages/app/home'

export const router = createBrowserRouter([
  {
    path: '/',
    // errorElement: <Error />,
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },

  // {
  //  path: '*',
  //  errorElement: <Error />,
  //  element: <NotFound />,
  // },
])
