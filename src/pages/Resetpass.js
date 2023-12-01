import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'


const Resetpass = () => {
  return (
<>
<Meta title = {"Reset Password"}/>
<BreadCrum title ='Reset Password'/>
<div className='login-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-4'>Reset Password</h3>
                    <form action='' className='d-flex flex-column gap-30'>
                        <div>
                            <input type='password' name='password' placeholder='Password...' className='form-control'/>
                        </div>
                        <div>
                            <input type='password' name='confpassword' placeholder='Confirm Password...' className='form-control'/>
                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-15'>
                            <button className='button border-0'>Reset</button>
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

export default Resetpass
