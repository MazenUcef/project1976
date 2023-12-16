import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Forgotpass = () => {
  return (
<>
<Meta title = {"Forgot Password"}/>
<BreadCrum title ='Forgot Password'/>
<Container class1='login-wrapper py-5 home-wrapper-2'>

        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-0'>Reset Your Password</h3>
                    <p className='text-center mt-2 mb-4'>We will send you an email to reset your password</p>
                    <form action='' className='d-flex flex-column gap-30'>
                        <CustomInput type='email' name='email' placeholder='Email'/>
                        <div className='d-flex justify-content-center flex-column align-items-center gap-15'>
                            <button className='button border-0' type='submit'>Submit</button>
                            <Link to='/login' className='bg-white text-black'>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

</Container>
</>
  )
}

export default Forgotpass
