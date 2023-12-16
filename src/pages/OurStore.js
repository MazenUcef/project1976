import React , {useState} from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Color from '../components/Color'
import Container from '../components/Container'


const OurStore = () => {
    const [grid , setGrid] = useState(3);
    // alert(grid)
// ============================================
    const ratingChanged = (newRating)=>{
        console.log(newRating);
    };
// ============================================ 



return (
<>
<Meta title = {"Our Store"} />
<BreadCrum title ='Our Store' />
<Container class1='store-wrapper py-5 home-wrapper-2'>

        <div className='row'>
            <div className='col-3'>
                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Shop By Categories</h3>
                    <div>
                    <ul className='ps-0'>
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                    </ul>
                    </div>
                    
                </div>
                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Filter By</h3>
                    <div>
                        <h5 className='sub-title'>Availablity</h5>
                        <div>
                            <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='' />
                        <lable className='form-check-label' htmlFor=''>In Stock (1)</lable>
                            </div>
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox' value='' id=''/>
                                <lable className='form-check-label' htmlFor=''>Out of Stock</lable>
                            </div>
                        </div>
                        <h5 className='sub-title'>Price</h5>
                        <div className='d-flex align-items-center gap-10'>
                            <form className="form-floating">
                                <input type="email" className="form-control py-1" id="floatingInput" placeholder="from..." />
                                <label htmlFor="floatingInput">From</label>
                            </form>
                            <form className="form-floating">
                                <input type="email"  className="form-control py-1" id="floatingInput1" placeholder="to..." />
                                <label htmlFor="floatingInput1">To</label>
                            </form>
                        </div>
                        <h5 className='sub-title'>Colors</h5>
                        <div>
                            <Color/>
                        </div>
                        <h5 className='sub-title'>Size</h5>
                        <div>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox' value='' id='color-1' />
                            <lable className='form-check-label' htmlFor='color-1'>S(2)</lable>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox' value='' id='color-1' />
                            <lable className='form-check-label' htmlFor='color-2'>M(0)</lable>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox' value='' id='color-1' />
                            <lable className='form-check-label' htmlFor='color-3'>XL(0)</lable>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox' value='' id='color-1' />
                            <lable className='form-check-label' htmlFor='color-4'>XXL(0)</lable>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Product Tags</h3>
                    <div>
                        <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                            <span className='badge bg-light text-secondary py-2 px-3 rounded-3'>HeadPhone</span>
                            <span className='badge bg-light text-secondary py-2 px-3 rounded-3'>Laptop</span>
                            <span className='badge bg-light text-secondary py-2 px-3 rounded-3'>Mobile</span>
                            <span className='badge bg-light text-secondary py-2 px-3 rounded-3'>Oppo</span>
                            <span className='badge bg-light text-secondary py-2 px-3 rounded-3'>Speaker</span>
                            <span className='badge bg-light text-secondary py-2 px-3 rounded-3'>Tablet</span>
                            <span className='badge bg-light text-secondary py-2 px-3 rounded-3'>Vivo</span>
                            <span className='badge bg-light text-secondary py-2 px-3 rounded-3'>Wire</span>
                        </div>
                    </div>
                </div>
                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Random Product</h3>
                    <div>
                        <div className='random-products d-flex mb-4'>
                            <div className='w-25'>
                                <img src='images/watch.jpg'className='img-fluid' alt='watch' />
                            </div>
                            <div className='w-75'>
                                <h5 className='mb-0'>Watch Elect-M12 RED
                                Watch Screen...
                                </h5>
                                <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                edit={false}
                                value={4}
                                activeColor='#ffd700' 
                                />
                                <b className='price'>$100.00</b>
                            </div>
                        </div>
                        <div className='random-products d-flex mt-4'>
                            <div className='w-25'>
                                <img src='images/speaker.jpg'className='img-fluid' alt='watch' />
                            </div>
                            <div className='w-75'>
                                <h5 className='mb-0'>Watch Elect-M12 RED
                                Watch Screen...
                                </h5>
                                <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                edit={false}
                                value={4}
                                activeColor='#ffd700' 
                                />
                                <b className='price'>$100.00</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-9'>
                <div className='filter-sort-grid mb-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center gap-10'>
                        <p className='mb-0' style={{width:'100px'}}>Sort By:</p>
                        <select name='sort-by' className='form-control form-select' id='sortBy'>
                            <option value='manual'>Featured</option>
                            <option value='best-selling' select='selected'>Best selling</option>
                            <option value='title-ascending'>Alphabetically, A-Z</option>
                            <option value='title-descending'>Alphabetically, Z-A</option>
                            <option value='price-ascending'>Price, low to high</option>
                            <option value='price-descending'>Price, high to low</option>
                            <option value='created-ascending'>Date, old to new</option>
                            <option value='created-descending'>Date, new to old</option>
                        </select>
                    </div>
                    <div className='d-flex align-items-center gap-10'>
                        <p className='totalProducts mb-0'>21 Products</p>
                        <div className='d-flex gap-10 align-items-center grid'>
                           <Link><img onClick={()=>setGrid(3)} className='d-block img-fluid' src='images/gr4.svg' alt='grid'/></Link> 
                           <Link><img onClick={()=>setGrid(4)} className='d-block img-fluid' src='images/gr3.svg' alt='grid'/></Link> 
                           <Link><img onClick={()=>setGrid(6)} className='d-block img-fluid' src='images/gr2.svg' alt='grid'/></Link>
                           <Link><img onClick={()=>setGrid(12)} className='d-block img-fluid' src='images/gr.svg' alt='grid'/></Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='products-list pb-5'>
                    <div className='row'>
                    <ProductCard grid={grid}/>
                    </div>
                </div>
            </div>
        </div>

</Container>
</>
  )
}

export default OurStore
