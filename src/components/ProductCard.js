import React from 'react'
import ReactStars from 'react-rating-stars-component'
import {Link, useLocation} from 'react-router-dom'
import Wishlist from '../images/wish.svg'
import Product1 from '../images/product-1.jpg'
import Product2 from '../images/f1.jpg'
import Product3 from '../images/product-2.jpg'
import Product4 from '../images/f2.jpg'
import Product5 from '../images/tab2.jpg'
import Product6 from '../images/f3.jpg'
import Product7 from '../images/product-3.jpg'
import Product8 from '../images/f5.jpg'
import Product9 from '../images/f4.jpg'
import Product10 from '../images/f6.jpg'
import Product11 from '../images/equip1.jpg'
import Product12 from '../images/equip2.jpg'
import Product13 from '../images/f7.jpg'
import Product14 from '../images/f8.jpg'
import Product15 from '../images/n3.jpg'
import Product16 from '../images/equip3.jpg'
import Prodcomparer from '../images/prodcompare.svg'
import View from '../images/view.svg'
import AddCart from '../images/cart.svg'

const ProductCard = (props) => {
// ===========================
const location = useLocation()
const {grid} = props
// ==============================
    const ratingChanged = (newRating)=>{
        console.log(newRating);
    };
  return (
    <> 
    <div className={`${location.pathname === '/product'? `gr-${grid}` : "col-3"}`}>
      <Link to=':id' className='product-card position-relative'>
      <div className='wishlist-icon position-absolute'>
      <Link><img src={Wishlist} alt='wishlist' /></Link>
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
        <Link><img src='images/prodcompare.svg' alt='prodcompare'/></Link>
        <Link><img src='images/view.svg' alt='view'/></Link>
        <Link><img src='images/add-cart.svg' alt='addcart'/></Link>
        </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname === '/product'? `gr-${grid}` : "col-3 mb-5"}`}>
      <Link to=':id' className='product-card position-relative'>
      <div className='wishlist-icon position-absolute'>
      <Link><img src={Wishlist} alt='wishlist' /></Link>
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
        <Link><img src='images/prodcompare.svg' alt='prodcompare'/></Link>
        <Link><img src='images/view.svg' alt='view'/></Link>
        <Link><img src='images/add-cart.svg' alt='addcart'/></Link>
        </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname === '/product'? `gr-${grid}` : "col-3 mb-5"}`}>
      <Link to=':id' className='product-card position-relative'>
      <div className='wishlist-icon position-absolute'>
      <Link><img src={Wishlist} alt='wishlist' /></Link>
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
        <Link><img src='images/prodcompare.svg' alt='prodcompare'/></Link>
        <Link><img src='images/view.svg' alt='view'/></Link>
        <Link><img src='images/add-cart.svg' alt='addcart'/></Link>
        </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname === '/product'? `gr-${grid}` : "col-3 mb-5"}`}>
    <Link to=':id' className='product-card position-relative'>
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
      <Link><img src='images/prodcompare.svg' alt='prodcompare'/></Link>
      <Link><img src='images/view.svg' alt='view'/></Link>
      <Link><img src='images/add-cart.svg' alt='addcart'/></Link>
      </div>
      </div>
    </Link>
    </div>
    <div className={`${location.pathname === '/product'? `gr-${grid}` : "col-3 mb-5"}`}>
      <Link to=':id' className='product-card position-relative'>
      <div className='wishlist-icon position-absolute'>
      <Link><img src={Wishlist} alt='wishlist' /></Link>
      </div>
        <div className='product-image'>
          <img src={Product5} alt='product'/>
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
        value={4}
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
      </Link>
    </div>
    <div className={`${location.pathname === '/product'? `gr-${grid}` : "col-3 mb-5"}`}>
    <Link to=':id' className='product-card position-relative'>
    <div className='wishlist-icon position-absolute'>
    <Link><img src={Wishlist} alt='wishlist' /></Link>
    </div>
      <div className='product-image'>
        <img src={Product6} alt='product'/>
      </div>
      <div className='product-details'>
      <h6 className='brand'>Havels</h6>
      <h5 className='product-title'>
      Chemise brantu electric<br/>
      best in sum time elege...
      </h5>
      <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      edit={false}
      value={4}
      activeColor='#ffd700' 
      />
      <p className='price'>$99.00</p>
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
    <div className={`${location.pathname === '/product'? `gr-${grid}` : "col-3 mb-5"}`}>
      <Link to=':id' className='product-card position-relative'>
      <div className='wishlist-icon position-absolute'>
      <Link><img src={Wishlist} alt='wishlist' /></Link>
      </div>
        <div className='product-image'>
          <img src={Product7} alt='product'/>
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
        value={5}
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
    <div className={`${location.pathname === '/product'? `gr-${grid}` : "col-3 mb-5"}`}>
    <Link to=':id' className='product-card position-relative'>
    <div className='wishlist-icon position-absolute'>
    <Link><img src={Wishlist} alt='wishlist' /></Link>
    </div>
      <div className='product-image'>
        <img src={Product8} alt='product'/>
      </div>
      <div className='product-details'>
      <h6 className='brand'>Havels</h6>
      <h5 className='product-title'>
      Chemise Multi printed<br/>
      Multi Colored redHead xxli...
      </h5>
      <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      edit={false}
      value={4}
      activeColor='#ffd700' 
      />
      <p className='price'>$320.00</p>
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
    <div className={`${location.pathname === '/product'? `gr-${grid}` : "col-3 mb-5"}`}>
    <Link to=':id' className='product-card position-relative'>
    <div className='wishlist-icon position-absolute'>
    <Link><img src={Wishlist} alt='wishlist' /></Link>
    </div>
      <div className='product-image'>
        <img src={Product9} alt='product'/>
      </div>
      <div className='product-details'>
      <h6 className='brand'>Havels</h6>
      <h5 className='product-title'>
      Chemise extraa printed<br/>
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
      <p className='price'>$220.00</p>
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
    <div className={`${location.pathname === '/product'? `gr-${grid}` : "col-3 mb-5"}`}>
    <Link to=':id' className='product-card position-relative'>
    <div className='wishlist-icon position-absolute'>
    <Link><img src={Wishlist} alt='wishlist'/></Link>
    </div>
      <div className='product-image'>
        <img src={Product10} alt='product'/>
      </div>
      <div className='product-details'>
      <h6 className='brand'>ZARA</h6>
      <h5 className='product-title'>
      Chemise Double Face<br/>
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
    <div className={`${location.pathname === '/product'? `gr-${grid}` : "col-3 mb-5"}`}>
    <Link to=':id' className='product-card position-relative'>
    <div className='wishlist-icon position-absolute'>
    <Link><img src={Wishlist} alt='wishlist' /></Link>
    </div>
      <div className='product-image'>
        <img src={Product11} alt='product'/>
      </div>
      <div className='product-details'>
      <h6 className='brand'>LC Wak</h6>
      <h5 className='product-title'>
      P-Leg Press solid <br/>
      Colored b/w steel...
      </h5>
      <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      edit={false}
      value={4}
      activeColor='#ffd700' 
      />
      <p className='price'>$1420.00</p>
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
    <div className={`${location.pathname === '/product'? `gr-${grid}` : "col-3 mb-5"}`}>
    <Link to=':id' className='product-card position-relative'>
    <div className='wishlist-icon position-absolute'>
    <Link><img src={Wishlist} alt='wishlist' /></Link>
    </div>
      <div className='product-image'>
        <img src={Product12} alt='product'/>
      </div>
      <div className='product-details'>
      <h6 className='brand'>Havels</h6>
      <h5 className='product-title'>
      Tread-mill 1973*1000<br/>
      color b/w steal in and out...
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
    <div className={`${location.pathname === '/product'? `gr-${grid}` : "col-3 mb-5"}`}>
    <Link to=':id' className='product-card position-relative'>
    <div className='wishlist-icon position-absolute'>
    <Link><img src={Wishlist} alt='wishlist' /></Link>
    </div>
      <div className='product-image'>
        <img src={Product13} alt='product'/>
      </div>
      <div className='product-details'>
      <h6 className='brand'>LC Wak</h6>
      <h5 className='product-title'>
      Pants elastice blure<br/>
      Colored wheat...
      </h5>
      <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      edit={false}
      value={4}
      activeColor='#ffd700' 
      />
      <p className='price'>$420.00</p>
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
    <div className={`${location.pathname === '/product'? `gr-${grid}` : "col-3 mb-5"}`}>
    <Link to=':id' className='product-card position-relative'>
    <div className='wishlist-icon position-absolute'>
    <Link><img src={Wishlist} alt='wishlist' /></Link>
    </div>
      <div className='product-image'>
        <img src={Product14} alt='product'/>
      </div>
      <div className='product-details'>
      <h6 className='brand'>US.polo</h6>
      <h5 className='product-title'>
      Short italic typing<br/>
      Multi plain wheat...
      </h5>
      <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      edit={false}
      value={4}
      activeColor='#ffd700' 
      />
      <p className='price'>$20.00</p>
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
    <div className={`${location.pathname === '/product'? `gr-${grid}` : "col-3 mb-5"}`}>
    <Link to=':id' className='product-card position-relative'>
    <div className='wishlist-icon position-absolute'>
    <Link><img src={Wishlist} alt='wishlist' /></Link>
    </div>
      <div className='product-image'>
        <img src={Product15} alt='product'/>
      </div>
      <div className='product-details'>
      <h6 className='brand'>Havels</h6>
      <h5 className='product-title'>
      Chemise plain white<br/>
      Silver Colored xxli...
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
    <div className={`${location.pathname === '/product'? `gr-${grid}` : "col-3 mb-5"}`}>
    <Link to=':id' className='product-card position-relative'>
    <div className='wishlist-icon position-absolute'>
    <Link><img src={Wishlist} alt='wishlist' /></Link>
    </div>
      <div className='product-image'>
        <img src={Product16} alt='product'/>
      </div>
      <div className='product-details'>
      <h6 className='brand'>Havels</h6>
      <h5 className='product-title'>
      Bench Press Steal<br/>
      Silver Colored xxli...
      </h5>
      <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      edit={false}
      value={4}
      activeColor='#ffd700' 
      />
      <p className='price'>$1120.00</p>
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

export default ProductCard











































































































// import React , { useRef, useState } from 'react'
// import ReactStars from 'react-rating-stars-component'
// import {Link} from 'react-router-dom'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
// import './style.css'

// const SpecialProducts = () => {
//     const pagination = {
//         clickable: true,
//         renderBullet: function (index, className) {
//           return '<span class="' + className + '">' + (index + 1) + '</span>';
//         },
//       };
//     const ratingChanged = (newRating)=>{
//         console.log(newRating);
//     };
//   return (
//     <>
    
//           <Swiper
//           pagination={pagination}
//           modules={[Pagination]}
//           className="mySwiper"
//       >
//       <SwiperSlide>
//         <div className='col-12 row'>
//             <div className='col-4 my-4'>
//         <div className='special-product-card'>
//             <div className='d-flex justify-content-between'>
//                 <div className=''>
//                 <div>
//                 <img src='images/watch-prod2.jpg' className='img-fluid' alt=''/>
//                 </div>
//                 </div>
//                 <div className='special-product-content'>
//                 <h5 className='brand'>Casio</h5>
//                 <h6 className='title'>Watch Elect-M12<br/>Watch Screen...</h6>
//                 <ReactStars
//                 count={5}
//                 onChange={ratingChanged}
//                 size={24}
//                 edit={false}
//                 value={5}
//                 activeColor='#ffd700' 
//                 />
//                 <p className='price'>
//                 <span className='red-p'>$33</span>&nbsp;<strike>$99</strike>
//                 </p>
//                 <div className='discount-title'>
//                 <p className='mb-0'>
//                 <b>13 days</b>
//                 </p>
//                 <div className='d-flex gap-10 align-items-center'>
//                 <span className='badge rounded-circle p-2 bg-success'>19</span>:
//                 <span className='badge rounded-circle p-2 bg-success'>34</span>:
//                 <span className='badge rounded-circle p-2 bg-success'>10</span> 
//                 </div>
//                 <div className='prod-count my-3'>
//                 <p>Products: 245</p>
//                 <div 
//                 className="progress" 
//                 role="progressbar" 
//                 aria-label="Basic example" 
//                 aria-valuenow="25" 
//                 aria-valuemin="0" 
//                 aria-valuemax="100"
//                 style={{height:"5px"}}
//                 >
//                         <div className="progress-bar"  style={{width: "75%" , height:"5px" , backgroundColor:"#088178"}}></div>
//                 </div>
//                 </div>
//                 <Link className="button">Add to Cart</Link>
//                 </div>
//                 </div>
//             </div>
//         </div>
//             </div>
//             <div className='col-4 my-4'>
//             <div className='special-product-card'>
//                 <div className='d-flex justify-content-between'>
//                     <div className=''>
//                     <div>
//                     <img src='images/acc2.jpg' className='img-fluid' alt=''/>
//                     </div>
//                     </div>
//                     <div className='special-product-content'>
//                     <h5 className='brand'>Apple</h5>
//                     <h6 className='title'>AirPods SEC Gene<br/>Air France with...</h6>
//                     <ReactStars
//                     count={5}
//                     onChange={ratingChanged}
//                     size={24}
//                     edit={false}
//                     value={5}
//                     activeColor='#ffd700' 
//                     />
//                     <p className='price'>
//                     <span className='red-p'>$200</span>&nbsp;<strike>$300</strike>
//                     </p>
//                     <div className='discount-title'>
//                     <p className='mb-0'>
//                     <b>5 days</b>
//                     </p>
//                     <div className='d-flex gap-10 align-items-center'>
//                     <span className='badge rounded-circle p-2 bg-success'>80</span>:
//                     <span className='badge rounded-circle p-2 bg-success'>20</span>:
//                     <span className='badge rounded-circle p-2 bg-success'>3</span> 
//                     </div>
//                     <div className='prod-count my-3'>
//                     <p>Product: 55</p>
//                     <div 
//                     className="progress" 
//                     role="progressbar" 
//                     aria-label="Basic example" 
//                     aria-valuenow="25" 
//                     aria-valuemin="0" 
//                     aria-valuemax="100"
//                     style={{height:"5px"}}
//                     >
//                             <div className="progress-bar"  style={{width: "41%" , height:"5px" , backgroundColor:"#088178"}}></div>
//                     </div>
//                     </div>
//                     <Link className="button">Add to Cart</Link>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//             <div className='col-4 my-4'>
//             <div className='special-product-card'>
//             <div className='d-flex justify-content-between'>
//                 <div className=''>
//                 <div>
//                 <img src='images/tab.jpg' className='img-fluid' alt=''/>
//                 </div>
//                 </div>
//                 <div className='special-product-content'>
//                 <h5 className='brand'>Toshiba</h5>
//                 <h6 className='title'>TeleV flatScreen<br/>3D Led Screen...</h6>
//                 <ReactStars
//                 count={5}
//                 onChange={ratingChanged}
//                 size={24}
//                 edit={false}
//                 value={5}
//                 activeColor='#ffd700' 
//                 />
//                 <p className='price'>
//                 <span className='red-p'>$1100</span>&nbsp;<strike>$1200</strike>
//                 </p>
//                 <div className='discount-title'>
//                 <p className='mb-0'>
//                 <b>5 days</b>
//                 </p>
//                 <div className='d-flex gap-10 align-items-center'>
//                 <span className='badge rounded-circle p-2 bg-success'>66</span>:
//                 <span className='badge rounded-circle p-2 bg-success'>0</span>:
//                 <span className='badge rounded-circle p-2 bg-success'>0</span> 
//                 </div>
//                 <div className='prod-count my-3'>
//                 <p>Product: 15</p>
//                 <div 
//                 className="progress" 
//                 role="progressbar" 
//                 aria-label="Basic example" 
//                 aria-valuenow="25" 
//                 aria-valuemin="0" 
//                 aria-valuemax="100"
//                 style={{height:"5px"}}
//                 >
//                         <div className="progress-bar"  style={{width: "66%" , height:"5px" , backgroundColor:"#088178"}}></div>
//                 </div>
//                 </div>
//                 <Link className="button">Add to Cart</Link>
//                 </div>
//                 </div>
//             </div>
//         </div>
//             </div>
//         </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className='col-12 row'>
//             <div className='col-4 my-4'>
//         <div className='special-product-card'>
//         <div className='d-flex justify-content-between'>
//             <div className=''>
//             <div>
//             <img src='images/Camera-prod3.jpg' className='img-fluid' alt=''/>
//             </div>
//             </div>
//             <div className='special-product-content'>
//             <h5 className='brand'>Canon</h5>
//             <h6 className='title'>Canon Session Action Camera<br/>With 8MP...</h6>
//             <ReactStars
//             count={5}
//             onChange={ratingChanged}
//             size={24}
//             edit={false}
//             value={3}
//             activeColor='#ffd700' 
//             />
//             <p className='price'>
//             <span className='red-p'>$16</span>&nbsp;<strike>$30</strike>
//             </p>
//             <div className='discount-title'>
//             <p className='mb-0'>
//             <b>8 days</b>
//             </p>
//             <div className='d-flex gap-10 align-items-center'>
//             <span className='badge rounded-circle p-2 bg-success'>192</span>:
//             <span className='badge rounded-circle p-2 bg-success'>0</span>:
//             <span className='badge rounded-circle p-2 bg-success'>0</span> 
//             </div>
//             <div className='prod-count my-3'>
//             <p>Products: 100</p>
//             <div 
//             className="progress" 
//             role="progressbar" 
//             aria-label="Basic example" 
//             aria-valuenow="50" 
//             aria-valuemin="0" 
//             aria-valuemax="100"
//             style={{height:"5px"}}
//             >
//                     <div className="progress-bar"  style={{width: "50%" , height:"5px" , backgroundColor:"#088178"}}></div>
//             </div>
//             </div>
//             <Link className="button">Add to Cart</Link>
//             </div>
//             </div>
//         </div>
//     </div>
//             </div>
//             <div className='col-4 my-4'>
//             <div className='special-product-card'>
//                 <div className='d-flex justify-content-between'>
//                     <div className=''>
//                     <div>
//                     <img src='images/speaker2.jpg' className='img-fluid' alt=''/>
//                     </div>
//                     </div>
//                     <div className='special-product-content'>
//                     <h5 className='brand'>Bajaj</h5>
//                     <h6 className='title'>Beoplay A1 Portable Blu<br/>Speaker with...</h6>
//                     <ReactStars
//                     count={5}
//                     onChange={ratingChanged}
//                     size={24}
//                     edit={false}
//                     value={4}
//                     activeColor='#ffd700' 
//                     />
//                     <p className='price'>
//                     <span className='red-p'>$100</span>&nbsp;<strike>$200</strike>
//                     </p>
//                     <div className='discount-title'>
//                     <p className='mb-0'>
//                     <b>2 days</b>
//                     </p>
//                     <div className='d-flex gap-10 align-items-center'>
//                     <span className='badge rounded-circle p-2 bg-success'>48</span>:
//                     <span className='badge rounded-circle p-2 bg-success'>0</span>:
//                     <span className='badge rounded-circle p-2 bg-success'>0</span> 
//                     </div>
//                     <div className='prod-count my-3'>
//                     <p>Product: 42</p>
//                     <div 
//                     className="progress" 
//                     role="progressbar" 
//                     aria-label="Basic example" 
//                     aria-valuenow="25" 
//                     aria-valuemin="0" 
//                     aria-valuemax="100"
//                     style={{height:"5px"}}
//                     >
//                             <div className="progress-bar"  style={{width: "25%" , height:"5px" , backgroundColor:"#088178"}}></div>
//                     </div>
//                     </div>
//                     <Link className="button">Add to Cart</Link>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//             <div className='col-4 my-4'>
//             <div className='special-product-card'>
//                 <div className='d-flex justify-content-between'>
//                     <div className=''>
//                     <div>
//                     <img src='images/phone-prod1.jpg' className='img-fluid' alt=''/>
//                     </div>
//                     </div>
//                     <div className='special-product-content'>
//                     <h5 className='brand'>Samsung</h5>
//                     <h6 className='title'>Samsung Galaxy Note10+<br/>Mobile Phone;Sim...</h6>
//                     <ReactStars
//                     count={5}
//                     onChange={ratingChanged}
//                     size={24}
//                     edit={false}
//                     value={5}
//                     activeColor='#ffd700' 
//                     />
//                     <p className='price'>
//                     <span className='red-p'>$144</span>&nbsp;<strike>$344</strike>
//                     </p>
//                     <div className='discount-title'>
//                     <p className='mb-0'>
//                     <b>5 days</b>
//                     </p>
//                     <div className='d-flex gap-10 align-items-center'>
//                     <span className='badge rounded-circle p-2 bg-success'>120</span>:
//                     <span className='badge rounded-circle p-2 bg-success'>0</span>:
//                     <span className='badge rounded-circle p-2 bg-success'>0</span> 
//                     </div>
//                     <div className='prod-count my-3'>
//                     <p>Product: 5</p>
//                     <div 
//                     className="progress" 
//                     role="progressbar" 
//                     aria-label="Basic example" 
//                     aria-valuenow="25" 
//                     aria-valuemin="0" 
//                     aria-valuemax="100"
//                     style={{height:"5px"}}
//                     >
//                             <div className="progress-bar"  style={{width: "5%" , height:"5px" , backgroundColor:"#088178"}}></div>
//                     </div>
//                     </div>
//                     <Link className="button">Add to Cart</Link>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </SwiperSlide>
        
//       </Swiper>




//     </>
//     )
// }

// export default SpecialProducts


