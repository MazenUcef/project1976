import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import BlogBig1 from '../images/blog-big1.jpg'
import Container from '../components/Container';


const BlogSingle = () => {
  return (
<>
<Meta title = {"Dynamic Blog Name"}/>
<BreadCrum title ='Dynamic Blog Name'/>
<Container class1='blog-wrapper home-wrapper-2 py-4'>

        <div className='row'>
            <div className='col-3'>
                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Find By Categories</h3>
                    <div>
                        <ul className='ps-0'>
                            <li>Watch</li>
                            <li>TV</li>
                            <li>Camera</li>
                            <li>Laptop</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-9'>
                <div className='single-blog-card'>
                    <h3 className='title'>A Beautiful Sunday Morning Renaissance</h3>
                    <img className='img-fluid w-100 my-4' src={BlogBig1} alt='blog'/>
                    <p>
                    You are only as good as your last collection,
                    which is an enormous pressure.
                    I think there is something about luxury - 
                    it's not something people need,
                    but it's what they want.
                    It really pulls at their heart.
                    I have fantastic relationship with money.
                    Scelerisque sociosqu ullamcorper. 
                    </p>
                    <Link to='/blogs'><FaArrowLeft /> Go Back To Blogs</Link>
                </div>
            </div>
        </div>

</Container>
</>
  )
}

export default BlogSingle
