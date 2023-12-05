import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import LayoutWebsite from "./components/layoutPage/layoutWebsite"
import ProfilePage from "./pages/profile"
import HomePage from "./pages/home"
import Register from "./components/register"
import AdminLayout from "./components/layoutPage/layoutAdmin"
import AdminProductList from "./components/adminPage/listProductAdmin"
import AddProduct from "./components/adminPage/addProduct"
import AdminEditProduct from "./components/adminPage/editProduct"
import LoginPage from "./components/adminPage/login"
import { configureAxios } from "./config/axios";

configureAxios();


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />

          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="products" element={<AdminProductList />} />
          <Route path="products/create" element={<AddProduct />} />
          <Route path="products/edit/:productId" element={<AdminEditProduct />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
