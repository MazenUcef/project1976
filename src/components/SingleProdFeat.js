import React from 'react'
import ReactStars from 'react-rating-stars-component'
import {Link, useLocation} from 'react-router-dom'


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
    <div className={`${location.pathname === '/product/:id'? `gr-${grid}` : "col-3"}`}>
      <Link to='product/:id' className='product-card position-relative'>
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
        value={4}
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
      </Link>
    </div>
    <div className={`${location.pathname === '/product/:id'? `gr-${grid}` : "col-3 mb-5"}`}>
      <Link to='product/:id' className='product-card position-relative'>
      <div className='wishlist-icon position-absolute'>
      <Link><img src='images/wish.svg' alt='wishlist' /></Link>
      </div>
        <div className='product-image'>
          <img src='images/f1.jpg' alt='product'/>
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
        <Link><img src='images/prodcompare.svg' alt='prodcompare'/></Link>
        <Link><img src='images/view.svg' alt='view'/></Link>
        <Link><img src='images/add-cart.svg' alt='addcart'/></Link>
        </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname === '/product/:id'? `gr-${grid}` : "col-3 mb-5"}`}>
      <Link to='product/:id' className='product-card position-relative'>
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
        value={3}
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
      </Link>
    </div>
    <div className={`${location.pathname === '/product/:id'? `gr-${grid}` : "col-3 mb-5"}`}>
    <Link to='product/:id' className='product-card position-relative'>
    <div className='wishlist-icon position-absolute'>
    <Link><img src='images/wish.svg' alt='wishlist' /></Link>
    </div>
      <div className='product-image'>
        <img src='images/f2.jpg' alt='product'/>
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
      <Link><img src='images/prodcompare.svg' alt='prodcompare'/></Link>
      <Link><img src='images/view.svg' alt='view'/></Link>
      <Link><img src='images/add-cart.svg' alt='addcart'/></Link>
      </div>
      </div>
    </Link>
    </div>
</>
)
}

export default SingleProdFeat
