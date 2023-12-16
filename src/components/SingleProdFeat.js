import React from 'react'
import ReactStars from 'react-rating-stars-component'
import {Link, useLocation} from 'react-router-dom'
import Wishlist from '../images/wish.svg'
import Product1 from '../images/product-1.jpg'
import Product2 from '../images/f1.jpg'
import Product3 from '../images/product-2.jpg'
import Product4 from '../images/f2.jpg'
import Prodcomparer from '../images/prodcompare.svg'
import View from '../images/view.svg'
import AddCart from '../images/add-cart.svg'



const SingleProdFeat = (props) => {
    // ===========================
const location = useLocation()
const {grid} = props
// ==============================
    const ratingChanged = (newRating)=>{
        console.log(newRating);
    };
  return (
<>
    <div className={`${location.pathname === '/product/:id'? 'col-3' : `gr-${grid}`}`}>
        <Link to='/product/:id' className='product-card position-relative'>
      <div className='wishlist-icon position-absolute'>
      <button className='border-0 bg-transparent'><img src={Wishlist} alt='wishlist' /></button>
      </div>
        <div className='product-image'>
          <img src={Product1} alt='product'/>
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
        value={4}
        activeColor='#ffd700' 
        />
        <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
        <div className='d-flex flex-column'>
        <button className='border-0 bg-transparent'><img src={Prodcomparer} alt='prodcompare'/></button>
        <button className='border-0 bg-transparent'><img src={View} alt='view'/></button>
        <button className='border-0 bg-transparent'><img src={AddCart} alt='addcart'/></button>
        </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname === '/product/:id'? 'col-3 mb-5' : `gr-${grid}`}`}>
        <Link to='/product/:id' className='product-card position-relative'>
      <div className='wishlist-icon position-absolute'>
      <button className='border-0 bg-transparent'><img src={Wishlist} alt='wishlist' /></button>
      </div>
        <div className='product-image'>
          <img src={Product2} alt='product'/>
        </div>
        <div className='product-details'>
        <h6 className='brand'>Havels</h6>
        <h5 className='product-title'>
        Chemise Xli Flow itali<br/>
        printed inn rose...
        </h5>
        <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        edit={false}
        value={4}
        activeColor='#ffd700' 
        />
        <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
        <div className='d-flex flex-column'>
        <button className='border-0 bg-transparent'><img src={Prodcomparer} alt='prodcompare'/></button>
        <button className='border-0 bg-transparent'><img src={View} alt='view'/></button>
        <button className='border-0 bg-transparent'><img src={AddCart} alt='addcart'/></button>
        </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname === '/product/:id'? 'col-3 mb-5' : `gr-${grid}`}`}>
        <Link to='/product/:id' className='product-card position-relative'>
      <div className='wishlist-icon position-absolute'>
      <button className='border-0 bg-transparent'><img src={Wishlist} alt='wishlist' /></button>
      </div>
        <div className='product-image'>
          <img src={Product3} alt='product'/>
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
        value={3}
        activeColor='#ffd700' 
        />
        <p className='price'>$199.00</p>
        </div>
        <div className='action-bar position-absolute'>
        <div className='d-flex flex-column'>
        <button className='border-0 bg-transparent'><img src={Prodcomparer} alt='prodcompare'/></button>
        <button className='border-0 bg-transparent'><img src={View} alt='view'/></button>
        <button className='border-0 bg-transparent'><img src={AddCart} alt='addcart'/></button>
        </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname === '/product/:id'? 'col-3 mb-5' : `gr-${grid}`}`}>
    <Link to='product/:id' className='product-card position-relative single-prod'>
    <div className='wishlist-icon position-absolute'>
    <Link><img src={Wishlist} alt='wishlist' /></Link>
    </div>
      <div className='product-image'>
        <img src={Product4} alt='product'/>
      </div>
      <div className='product-details'>
      <h6 className='brand'>Havels</h6>
      <h5 className='product-title'>
      Chemise istalic typing<br/>
      Multi Colored xxli...
      </h5>
      <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      edit={false}
      value={4}
      activeColor='#ffd700' 
      />
      <p className='price'>$120.00</p>
      </div>
      <div className='action-bar position-absolute'>
      <div className='d-flex flex-column'>
      <button className='border-0 bg-transparent'><img src={Prodcomparer} alt='prodcompare'/></button>
      <button className='border-0 bg-transparent'><img src={View} alt='view'/></button>
      <button className='border-0 bg-transparent'><img src={AddCart} alt='addcart'/></button>
      </div>
      </div>
    </Link>
    </div>
</>
)
}

export default SingleProdFeat
