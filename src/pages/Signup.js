import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'



const Signup = () => {
  return (
<>
<Meta title = {"sign-up"}/>
<BreadCrum title ='sign-up'/>
<div className='login-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-4'>Create Account</h3>
                    <form action='' className='d-flex flex-column gap-30'>
                        <div>
                            <input type='text' name='name' placeholder='First Name....' className='form-control'/>
                        </div>
                        <div>
                            <input type='text' name='last-name' placeholder='Last Name....' className='form-control'/>
                        </div>
                        <div>
                            <input type='tel' name='mobile' placeholder='Mobile Number....' className='form-control'/>
                        </div>
                        <div>
                            <input type='email' name='email' placeholder='Email' className='form-control'/>
                        </div>
                        <div>
                            <input type='password' name='password' placeholder='Password' className='form-control'/>
                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-15'>
                            <button className='button border-0'>Create</button>
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

export default Signup
