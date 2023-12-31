import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import BlogCard from '../components/BlogCard'
import Container from '../components/Container'


const Blogs = () => {
  return (
<>
<Meta title = {"Blogs"} />
<BreadCrum title ='Blogs' />
<Container class1='blog-wrapper home-wrapper-2 py-4'>
        <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
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
            <div className='col-lg-9 col-md-6 col-sm-12'>
                <div className='row'>
                    <BlogCard/>
                </div>
            </div>
        </div>
</Container>
</>
  )
}

export default Blogs
