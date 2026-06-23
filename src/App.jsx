import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'

// FIX: Move this out here so it's instantiated exactly ONCE globally!
const router = createBrowserRouter([
  {
    path: "/contact",
    element: <><Navbar/><Contact/></>
  },
  {
    path: "/",
    element: <><Navbar/> <Home/></>
  },
  {
    path: "/about",
    element: <><Navbar/><About/></>
  },
   {
    path: "/projects",
    element: <><Navbar/><Projects/></>
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App