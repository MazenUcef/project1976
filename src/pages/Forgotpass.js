import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const Forgotpass = () => {
  return (
<>
<Meta title = {"Forgot Password"}/>
<BreadCrum title ='Forgot Password'/>
<div className='login-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-0'>Reset Your Password</h3>
                    <p className='text-center mt-2 mb-4'>We will send you an email to reset your password</p>
                    <form action='' className='d-flex flex-column gap-30'>
                        <div>
                            <input type='email' name='email' placeholder='Email' className='form-control'/>
                        </div>
                        <div className='d-flex justify-content-center flex-column align-items-center gap-15'>
                            <button className='button border-0' type='submit'>Submit</button>
                            <Link to='/login' className='bg-white text-black'>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Forgotpass
