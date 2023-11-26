import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'



const Wishlist = () => {
  return (
<>
<Meta title = {"Wishlist"}/>
<BreadCrum title ='Wishlist'/>
<div className='Wishlist-wrapper home-wrapper-2 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-3'>
          <div className='wishlist-card position-relative'>
            <img 
              src='images/cross.svg'
              alt=''
              className='position-absolute cross img-fluid'
            />
            <div className='wishlist-card-image text-center'>
              <img className='img-fluid text-center' src='images/spek-commpare1.jpg' alt='' />
            </div>
            <div className='wishlist-details'>
              <h5 className='title'>High Def Speaker Brand<br/>32wat/34mil Panasonic</h5>
              <h6 className='price mb-4'>$120.00</h6>
            </div>
          </div>
        </div>
        <div className='col-3'>
        <div className='wishlist-card position-relative'>
            <img 
                src='images/cross.svg'
                alt=''
                className='position-absolute cross img-fluid'
            />
            <div className='wishlist-card-image text-center'>
                <img className='img-fluid text-center' src='images/tab3.jpg' alt='' />
            </div>
            <div className='wishlist-details'>
                <h5 className='title'>Tablets Lenovo High Brand<br/>42inch/44inch Lenovo</h5>
                <h6 className='price mb-4'>$1230.00</h6>
            </div>
        </div>
        </div>
        <div className='col-3'>
        <div className='wishlist-card position-relative'>
            <img 
                src='images/cross.svg'
                alt=''
                className='position-absolute cross img-fluid'
            />
            <div className='wishlist-card-image text-center'>
                <img className='img-fluid text-center' src='images/chemise-commpare1.jpg' alt='' />
            </div>
            <div className='wishlist-details'>
                <h5 className='title'>Chemise Mobaco cottons Brand<br/>Larg/Med 100% Cott</h5>
                <h6 className='price mb-4'>$440.00</h6>
            </div>
        </div>
        </div>
        <div className='col-3'>
        <div className='wishlist-card position-relative'>
            <img 
                src='images/cross.svg'
                alt=''
                className='position-absolute cross img-fluid'
            />
            <div className='wishlist-card-image text-center'>
                <img className='img-fluid text-center' src='images/watch-prod2.jpg' alt='' />
            </div>
            <div className='wishlist-details'>
                <h5 className='title'>Milanese Loop Watch Brand<br/>42mm/44mm Apple</h5>
                <h6 className='price mb-4'>$10.00</h6>
            </div>
        </div>
        </div>
      </div>
    </div>
</div>

</>
  )
}

export default Wishlist
