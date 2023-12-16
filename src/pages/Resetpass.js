import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'


const Resetpass = () => {
  return (
<>
<Meta title = {"Reset Password"}/>
<BreadCrum title ='Reset Password'/>
<Container class1='login-wrapper py-5 home-wrapper-2'>

        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-4'>Reset Password</h3>
                    <form action='' className='d-flex flex-column gap-30'>
                    <CustomInput type='password' name='password' placeholder='Password'/>
                    <CustomInput type='password' name='Confpassword' placeholder='Confirm Password....'/>
                        <div className='d-flex justify-content-center align-items-center gap-15'>
                            <button className='button border-0'>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

</Container>
</>
  )
}

export default Resetpass
