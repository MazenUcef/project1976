import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import BlogCard from '../components/BlogCard'


const Blogs = () => {
  return (
<>
<Meta title = {"Blogs"} />
<BreadCrum title ='Blogs' />
<div className='blog-wrapper home-wrapper-2 py-4'>
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-3'>
                <div className='filter-card mb-3'>
            <h3 className='filter-title'>Find By Categories</h3>
            <div>
            <ul className='ps-0'>
            <li>Watch</li>
            <li>Tv</li>
            <li>Camera</li>
            <li>Laptop</li>
            </ul>
            </div>
            
                </div>
            </div>
            <div className='col-9'>
                <div className='row'>
                    <BlogCard/>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Blogs
