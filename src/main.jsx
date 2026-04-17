import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import NotFound from './pages/Notfound'


import './index.css'

import App from './App'
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import Stats from './pages/Stats'
import FriendDetails from './pages/FriendDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // Use index: true for the default route
      { path: 'timeline', element: <Timeline /> },
      { path: 'stats', element: <Stats /> },
      { path: 'friend/:id', element: <FriendDetails /> },
      { path: "*", element: <NotFound /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
)
