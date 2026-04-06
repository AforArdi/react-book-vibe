import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { routes } from './routes/Routes'
import BookProvider from './contexts/BookProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={routes}></RouterProvider>
    </BookProvider>
  </StrictMode>,
)
