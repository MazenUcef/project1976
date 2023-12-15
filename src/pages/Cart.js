import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { MdDelete } from "react-icons/md";
import Product1 from '../images/product-1.jpg'
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
<>
<Meta title = {"Cart"}/>
<BreadCrum title ='Cart'/>
<section className='cart-wrapper home-wrapper-2 py-5'>
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='d-flex py-3 justify-content-between align-content-center cart-header'>
                    <h4 className='cart-col-1'>Products</h4>
                    <h4 className='cart-col-2'>Price</h4>
                    <h4 className='cart-col-3'>Quantity</h4>
                    <h4 className='cart-col-4'>Total</h4>
                </div>
                <div className='cart-data mn-2 d-flex py-3 justify-content-between align-items-center'>
                    <div className='cart-col-1 gap-15 d-flex align-items-center'>
                        <div className='w-25'>
                            <img src={Product1} className='img-fluid' alt=''/>
                        </div>
                        <div className='w-75'>
                            <h5 className='title'>Black Gaming Headphones Bulk 10 Pack Multi Colored for Adults</h5>
                            <p className='size'>Size : M</p>
                            <p className='color'>Color : Red</p>
                        </div>
                    </div>
                    <div className='cart-col-2'>
                        <h5 className='price'>$100.00</h5>
                    </div>
                    <div className='cart-col-3 d-flex align-items-center gap-15'>
                        <div>
                            <input 
                                className='form-input' 
                                type='number' 
                                name='' 
                                id=''
                                min={1}
                                max={10}
                            />
                        </div>
                        <div>
                        <MdDelete className='delete-btn fs-4' />
                        </div>
                    </div>
                    <div className='cart-col-4'>
                    <h5 className='price'>$100.00</h5>
                    </div>
                </div>
            </div>
            <div className='col-12 py-2 mt-4'>
                <div className='d-flex justify-content-between align-items-baseline'>
                <Link to='/product' className='button'>Continue To Shopping</Link>
                <div className='d-flex flex-column align-items-end'>
                    <h4>SubTotal: $100.00</h4>
                    <p>Taxes and shipping calculated at chechout</p>
                    <Link to='/checkout' className='button'>Checkout</Link>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default Cart
