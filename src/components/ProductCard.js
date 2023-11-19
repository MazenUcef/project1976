import React from 'react'
import ReactStars from 'react-rating-stars-component'
import {Link} from 'react-router-dom'

const ProductCard = () => {
    const ratingChanged = (newRating)=>{
        console.log(newRating);
    };
  return (
    <>
    <div className='col-3'>
      <div className='product-card position-relative'>
      <div className='wishlist-icon position-absolute'>
      <Link><img src='images/wish.svg' alt='wishlist' /></Link>
      </div>
        <div className='product-image'>
          <img src='images/product-1.jpg' alt='product'/>
        </div>
        <div className='product-details'>
        <h6 className='brand'>Havels</h6>
        <h5 className='product-title'>
        Kids Headphones Bulk 10<br/>
        Pack Multi Colored For...
        </h5>
        <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        edit={false}
        value='4'
        activeColor='#ffd700' 
        />
        <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
        <div className='d-flex flex-column'>
        <Link><img src='images/prodcompare.svg' alt='prodcompare'/></Link>
        <Link><img src='images/view.svg' alt='view'/></Link>
        <Link><img src='images/add-cart.svg' alt='addcart'/></Link>
        </div>
        </div>
      </div>
    </div>
    <div className='col-3'>
      <div className='product-card position-relative'>
      <div className='wishlist-icon position-absolute'>
      <Link><img src='images/wish.svg' alt='wishlist' /></Link>
      </div>
        <div className='product-image'>
          <img src='images/product-2.jpg' alt='product'/>
        </div>
        <div className='product-details'>
        <h6 className='brand'>Sony</h6>
        <h5 className='product-title'>
            Olymous Pen E-PL9 Kit
        </h5>
        <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        edit={false}
        value='3'
        activeColor='#ffd700' 
        />
        <p className='price'>$199.00</p>
        </div>
        <div className='action-bar position-absolute'>
        <div className='d-flex flex-column'>
        <Link><img src='images/prodcompare.svg' alt='prodcompare'/></Link>
        <Link><img src='images/view.svg' alt='view'/></Link>
        <Link><img src='images/add-cart.svg' alt='addcart'/></Link>
        </div>
        </div>
      </div>
    </div>
    <div className='col-3'>
      <div className='product-card position-relative'>
      <div className='wishlist-icon position-absolute'>
      <Link><img src='images/wish.svg' alt='wishlist' /></Link>
      </div>
        <div className='product-image'>
          <img src='images/tab.jpg' alt='product'/>
        </div>
        <div className='product-details'>
        <h6 className='brand'>Havels</h6>
        <h5 className='product-title'>
        HonorT1 7.0 1GB RAM 8GB<br/>
        ROM...
        </h5>
        <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        edit={false}
        value='4'
        activeColor='#ffd700' 
        />
        <p className='price'>$270.00</p>
        </div>
        <div className='action-bar position-absolute'>
        <div className='d-flex flex-column'>
        <Link><img src='images/prodcompare.svg' alt='prodcompare'/></Link>
        <Link><img src='images/view.svg' alt='view'/></Link>
        <Link><img src='images/add-cart.svg' alt='addcart'/></Link>
        </div>
        </div>
      </div>
    </div>
    <div className='col-3'>
      <div className='product-card position-relative'>
      <div className='wishlist-icon position-absolute'>
      <Link><img src='images/wish.svg' alt='wishlist' /></Link>
      </div>
        <div className='product-image'>
          <img src='images/product-3.jpg' alt='product'/>
        </div>
        <div className='product-details'>
        <h6 className='brand'>Sony</h6>
        <h5 className='product-title'>
        Milanese Loop Watch Band<br/>
        For 42mm/44mm Apple...
        </h5>
        <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        edit={false}
        value='5'
        activeColor='#ffd700' 
        />
        <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
        <div className='d-flex flex-column'>
        <Link><img src='images/prodcompare.svg' alt='prodcompare'/></Link>
        <Link><img src='images/view.svg' alt='view'/></Link>
        <Link><img src='images/add-cart.svg' alt='addcart'/></Link>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductCard
