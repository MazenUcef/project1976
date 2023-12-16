import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import Container from '../components/Container'


const TermAndCond = () => {
  return (
    <>
    <Meta title = {"Terms and Conditions"}/>
    <BreadCrum title ='Terms And Conditions'/>
    <Container class1='policy-wrapper py-5 home-wrapper-2'>

    <div className='row'>
      <div className='col-12'>
        <div className='policy'>
          <h3></h3>
          <h4></h4>
          <p></p>
        </div>
      </div>
    </div>

    </Container>
    </>
  )
}

export default TermAndCond
