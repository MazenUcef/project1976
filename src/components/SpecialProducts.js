import React from 'react'
import ReactStars from 'react-rating-stars-component'
import {Link} from 'react-router-dom'

const SpecialProducts = () => {
    const ratingChanged = (newRating)=>{
        console.log(newRating);
    };
  return (
    <>
    <div className='col-lg-4 col-md-6 col-sm-12 my-4'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div className=''>
                <div>
                <img src='images/watch-prod2.jpg' className='img-fluid' alt=''/>
                </div>
                </div>
                <div className='special-product-content'>
                <h5 className='brand'>Casio</h5>
                <h6 className='title'>Watch Elect-M12 RED<br/>Watch Screen...</h6>
                <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                edit={false}
                value={5}
                activeColor='#ffd700' 
                />
                <p className='price'>
                <span className='red-p'>$33</span>&nbsp;<strike>$99</strike>
                </p>
                <div className='discount-title'>
                <p className='mb-0'>
                <b>13 days</b>
                </p>
                <div className='d-flex gap-10 align-items-center'>
                <span className='badge rounded-circle p-2 bg-success'>19</span>:
                <span className='badge rounded-circle p-2 bg-success'>34</span>:
                <span className='badge rounded-circle p-2 bg-success'>10</span> 
                </div>
                <div className='prod-count my-3'>
                <p>Products: 245</p>
                <div 
                className="progress" 
                role="progressbar" 
                aria-label="Basic example" 
                aria-valuenow="25" 
                aria-valuemin="0" 
                aria-valuemax="100"
                style={{height:"5px"}}
                >
                        <div className="progress-bar"  style={{width: "75%" , height:"5px" , backgroundColor:"#088178"}}></div>
                </div>
                </div>
                <Link className="button">Add to Cart</Link>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div className='col-lg-4 col-md-6 col-sm-12 my-4'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div className=''>
                <div>
                <img src='images/tab.jpg' className='img-fluid' alt=''/>
                </div>
                </div>
                <div className='special-product-content'>
                <h5 className='brand'>Toshiba</h5>
                <h6 className='title'>TeleV flatScreen 15pxO<br/>3D Led Screen...</h6>
                <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                edit={false}
                value={5}
                activeColor='#ffd700' 
                />
                <p className='price'>
                <span className='red-p'>$1100</span>&nbsp;<strike>$1200</strike>
                </p>
                <div className='discount-title'>
                <p className='mb-0'>
                <b>5 days</b>
                </p>
                <div className='d-flex gap-10 align-items-center'>
                <span className='badge rounded-circle p-2 bg-success'>66</span>:
                <span className='badge rounded-circle p-2 bg-success'>0</span>:
                <span className='badge rounded-circle p-2 bg-success'>0</span> 
                </div>
                <div className='prod-count my-3'>
                <p>Product: 15</p>
                <div 
                className="progress" 
                role="progressbar" 
                aria-label="Basic example" 
                aria-valuenow="25" 
                aria-valuemin="0" 
                aria-valuemax="100"
                style={{height:"5px"}}
                >
                        <div className="progress-bar"  style={{width: "66%" , height:"5px" , backgroundColor:"#088178"}}></div>
                </div>
                </div>
                <Link className="button">Add to Cart</Link>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div className='col-lg-4 col-md-6 col-sm-12 my-4'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div className=''>
                <div>
                <img src='images/acc2.jpg' className='img-fluid' alt=''/>
                </div>
                </div>
                <div className='special-product-content'>
                <h5 className='brand'>Apple</h5>
                <h6 className='title'>AirPods SEC Gene Head<br/>Air France with...</h6>
                <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                edit={false}
                value={5}
                activeColor='#ffd700' 
                />
                <p className='price'>
                <span className='red-p'>$200</span>&nbsp;<strike>$300</strike>
                </p>
                <div className='discount-title'>
                <p className='mb-0'>
                <b>5 days</b>
                </p>
                <div className='d-flex gap-10 align-items-center'>
                <span className='badge rounded-circle p-2 bg-success'>80</span>:
                <span className='badge rounded-circle p-2 bg-success'>20</span>:
                <span className='badge rounded-circle p-2 bg-success'>3</span> 
                </div>
                <div className='prod-count my-3'>
                <p>Product: 55</p>
                <div 
                className="progress" 
                role="progressbar" 
                aria-label="Basic example" 
                aria-valuenow="25" 
                aria-valuemin="0" 
                aria-valuemax="100"
                style={{height:"5px"}}
                >
                        <div className="progress-bar"  style={{width: "41%" , height:"5px" , backgroundColor:"#088178"}}></div>
                </div>
                </div>
                <Link className="button">Add to Cart</Link>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div className='col-lg-4 col-md-6 col-sm-12 my-4'>
    <div className='special-product-card'>
    <div className='d-flex justify-content-between'>
        <div className=''>
        <div>
        <img src='images/Camera-prod3.jpg' className='img-fluid' alt=''/>
        </div>
        </div>
        <div className='special-product-content'>
        <h5 className='brand'>Canon</h5>
        <h6 className='title'>Canon Session Action Camera<br/>With 8MP...</h6>
        <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        edit={false}
        value={3}
        activeColor='#ffd700' 
        />
        <p className='price'>
        <span className='red-p'>$16</span>&nbsp;<strike>$30</strike>
        </p>
        <div className='discount-title'>
        <p className='mb-0'>
        <b>8 days</b>
        </p>
        <div className='d-flex gap-10 align-items-center'>
        <span className='badge rounded-circle p-2 bg-success'>192</span>:
        <span className='badge rounded-circle p-2 bg-success'>0</span>:
        <span className='badge rounded-circle p-2 bg-success'>0</span> 
        </div>
        <div className='prod-count my-3'>
        <p>Products: 100</p>
        <div 
        className="progress" 
        role="progressbar" 
        aria-label="Basic example" 
        aria-valuenow="50" 
        aria-valuemin="0" 
        aria-valuemax="100"
        style={{height:"5px"}}
        >
                <div className="progress-bar"  style={{width: "50%" , height:"5px" , backgroundColor:"#088178"}}></div>
        </div>
        </div>
        <Link className="button">Add to Cart</Link>
        </div>
        </div>
    </div>
</div>
    </div>
    <div className='col-lg-4 col-md-6 col-sm-12 my-4'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div className=''>
                <div>
                <img src='images/speaker2.jpg' className='img-fluid' alt=''/>
                </div>
                </div>
                <div className='special-product-content'>
                <h5 className='brand'>Bajaj</h5>
                <h6 className='title'>Beoplay A1 Portable Blutooth<br/>Speaker with...</h6>
                <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                edit={false}
                value={4}
                activeColor='#ffd700' 
                />
                <p className='price'>
                <span className='red-p'>$100</span>&nbsp;<strike>$200</strike>
                </p>
                <div className='discount-title'>
                <p className='mb-0'>
                <b>2 days</b>
                </p>
                <div className='d-flex gap-10 align-items-center'>
                <span className='badge rounded-circle p-2 bg-success'>48</span>:
                <span className='badge rounded-circle p-2 bg-success'>0</span>:
                <span className='badge rounded-circle p-2 bg-success'>0</span> 
                </div>
                <div className='prod-count my-3'>
                <p>Product: 42</p>
                <div 
                className="progress" 
                role="progressbar" 
                aria-label="Basic example" 
                aria-valuenow="25" 
                aria-valuemin="0" 
                aria-valuemax="100"
                style={{height:"5px"}}
                >
                        <div className="progress-bar"  style={{width: "25%" , height:"5px" , backgroundColor:"#088178"}}></div>
                </div>
                </div>
                <Link className="button">Add to Cart</Link>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div className='col-lg-4 col-md-6 col-sm-12 my-4'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div className=''>
                <div>
                <img src='images/phone-prod1.jpg' className='img-fluid' alt=''/>
                </div>
                </div>
                <div className='special-product-content'>
                <h5 className='brand'>Samsung</h5>
                <h6 className='title'>Samsung Galaxy Note10+++ phone<br/>Mobile Phone;Sim...</h6>
                <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                edit={false}
                value={5}
                activeColor='#ffd700' 
                />
                <p className='price'>
                <span className='red-p'>$144</span>&nbsp;<strike>$344</strike>
                </p>
                <div className='discount-title'>
                <p className='mb-0'>
                <b>5 days</b>
                </p>
                <div className='d-flex gap-10 align-items-center'>
                <span className='badge rounded-circle p-2 bg-success'>120</span>:
                <span className='badge rounded-circle p-2 bg-success'>0</span>:
                <span className='badge rounded-circle p-2 bg-success'>0</span> 
                </div>
                <div className='prod-count my-3'>
                <p>Product: 5</p>
                <div 
                className="progress" 
                role="progressbar" 
                aria-label="Basic example" 
                aria-valuenow="25" 
                aria-valuemin="0" 
                aria-valuemax="100"
                style={{height:"5px"}}
                >
                        <div className="progress-bar"  style={{width: "5%" , height:"5px" , backgroundColor:"#088178"}}></div>
                </div>
                </div>
                <Link className="button">Add to Cart</Link>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default SpecialProducts

