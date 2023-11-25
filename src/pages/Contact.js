import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { FaHome , FaPhoneAlt , FaExclamation  } from "react-icons/fa";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { Link } from 'react-router-dom';



const Contact = () => {
  return (
<>
<Meta title = {"Contact Us"} />
<BreadCrum title ='Contact Us' />
<div className='contact-wrapper home-wrapper-2 py-5'>
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-12'>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13805.464853107387!2d31.333550943197384!3d30.11233271017961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815dcc3e4e599%3A0x6c67c22e4aa39206!2sHeliopolis%2C%20Al%20Matar%2C%20El%20Nozha%2C%20Cairo%20Governorate%204470351!5e0!3m2!1sen!2seg!4v1700940198525!5m2!1sen!2seg" 
      style={{border:"0",width:"100%",height:"450px"}}
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      </div>
      <div className='col-12 mt-5'>
        <div className='contact-inner-wrapper d-flex justify-content-between'>
          <div>
            <h3 className='contact-title mb-4'>Contact</h3>
            <form action='' className='d-flex flex-column gap-15'>
              <div>
                <input 
                type='text' 
                className='form-control' 
                placeholder='Name'
                />
              </div>
              <div>
                <input 
                type='text' 
                className='form-control' 
                placeholder='Email'
                />
              </div>
              <div>
                <input 
                type='text' 
                className='form-control' 
                placeholder='Phone number'
                />
              </div>
              <div>
                <textarea 
                name='' 
                id='' 
                className='w-100 form-control' 
                cols='30' 
                rows='5' 
                placeholder='Comment'>
                </textarea>
              </div>
              <div>
                <button className='button border-0'>Submit</button>
              </div>
            </form>
          </div> 
          <div>
          <h3 className='contact-title mb-4'>Get In Touch With US</h3>
          <div>
            <ul className='ps-0'>
              <li className='mb-3 d-flex gap-15 align-items-center'><FaHome className='fs-5' /><address className='mb-0'>25 abdelhamid st, downTown ,cairo ,Egypt project1976 Office</address></li>
              <li className='mb-3 d-flex gap-15 align-items-center'><FaPhoneAlt className='fs-5' /><a href='tel:+201006574217' >+201006574217</a></li>
              <li className='mb-3 d-flex gap-15 align-items-center'><MdOutlineLocalPostOffice className='fs-4' /><a href='mailto:hrteam@project1976.com'>hrteam@project1976.com</a></li>
              <li className='mb-3 d-flex gap-15 align-items-center'><FaExclamation className='fs-4' /><p className='mb-0'>Sunday - Thursday 7 AM - 9 AM</p></li>
            </ul>
          </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Contact
