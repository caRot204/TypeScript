import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import LayoutWebsite from "./components/layoutPage/layoutWebsite"
import ProfilePage from "./pages/profile"
import Login from "./components/login"
import HomePage from "./pages/home"
import Register from "./components/register"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
