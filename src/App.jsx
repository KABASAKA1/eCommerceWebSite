import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import LoginSingUp from './Pages/LoginSignUp.jsx'
import ProductCategory from './Pages/ProductCategory.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import Footer from './Components/Footer/Footer.jsx'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mens' element={<ProductCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ProductCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ProductCategory banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSingUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
