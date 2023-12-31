import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'


const Header = () => {
  return (
    <>
      <header className='header-top-strip py-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
            <p className='text-title mb-0'>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
            <p className='text-end text-title mb-0'>Hotline: <Link className='text-title' href='tel:+201006574217'>+201006574217</Link></p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-4'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-2 col-md-2 col-sm-12'>
              <h2>
                <Link className='text-title' to='/'>Project-76</Link>
              </h2>
            </div>
            <div className='col-lg-5 col-md-5 col-sm-12'>
              <div className="input-group">
              <input type="text" className="form-control py-2" 
              placeholder="Search Product here..." 
              aria-label="Search Product here..." 
              aria-describedby="basic-addon2"/>
              <span className="input-group-text p-3" id="basic-addon2">
              <BsSearch className='seBtn fs-6'/>
              </span>
              </div>
            </div>
            <div className='col-lg-5 col-md-5 col-sm-12'>
            <div className='header-upper-links d-flex align-items-center justify-content-between'>
              <div>
              <Link to='/compare-product' className='d-flex align-items-center gap-10 text-white'>
              <img src='images/compare.svg' alt='commpare' />
              <p className='mb-0 text-title text-brand dollar'>Compare<br/>Products</p>
              </Link>
              </div>
              <div>
              <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
              <img src='images/wishlist.svg' alt='whishlist'/>
              <p className='mb-0 text-title text-brand dollar'>Favorite<br/>Whishlist</p>
              </Link>
              </div>
              <div>
              <Link to='/login' className='d-flex align-items-center gap-10 text-white'>
              <img src='images/user.svg' alt='user'/>
              <p className='mb-0 text-title text-brand dollar'>Log in<br/> Account</p>
              </Link>
              </div>
              <div>
              <Link to='/cart' className='d-flex align-items-center gap-10 text-white'>
              <i className="fa-solid fa-cart-shopping fs-3 text-title"></i>
              <div className='d-flex flex-column'>
                <span className='badge bg-white text-dark'>0</span>
                <p className='text-title dollar mb-0 text-brand'>$ 0,00</p>
              </div>
              </Link>
              </div>
            </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                  type="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false">
                  <i className="fa-solid fa-filter fa-xl"></i>
                    <span className='me-5 d-inline-block' >Shop Categories</span>
                  </button>
                  
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-white" to="">Home</Link></li>
                    <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                    <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                  </ul>
                </div>
                
                <div className='menu-links'>
                <div className='d-flex align-items-center gap-15'>
                <NavLink className='text-title' to="/">Home</NavLink>
                <NavLink className='text-title' to="/product">Our Store</NavLink>
                <NavLink className='text-title' to="/blogs">Blogs</NavLink>
                <NavLink className='text-title' to="/contact">Contact</NavLink>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header








