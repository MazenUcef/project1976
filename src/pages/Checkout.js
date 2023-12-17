import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import Product1 from '../images/product-1.jpg'
import Container from '../components/Container';


const Checkout = () => {
return (
<>
<Container class1='checkout-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-7'>
                <div className='checkout-left-data'>
                    <h3 className='website-name'>Project-76</h3>
                    <nav 
                    style={{"--bs-breadcrumb-divider": ">"}} 
                    aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item "><Link className='text-dark' to='/cart'>Cart</Link></li>
                            &nbsp; /
                            <li className="breadcrumb-item active"><Link className='text-dark' to='/checkout'>Infromation</Link></li>
                            &nbsp; /
                            <li className="breadcrumb-item active"><Link className='text-dark' to='/checkout'>shipping</Link></li>
                            &nbsp; /
                            <li className="breadcrumb-item active"><Link className='text-dark' to='/checkout'>Payment</Link></li>
                        </ol>
                    </nav>
                    <h4 className='title'>Contact Infromation</h4>
                    <p className='user-details'>
                        John Smith (Johnsmith@gmail.com)
                    </p>
                    <form action='' className='d-flex gap-15 flex-wrap justify-content-between'>
                        <div className='w-100'>
                            <select name='' className='form-control form-select' id=''>
                                <option value="" selected disabled>Use a new address</option>
                            </select>
                        </div>
                        <div className='w-100'>
                            <select  name='' className='form-control form-select' id=''>
                                <option value="" selected disabled>Select Country</option> 
                            </select>
                        </div>
                        <div >
                            <input type='text' placeholder='First Name' className='from-control border-0 p-2 rounded'/>
                        </div>
                        <div>
                            <input type='text' placeholder='Last Name' className='from-control border-0 p-2 rounded'/>
                        </div>
                        <div className='w-100'>
                            <input type='text' placeholder='Address' className='from-control w-100 border-0 p-2 rounded'/>
                        </div>
                        <div className='w-100'>
                            <input type='text' placeholder='Apartment, Suite, etc' className='from-control w-100 border-0 p-2 rounded'/>
                        </div>
                        <div >
                            <input type='text' placeholder='City' className='from-control border-0 p-2 rounded'/>
                        </div>
                        <div >
                            <select name='' className='form-control form-select' id=''>
                                <option value="" selected disabled>Select State</option>
                            </select>
                        </div>
                        <div >
                            <input type='text' placeholder='ZipCode' className='from-control border-0 p-2 rounded'/>
                        </div>
                        <div className='w-100'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <Link to='/cart' className='text-dark' ><IoIosArrowRoundBack className='fs-4 me-2'/> Return to cart</Link>
                                <Link to='/' className='button' >Continue to shipping</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='col-5'>
                <div className='border-bottom py-3'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <div className='position-relative'>
                                <span className=' position-absolute badge bg-secondary text-white rounded-circle text-center' style={{top:"-5px" , right:"-4px"}}>1</span>
                                <img src={Product1} className='img-fluid' alt='product'/>
                            </div>
                        </div>
                        <div>
                            <h6 className='product-img-desc'>Black Gaming Headphones Bulk 10 Pack <br/>Multi Colored for Adults</h6>
                            <p className='product-img-details'>S / #B5CED4R</p>
                            </div>
                        <div>
                            <h5 className='product-img-price'>$100.00</h5>
                        </div>
                    </div>
                </div>
                <div className='border-bottom py-4'>
                    <div className='d-flex justify-content-between alighn-items-center'>
                        <p>Subtotal</p>
                        <p>$79.00</p>
                    </div>
                    <div className='d-flex justify-content-between alighn-items-center'>
                        <p>Shipping</p>
                        <p>$19.00</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between alighn-items-center pt-3'>
                    <h4 className='fs-5 mb-0'>Total</h4>
                    <h5><span className='currency mb-0'>USD</span>&nbsp;&nbsp;&nbsp;$100.00</h5>
                </div>
            </div>
        </div>
</Container>
</>
)
}

export default Checkout
