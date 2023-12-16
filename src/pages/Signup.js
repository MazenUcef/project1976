import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'


const Signup = () => {
  return (
<>
<Meta title = {"sign-up"}/>
<BreadCrum title ='sign-up'/>
<Container class1='login-wrapper py-5 home-wrapper-2'>

        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-4'>Create Account</h3>
                    <form action='' className='d-flex flex-column gap-30'>
                        <CustomInput type='text' name='name' placeholder='First Name....'/>
                        <CustomInput type='text' name='name' placeholder='Last Name....'/>
                        <CustomInput type='tel' name='mobile' placeholder='Mobile Number....'/>
                        <CustomInput type='email' name='email' placeholder='Email'/>
                        <CustomInput type='password' name='password' placeholder='Password'/>
                        <div className='d-flex justify-content-center align-items-center gap-15'>
                            <button className='button border-0'>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

</Container>
</>
  )
}

export default Signup
