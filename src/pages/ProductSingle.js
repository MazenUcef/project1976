import React , {useState} from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import ReactImageZoom from 'react-image-zoom';
import { MdFavoriteBorder } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { RiRulerLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import Color from '../components/Color'
import SingleProdFeat from '../components/SingleProdFeat'
import ReactStars from 'react-rating-stars-component'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';




const ProductSingle = () => {
// =============================================
const props = { width: 700, height: 650, zoomWidth: 500, img: "1.jpg" , img:'images/headset-zoom.jpg'};
// =============================================
const ratingChanged = (newRating)=>{
console.log(newRating);
};
// =============================================
const [orderedProduct , setOrderedProduct] = useState(true)
// =============================================
return (
<>
<Meta title = {"Product Name"}/>
<BreadCrum title ='Product Name'/>
<div className='main-product-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl p-3 bg-white'>
        <div className='row'>
            <div className='col-6'>
                <div className='main-product-img'>
                    <div>
                        <ReactImageZoom {...props} />
                    </div>
                </div>
                <div className='other-product-images d-flex flex-wrap gap-15'>
                    <div><img src='images/headset-zoom1.jpg' alt='prod-img' className='img-fluid'/></div>
                    <div><img src='images/headset-zoom2.jpg' alt='prod-img' className='img-fluid'/></div>
                    <div><img src='images/headset-zoom3.jpg' alt='prod-img' className='img-fluid'/></div>
                    <div><img src='images/headset-zoom4.jpg' alt='prod-img' className='img-fluid'/></div>
                </div>
            </div>
            <div className='col-6'>
                <div className='main-product-details'>
                    <h3 className='title border-bottom py-3'>Black Gaming Headphones Bulk 10 Pack Multi Colored for Adults</h3>
                    <div >
                        <p className='price'>$100.00</p>
                        <div className='d-flex align-items-center gap-10'>
                            <ReactStars
                            count={5}
                            size={24}
                            value={5}
                            edit={false}
                            activeColor="#ffd700"
                            />
                            <p className='mb-0 p-rev'>(2 Reviews)</p>
                        </div>
                        <a className='pb-3' href='#review'>Write a Review</a>
                        <div className='border-bottom'></div>
                    </div>
                    <div className='py-3'>
                        <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading mb-0'>Type :</h3>
                            <p className='product-data mb-0'>HeadSet</p>
                        </div>
                        <div className='d-flex gap-10 align-items-center my-3'>
                            <h3 className='product-heading mb-0'>Brand :</h3>
                            <p className='product-data mb-0'>Havels</p>
                        </div>
                        <div className='d-flex gap-10 align-items-center my-3'>
                            <h3 className='product-heading mb-0'>Category:</h3>
                            <p className='product-data mb-0'>airpods, Computer & laptops, mini-speakers, Portable Speakers, Smarts</p>
                        </div>
                        <div className='d-flex gap-10 align-items-center my-3'>
                            <h3 className='product-heading mb-0'>Tags :</h3>
                            <p className='product-data mb-0'>HeadSet</p>
                        </div>
                        <div className='d-flex gap-10 align-items-center my-3'>
                            <h3 className='product-heading mb-0'>Availability :</h3>
                            <p className='product-data mb-0'>In Stock</p>
                        </div>
                        <div className='d-flex gap-10 flex-column  my-3'>
                            <h3 className='product-heading mb-0'>Size :</h3>
                            <div className='d-flex flex-wrap gap-15'>
                            <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                            <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                            <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                            <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                            <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                            </div>
                        </div>
                        <div className='d-flex gap-10 flex-column  my-3'>
                            <h3 className='product-heading mb-0'>Color :</h3>
                            <Color/>
                        </div>
                        <div className='d-flex align-items-center gap-15 flex-row my-3'>
                            <h3 className='product-heading mb-0'>Quantity :</h3>
                            <div className=''>
                            <input 
                            type='number' 
                            name='' id='' 
                            min={1} 
                            max={10}
                            className='form-control'
                            style={{width:"60px"}}
                            />
                            </div>
                            <div className='d-flex align-items-center gap-30 ms-5'>
                            <button className='button border-0'>ADD TO CART</button>
                            <button to='/' className='button border-0'>Buy It Now</button>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15'>
                        <div className=''>
                            <a className='add-to-compare' href=''><FaCodeCompare className='fs-5 me-2'/>Add to Compare</a>
                        </div>
                        <div className=''>
                            <a className='add-to-wish' href=''><MdFavoriteBorder className='fs-5 me-2'/>Add to WishList</a>
                        </div>
                        </div>
                        <div className='accordion my-5'>
                            <Accordion>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        <MdLocalShipping className='fs-4' /> Shipping & Returns
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Free shipping and returns available on all orders!
                                            We ship all US domestic orders within <b>5-10 business days!</b>
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        <SiMaterialdesignicons className='fs-5' /> Materials
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Running Shoes cushions your stride with softs foam to  keep you running in comfort. Lightweight knit Materials
                                            wraps your foot in breathable support. while a minimalist design fits in just about anywhere your day takes you.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        <RiRulerLine className='fs-4'/> Dimensions
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                    <table class="table table-striped">
                                    <thead>
                                    <tr>
                                        <th scope="col">Size</th>
                                        <th scope="col">Chest</th>
                                        <th scope="col">Neck</th>
                                        <th scope="col">Sleev</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">Small</th>
                                        <td>36-38</td>
                                        <td>14-14.5</td>
                                        <td>32.5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Medium</th>
                                        <td>39-41</td>
                                        <td>15-15.5</td>
                                        <td>33.5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Large</th>
                                        <td >42-44</td>
                                        <td >16-16.5</td>
                                        <td>34.5</td>
                                    </tr>
                                    </tbody>
                                </table>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        <CiHeart className='fs-4'/> Care Instructions
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                        </Accordion>
                        </div>
                    </div>
                </div>
            </div>
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
                        "combination of a microphone and headphones. A headset makes spoken communication possible without having to wear an earpiece or hold a microphone. It replaces, for example, a telephone handset and can be used to talk and listen at the same time."
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
                    <div id='review' className='review-form py-4'> 
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
