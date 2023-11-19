import React from 'react'
import {Link} from 'react-router-dom'
const BlogCard = () => {
  return (
    <>
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'>11 June,2023</p>
                <h5 className='title'>A Beautiful Sunday Morning Renaissance</h5>
                <p className='desc'>You're Only As Your Last Collection, Which Is An
                Enormous Pressure. I Think There is something About...</p>
                <Link to='/' className='button'>Read More</Link>
            </div>
        </div>
    </div>
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-2.jpg' className='img-fluid' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'>11 June,2023</p>
                <h5 className='title'>Sed Ut Perspiciatis Unde Omnis...</h5> 
                <p className='desc'>You're Only As Your Last Collection, Which Is An
                Enormous Pressure. I Think There is something About...</p>
                <Link to='/' className='button'>Read More</Link>
            </div>
        </div>
    </div>
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-3.jpg' className='img-fluid' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'>11 June,2023</p>
                <h5 className='title'>Vitae Magnis Fusce Laoreet Porttitor...</h5>
                <p className='desc'>You're Only As Your Last Collection, Which Is An
                Enormous Pressure. I Think There is something About...</p>
                <Link to='/' className='button'>Read More</Link>
            </div>
        </div>
    </div>
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-4.jpg' className='img-fluid' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'>11 June,2023</p>
                <h5 className='title'>Urna Pretium Elit Mauris Cursus Curabitu</h5>
                <p className='desc'>You're Only As Your Last Collection, Which Is An
                Enormous Pressure. I Think There is something About...</p>
                <Link to='/' className='button'>Read More</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogCard
