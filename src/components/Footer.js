import React from 'react'
import {Link} from 'react-router-dom'
import {BsLinkedin , BsGithub, BsYoutube , BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
            <img src='images/newsletter.png' alt='newsletter'/>
            <h2 className='mb-0 text-white'>Sign Up For Newsletter</h2>
            </div>
          </div>
          <div className='col-7'>
            <div className="input-group">
              <input type="text" className="form-control py-1" 
              placeholder="Your Email Address..." 
              aria-label="Your Email Address..." 
              aria-describedby="basic-addon2"/>
                <span className="input-group-text p-3" id="basic-addon2">
                  Subscribe
                </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Project1976-Org</Link>
              <address className='text-white fs-6'>25 st Solayman Azzmy,<br/>Nozha, cairo<br/>Egypt
              </address>
              <Link href="tel:+201006574217" className='text-white d-block mb-2'>
              +201006574217
              </Link>
              <Link href='mailto:Hrteam@project1976.com' className='text-white py-2 mb-1'>
              hrteam@project1976.com
              </Link>
              <div className='social-icons d-flex align-items-center gap-15'>
              <Link href="www.linkedin.com" className='text-white fs-5'>
                <BsLinkedin/>
              </Link>
              <Link href="www.github.com" className='text-white fs-5'>
                <BsGithub/>
              </Link>
              <Link href="www.instagram.com" className='text-white fs-5'>
                <BsInstagram/>
              </Link>
              <Link href="www.youtube.com" className='text-white fs-5'>
                <BsYoutube/>
              </Link>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Informations</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to='/privacy-policy' className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link to='/refund-policy' className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link to='/shipping-policy' className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link to='/terms-and-conditions' className='text-white py-2 mb-1'>Terms Of Services</Link>
              <Link to='/blogs' className='text-white py-2 mb-1'>Blogs</Link>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>About Us</Link>
              <Link className='text-white py-2 mb-1'>Search</Link>
              <Link className='text-white py-2 mb-1'>Faq</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
              <Link className='text-white py-2 mb-1'>Size Chart</Link>
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Laptops</Link>
              <Link className='text-white py-2 mb-1'>HeadPhones</Link>
              <Link className='text-white py-2 mb-1'>Tablets</Link>
              <Link className='text-white py-2 mb-1'>Watch</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
          <p className='text-center text-white p3ch'>&copy; {new Date().getFullYear()}; Created by Mazen-Ucef CEO of Project1976</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
