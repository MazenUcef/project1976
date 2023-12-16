import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProducts from '../components/SpecialProducts'
import ReactStars from 'react-rating-stars-component'
import Meta from '../components/Meta'
import Container from '../components/Container'

const Home = () => {
  const ratingChanged = (newRating)=>{
    console.log(newRating);
};
  return (
    <>
    <Meta title = {"Project1976-E-Com"} />
      <Container class1='home-wrapper-1 py-5 main'>
        <div className='row'>
          <div className='col-6'>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='main-banner-content position-relative'>
                <img src='images/main-banner-1.jpg' className='img-fluid rounde-3' alt=''/>
                <div className='main-banner-contentt position-absolute '>
                  <h4>SUPERCHARGER FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.<br/>for 24 mo. Footbote*</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
        <div className="carousel-item">
          <div className='main-banner-content position-relative'>
            <img src='images/main-banner.jpg' className='img-fluid rounde-3' alt=''/>
            <div className='main-banner-contentt position-absolute '>
              <h4>SUPERCHARGER FOR PROS.</h4>
              <h5>iPad S13+ Pro.</h5>
              <p>From $999.00 or $41.62/mo.<br/>for 24 mo. Footbote*</p>
              <Link className='button'>BUY NOW</Link>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
            <div className='small-banner-content position-relative'>
            <img src='images/catbanner-01.jpg' className='img-fluid rounde-3' alt=''/>
            <div className='small-banner-contentt position-absolute '>
              <h4>BEST SALE</h4>
              <h5>Laptops  Max</h5>
              <p>From $1699.00 <br/>or $64.62/mo.</p>
            </div>
          </div>
          <div className='small-banner-content position-relative'>
          <img src='images/catbanner-02.jpg' className='img-fluid rounde-3' alt=''/>
          <div className='small-banner-contentt position-absolute '>
            <h4>15% OFF</h4>
            <h5>Smartwatch 7</h5>
            <p>Shop the latest band<br/>styles and colors.</p>
          </div>
          </div>
          <div className='small-banner-content position-relative'>
          <img src='images/catbanner-03.jpg' className='img-fluid rounde-3' alt=''/>
          <div className='small-banner-contentt position-absolute '>
            <h4>NEW ARRIVAL</h4>
            <h5>Buy IPad Air</h5>
            <p>From $599 <br/>or $49.91/mo.</p>
          </div>
          </div>
          <div className='small-banner-content position-relative'>
          <img src='images/catbanner-04.jpg' className='img-fluid rounde-3' alt=''/>
          <div className='small-banner-contentt position-absolute '>
            <h4>FREE ENGRAVING</h4>
            <h5>AirPods Max</h5>
            <p>High-fidelity playback &<br/>ultra-low distortion</p>
          </div>
          </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='home-wrapper-2 py-5'>
      <div className='row'>
      <div className='col-12'>
        <div className='services d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center gap-10'>
            <img src='images/service.png' alt='services' />
            <div>
              <h6>Free Shipping</h6>
              <p className='mb-0'>From all order over $100</p>
            </div>
          </div>
          <div className='d-flex align-items-center gap-10'>
            <img src='images/service-02.png' alt='services' />
            <div>
              <h6>Daily Surprise Offers</h6>
              <p className='mb-0'>Save up to 25% off</p>
            </div>
            </div>
          <div className='d-flex align-items-center gap-10'>
            <img src='images/service-03.png' alt='services' />
            <div>
              <h6>Support 24/7</h6>
              <p className='mb-0'>Shop with an export</p>
            </div>
          </div>
          <div className='d-flex align-items-center gap-10'>
            <img src='images/service-04.png' alt='services' />
            <div>
              <h6>Affordable Prices</h6>
              <p className='mb-0'>Get Factory direct prices</p>
            </div>
          </div>
          <div className='d-flex align-items-center gap-10'>
            <img src='images/service-05.png' alt='services' />
            <div>
              <h6>Secure Payments</h6>
              <p className='mb-0'>100% Protected Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </Container>
      <Container class1='home-wrapper-2 py-5'>
      <div className='row'>
      <div className='col-12'>
        <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
          <div className='d-flex gap-30 align-items-center'>
            <div>
              <h6>Computers & Laptop</h6>
              <p>8 Items</p>
            </div>
            <img src='images/laptop.jpg' alt='camera'/>
          </div>
          <div className='d-flex gap-30 align-items-center'>
            <div>
              <h6>Cameras & Videos</h6>
              <p>10 Items</p>
            </div>
            <img src='images/camera.jpg' alt='camera'/>
          </div>
          <div className='d-flex gap-30 align-items-center'>
            <div>
              <h6>Smart Televison</h6>
              <p>12 Items</p>
            </div>
            <img src='images/tv.jpg' alt='camera'/>
          </div>
          <div className='d-flex gap-30 align-items-center'>
            <div>
              <h6>Home Appliances</h6>
              <p>6 Items</p>
            </div>
            <img src='images/homeapp.jpg' alt='camera'/>
          </div>
          <div className='d-flex gap-30 align-items-center'>
            <div>
              <h6>Portable Speakers</h6>
              <p>7 Items</p>
            </div>
            <img src='images/speaker.jpg' alt='camera'/>
          </div>
          <div className='d-flex gap-30 align-items-center'>
            <div>
              <h6>Smartwatches</h6>
              <p>8 Items</p>
            </div>
            <img src='images/watch.jpg' alt='camera'/>
          </div>
          <div className='d-flex gap-30 align-items-center'>
            <div>
              <h6>Headphones</h6>
              <p>6 Items</p>
            </div>
            <img src='images/headphone.jpg' alt='camera'/>
          </div>
          <div className='d-flex gap-30 align-items-center'>
            <div>
              <h6>Accessories</h6>
              <p>11 Items</p>
            </div>
            <img src='images/acc.jpg' alt='camera'/>
          </div>
        </div>
      </div>
    </div>
      </Container>
      <Container class1='featured-wrapper py-5 home-wrapper-2'>
      <div className='row'>
      <div className='col-12'>
        <h3 className='section-heading'>
          Featured Collection
        </h3>
      </div>
      <div className='row cards-container text-center'> 
        <ProductCard/>
      </div>
    </div>
      </Container>
      <Container class1='famous-wrapper py-5 home-wrapper-2'>
      <div className='row'>
      <div className='col-3'>
        <div className='famous-card position-relative'>
        <img src='images/banner-watch.jpg' className='img-fluid' alt='banner'/>
        <div className='famous-content position-absolute'>
          <h5>VIG SCREEN</h5>
          <h6>Smart Watch Series 7</h6>
          <p>From $399or $16.62/mo. for 24mo.*</p>
        </div>
        </div>
      </div>
      <div className='col-3'>
        <div className='famous-card position-relative'>
        <img src='images/laptop-banner.jpg'  className='img-fluid' alt='banner'/>
        <div className='famous-content position-absolute'>
          <h5>STUDIO DISPLAY</h5>
          <h6>600 nits of Brightness</h6>
          <p>27-inch 5K Retina display</p>
        </div>
        </div>
      </div>
      <div className='col-3'>
        <div className='famous-card position-relative'>
        <img src='images/mobile-banner.jpg' className='img-fluid' alt='banner'/>
        <div className='famous-content position-absolute'>
          <h5>SMARTPHONES</h5>
          <h6>Smartphone 13 Pro.</h6>
          <p>Now in Green,From$999.00 or 41.62</p>
        </div>
        </div>
      </div>
      <div className='col-3'>
        <div className='famous-card position-relative'>
        <img src='images/lamps-banner.jpg' className='img-fluid' alt='banner'/>
        <div className='famous-content position-absolute'>
          <h5>HOME SPEAKERS</h5>
          <h6>Room-filling sound.</h6>
          <p>From$699.00 or 116.62</p>
        </div>
        </div>
      </div>
    </div>
      </Container>
      <Container class1='special-wrapper py-5 home-wrapper-2'>
      <div className='row'>
      <div className='col-12'>
        <h3 className='section-heading'>Special Products</h3>
      </div>
      </div>
      <div className='row'>
      <SpecialProducts/>
      </div>
      </Container>
      <Container class1='popular-wrapper py-5 home-wrapper-2'>
      <div className='row'>
      <div className='col-12'>
        <h3 className='section-heading'>
          Our Popular Products
        </h3>
      </div>
    </div>
    <div className='row'>
      <div className='col-2'>
        <div className='card'>
          <Link className='card-content d-flex align-items-center'>
            <img src='images/watch7.jpg' alt='watch' />
            <h6>Smart Watch</h6>
          </Link>
          <Link className='card-content d-flex align-items-center'>
            <img src='images/speaker5.jpg' alt='speaker' />
            <h6>Speaker</h6>
          </Link>
          <Link className='card-content d-flex align-items-center'>
            <img src='images/laptop 2.jpg' alt='laptop' />
            <h6>Laptops</h6>
          </Link>
        </div>
      </div>
      <div className='col-2'>
        <div className='card-img position-relative'>
        <img src='images/lamp.jpg' className='' alt='background'/>
        <div className='card-img-details position-absolute'>
        <p className='title'>15% OFF</p>
        <h3>Home Lamps</h3>
        <p className=''>From $399or $16.62/mo.<br/>for 24 mo.</p>
        </div>
        </div>
      </div>
      <div className='col-2'>
      <div className='special-product-card card-special'>
          <div className='d-flex justify-content-between'>
              <div className=''>
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
      <div className='col-2'>
      <div className='special-product-card'>
      <div className='d-flex justify-content-between'>
          <div className=''>
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
      <div className='col-2'>
      <div className='special-product-card'>
      <div className='d-flex justify-content-between'>
          <div className=''>
          </div>
          <div className='special-product-content'>
          <h5 className='brand'>Apple</h5>
          <h6 className='title'>AirPods SEC Gene HeadAir France with...</h6>
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
      <div className='col-2'>
      <div className='special-product-card'>
      <div className='d-flex justify-content-between'>
          <div className=''>
          </div>
          <div className='special-product-content'>
          <h5 className='brand'>Canon</h5>
          <h6 className='title'>Canon Session Action<br/>With 8MP...</h6>
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
    </div>
      </Container>
      <Container class1='marquee-wrapper py-2'>
      <div className='row'>
      <div className='col-12'>
        <div className='marquee-inner-wrapper card-wrapper'>
          <Marquee className='d-flex'>
          <div className='mx-4 w-25'>
            <img src='images/brand-01.png' alt='brand'/>
          </div>
          <div className='mx-4 w-25'>
            <img src='images/brand-02.png' alt='brand'/>
          </div>
          <div className='mx-4 w-25'>
            <img src='images/brand-03.png' alt='brand'/>
          </div>
          <div className='mx-4 w-25'>
            <img src='images/brand-04.png' alt='brand'/>
          </div>
          <div className='mx-4 w-25'>
            <img src='images/brand-05.png' alt='brand'/>
          </div>
          <div className='mx-4 w-25'>
            <img src='images/brand-06.png' alt='brand'/>
          </div>
          <div className='mx-4 w-25'>
            <img src='images/brand-07.png' alt='brand'/>
          </div>
          </Marquee>
        </div>
      </div>
    </div>
      </Container>
      <Container class1='blog-wrapper py-5 home-wrapper-2'>
      <div className='row'>
      <div className='col-12'>
        <h3 className='section-heading'>
        Our Latest Blogs
        </h3>
      </div>
      <BlogCard/> 
    </div>
      </Container>
    </>
  )
}

export default Home
