import React from 'react'
import {Link, useLocation} from 'react-router-dom'
const BlogCard = () => {
    const location = useLocation() 
  return (
    <>
    <div className={`${location.pathname === '/blogs' ?  'col-lg-6 col-md-12 col-sm-12' : 'col-3' }`}>
        <div className={`${location.pathname === '/blogs' ?  'blog-card secBlog' : 'blog-card'}`}>
            <div className='card-image'>
                <img id='img' src='images/blog-1.jpg' className='img-fluid' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'>11 June,2023</p>
                <h5 className='title'>A Beautiful Sunday Morning Renaissance</h5>
                <p className='desc'>You're Only As Your Last Collection, Which Is An
                Enormous Pressure. I Think There is something About...</p>
                <Link to='/blog/:id' className='button'>Read More</Link>
            </div>
        </div>
    </div>
    <div className={`${location.pathname === '/blogs' ?  'col-lg-6 col-md-12 col-sm-12' : 'col-3' }`}>
        <div className={`${location.pathname === '/blogs' ?  'blog-card secBlog' : 'blog-card'}`}>
            <div className='card-image'>
                <img id='img' src='images/blog-2.jpg' className='img-fluid' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'>11 June,2023</p>
                <h5 className='title'>Sed Ut Perspiciatis Unde Omnis...</h5> 
                <p className='desc'>You're Only As Your Last Collection, Which Is An
                Enormous Pressure. I Think There is something About...</p>
                <Link to='/blog/:id' className='button'>Read More</Link>
            </div>
        </div>
    </div>
    <div className={`${location.pathname === '/blogs' ?  'col-lg-6 col-md-12 col-sm-12' : 'col-3' }`}>
        <div className={`${location.pathname === '/blogs' ?  'blog-card secBlog' : 'blog-card'}`}>
            <div className='card-image'>
                <img id='img' src='images/blog-3.jpg' className='img-fluid' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'>11 June,2023</p>
                <h5 className='title'>Vitae Magnis Fusce Laoreet Porttitor...</h5>
                <p className='desc'>You're Only As Your Last Collection, Which Is An
                Enormous Pressure. I Think There is something About...</p>
                <Link to='/blog/:id' className='button'>Read More</Link>
            </div>
        </div>
    </div>
    <div className={`${location.pathname === '/blogs' ?  'col-lg-6 col-md-12 col-sm-12' : 'col-3' }`}>
        <div className={`${location.pathname === '/blogs' ?  'blog-card secBlog' : 'blog-card'}`}>
            <div className='card-image'>
                <img id='img' src='images/blog-4.jpg' className='img-fluid' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'>11 June,2023</p>
                <h5 className='title'>Urna Pretium Elit Mauris Cursus Curabitu</h5>
                <p className='desc'>You're Only As Your Last Collection, Which Is An
                Enormous Pressure. I Think There is something About...</p>
                <Link to='/blog/:id' className='button'>Read More</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogCard
