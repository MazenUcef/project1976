import React from 'react';
import { BrowserRouter , Routes , Route  } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blogs from './pages/Blogs';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgotpass from './pages/Forgotpass';
import Signup from './pages/Signup'
import Resetpass from './pages/Resetpass';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndCond from './pages/TermAndCond';
import BlogSingle from './pages/BlogSingle';
import ProductSingle from './pages/ProductSingle';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout/>} >
    <Route index element={<Home/>} />
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='product' element={<OurStore/>}/>
    <Route path='product/:id' element={<ProductSingle/>}/>
    <Route path='blogs' element={<Blogs/>}/>
    <Route path='compare-product' element={<CompareProduct/>}/>
    <Route path='wishlist' element={<Wishlist/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='forgot-password' element={<Forgotpass/>}/>
    <Route path='reset-password' element={<Resetpass/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='blog/:id' element={<BlogSingle/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='checkout' element={<Checkout/>}/>
    <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
    <Route path='refund-policy' element={<RefundPolicy/>}/>
    <Route path='shipping-policy' element={<ShippingPolicy/>}/>
    <Route path='terms-and-conditions' element={<TermAndCond/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
