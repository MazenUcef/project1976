import React from 'react'
import Meta from '../components/Meta'
import BreadCrum from '../components/BreadCrum'
import Color from '../components/Color'
// import ReactStars from 'react-rating-stars-component'
import Container from '../components/Container'



const CompareProduct = () => {
  return (
<>
<Meta title = {"Compare Products"} />
<BreadCrum title ='Compare Products' />
<Container class1='compare-product-wrapper home-wrapper-2 py-5'>

        <div className='row'>
            <div className='col-3'>
                <div className='compare-product-card position-relative'>
                    <img 
                        src='images/cross.svg'
                        alt=''
                        className='position-absolute cross img-fluid'
                    />
                    <div className='product-card-image text-center'>
                        <img className='img-fluid text-center' src='images/spek-commpare1.jpg' alt='' />
                    </div>
                    <div className='compare-product-details'>
                        <h5 className='title'>High Def Speaker Brand<br/>32wat/34mil Panasonic</h5>
                        <h6 className='price mb-4'>$120.00</h6>
                        <div>
                            <div className='product-detail'>
                                <h5>Brand:</h5>
                                <p>Panasonic</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Type:</h5>
                                <p>Speakers</p>
                            </div>
                            <div className='product-detail'>
                                <h5>SKU</h5>
                                <p>SKU055</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Availability:</h5>
                                <p>In Stock</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Colors</h5>
                                <div>
                                    <Color />
                                </div>
                            </div>
                            <div className='product-detail'>
                                <h5>Size</h5>
                                <p>L M</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-3'>
                <div className='compare-product-card position-relative'>
                    <img 
                        src='images/cross.svg'
                        alt=''
                        className='position-absolute cross img-fluid'
                    />
                    <div className='product-card-image text-center'>
                        <img className='img-fluid text-center' src='images/tab3.jpg' alt='' />
                    </div>
                    <div className='compare-product-details'>
                        <h5 className='title'>Tablets Lenovo High Brand<br/>42inch/44inch Lenovo</h5>
                        <h6 className='price mb-4'>$1230.00</h6>
                        <div>
                            <div className='product-detail'>
                                <h5>Brand:</h5>
                                <p>Lenovo</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Type:</h5>
                                <p>Watches</p>
                            </div>
                            <div className='product-detail'>
                                <h5>SKU</h5>
                                <p>SKU004</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Availability:</h5>
                                <p>In Stock</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Colors</h5>
                                <div>
                                    <Color />
                                </div>
                            </div>
                            <div className='product-detail'>
                                <h5>Size</h5>
                                <p>44inch 45 46</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-3'>
                <div className='compare-product-card position-relative'>
                    <img 
                        src='images/cross.svg'
                        alt=''
                        className='position-absolute cross img-fluid'
                    />
                    <div className='product-card-image text-center'>
                        <img className='img-fluid text-center' src='images/chemise-commpare1.jpg' alt='' />
                    </div>
                    <div className='compare-product-details'>
                        <h5 className='title'>Chemise Mobaco cottons Brand<br/>Larg/Med 100% Cott</h5>
                        <h6 className='price mb-4'>$440.00</h6>
                        <div>
                            <div className='product-detail'>
                                <h5>Brand:</h5>
                                <p>Mobaco cottons</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Type:</h5>
                                <p>Watches</p>
                            </div>
                            <div className='product-detail'>
                                <h5>SKU</h5>
                                <p>SKU004</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Availability:</h5>
                                <p>In Stock</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Colors</h5>
                                <div>
                                    <Color />
                                </div>
                            </div>
                            <div className='product-detail'>
                                <h5>Size</h5>
                                <p>S M L</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-3'>
                <div className='compare-product-card position-relative'>
                    <img 
                        src='images/cross.svg'
                        alt=''
                        className='position-absolute cross img-fluid'
                    />
                    <div className='product-card-image text-center'>
                        <img className='img-fluid text-center' src='images/watch-prod2.jpg' alt='' />
                    </div>
                    <div className='compare-product-details'>
                        <h5 className='title'>Milanese Loop Watch Brand<br/>42mm/44mm Apple</h5>
                        <h6 className='price mb-4'>$10.00</h6>
                        <div>
                            <div className='product-detail'>
                                <h5>Brand:</h5>
                                <p>Havels</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Type:</h5>
                                <p>Watches</p>
                            </div>
                            <div className='product-detail'>
                                <h5>SKU</h5>
                                <p>SKU004</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Availability:</h5>
                                <p>In Stock</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Colors</h5>
                                <div>
                                    <Color />
                                </div>
                            </div>
                            <div className='product-detail'>
                                <h5>Size</h5>
                                <p>S M L</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</Container>
</>
  )
}

export default CompareProduct
