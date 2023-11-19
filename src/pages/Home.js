import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <section className='home-wrapper-1 py-5 main'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
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
        <div class="carousel-item">
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
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
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
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
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
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
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
                  <p>8 Items</p>
                </div>
                <img src='images/speaker.jpg' alt='camera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Mobile & Tablets</h6>
                  <p>8 Items</p>
                </div>
                <img src='images/camera.jpg' alt='camera'/>
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
                  <p>10 Items</p>
                </div>
                <img src='images/acc.jpg' alt='camera'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home
