import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'


const RefundPolicy = () => {
  return (
    <>
    <Meta title = {"Refund Policy"}/>
    <BreadCrum title ='Refund Policy'/>
    <section className='policy-wrapper py-5 home-wrapper-2'>
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-12'>
        <div className='policy'>
          <h3>Refund Policy</h3>
          <h4>Eligibility for Refunds</h4>
          <p>Product Returns: We accept returns within 7 days from
          the date of purchase/delivery for a full refund or exchange,
          provided the item is unused, in its original condition, and 
          accompanied by proof of purchase.
          Services: Refunds for services are assessed on
          a case-by-case basis, considering the nature of the service
          provided.
          </p>
          <h3>Refund Process</h3>
          <p>Product Returns: To initiate a return, please contact our customer service team at <Link href='mailto:Hrteam@project1976.com' className=''>
          hrteam@project1976.com
          </Link> Once approved, you will receive instructions on how to return the item.
          Services: For service-related refunds, please reach out to <Link href='mailto:Hrteam@project1976.com' className=''>
          hrteam@project1976.com
          </Link> Our team will review the request and provide guidance on the refund process if applicable.</p>
          <h3>Refund Method</h3>
          <p>Original Payment: Refunds will be issued via the original method of payment used for the purchase.
          Processing Time: Please allow [number of days] days for the refund to be processed after we receive the returned item or approve the refund request.</p>
          <h3>Non-Refundable Items and Services</h3>
          <p>Downloadable/Digital Products: We do not offer refunds for downloadable or digital products once the download/access has been provided.
          Customized or Personalized Items/Services: Items or services that are customized or personalized according to your specifications may not be eligible for a refund</p>
          <h3>Shipping Costs</h3>
          <p>Return Shipping: Customers are responsible for return shipping costs unless the return is due to a mistake on our part or a defective product/service.</p>
          <h3>Damaged or Defective Items</h3>
          <p>Damaged Items: If you receive a damaged or defective item, please contact us immediately for assistance and a possible replacement or refund.</p>
          <h3>Changes to Refund Policy</h3>
          <p>Policy Updates: We reserve the right to modify or update our refund policy at any time. Any changes will be reflected on this page.</p>
          <h3></h3>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default RefundPolicy
