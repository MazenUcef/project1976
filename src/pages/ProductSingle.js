import React , {useState} from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
// import { Link } from 'react-router-dom'
// import ProductCard from '../components/ProductCard'
import SingleProdFeat from '../components/SingleProdFeat'
import ReactStars from 'react-rating-stars-component'

const ProductSingle = () => {
const ratingChanged = (newRating)=>{
    console.log(newRating);
};
// =========================================
const [orderedProduct , setOrderedProduct] = useState(true)




return (
<>
<Meta title = {"Product Name"}/>
<BreadCrum title ='Product Name'/>
<div className='main-product-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-6'></div>
            <div className='col-6'></div>
        </div>
    </div>
</div>
<section className='desc-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <h3 className='mb-4'>Description</h3>
                <div className='bg-white p-3'>
                    <p>
                        "Description Content......"
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<section className='reviews-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <h3 className='mb-4'>Reviews</h3>
                <div className='review-inner-wrapper'>
                    <div className='review-head bg-white p-3 d-flex justify-content-between align-items-end'>
                <div>
                    <h5 className='mb-4'>Customer Reviews</h5>
                    <div className='d-flex align-items-center gap-10'>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        edit={false}
                        value={4}
                        activeColor='#ffd700' 
                    />
                    <p className='mb-0'>Based On 2 Reviews</p>
                    </div>
                </div>
                {
                    orderedProduct && (
                        <div>
                        <a className=' text-decoration-underline' href=''>Write a Review</a>
                        </div>
                    )
                }
                    </div>
                    <div className='review-form py-4'> 
                    <h4>Write A Review</h4>
                    <form action='' className='d-flex flex-column gap-15'>
                    <div>
                    <input 
                        type='text' 
                        className='form-control' 
                        placeholder='Enter your name'
                    />
                    </div>
                    <div>
                    <input 
                        type='text' 
                        className='form-control' 
                        placeholder='john.smith@example.com'
                    />
                    </div>
                    <div>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            edit={true}
                            value={0}
                            activeColor='#ffd700' 
                        />
                    </div>
                    <div>
                        <textarea 
                            name='' 
                            id='' 
                            className='w-100 form-control' 
                            cols='30' 
                            rows='5' 
                            placeholder='Comment'>
                        </textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className='button border-0'>Submit Review</button>
                    </div>
                  </form>
                    </div>
                    <div className='reviews mt-5'>
                        <div className='review'>
                        <div className='gap-10 d-flex align-items-center'>
                        <h6 className='mb-0'>Mirann George</h6>
                        <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        edit={false}
                        value={4}
                        activeColor='#ffd700' 
                        />
                        </div>
                        <p className='mt-3'>
                        Finally, I believe the creator will create additional extensions.
                        So sounds great goahed
                        I had a lot of fun using this site, which is very adaptable.
                        , simple and extremely useful, Thanks a lot to the owner and the creator.
                        I had a fantastic time.
                        </p>
                        </div>
                        <div className='review'>
                        <div className='gap-10 d-flex align-items-center'>
                        <h6 className='mb-0'>John Stim</h6>
                        <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        edit={false}
                        value={5}
                        activeColor='#ffd700' 
                        />
                        </div>
                        <p className='mt-3'>
                        I had a lot of fun using this site, which is very adaptable.
                        , simple and extremely useful, Thanks a lot to the owner and the creator.
                        I had a fantastic time.
                        Finally, I believe the creator will create additional extensions.
                        So sounds great goahed
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className='featured-wrapper py-5 home-wrapper-2'>
<div className='container-xxl'>
  <div className='row'>
    <div className='col-12'>
        <h3 className='section-heading'>
            Featured Collection
        </h3>
    </div>
    <div className='row text-center'> 
        <SingleProdFeat/>
    </div>
  </div>
</div>
</section>
</>
  )
}

export default ProductSingle
