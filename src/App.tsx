import React from 'react'
import Layout from './Components/Layout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from './pages/Home'
import Products from './pages/Products'
import Users from './pages/Users'
import UserPage from './pages/UserPage'

function App() {

  const router= createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>

      <Route index element ={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path= "/users/:id" element={<UserPage/>}/>
        <Route path ="/products" element={<Products/>}/>
       
      </Route>
  ))

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
