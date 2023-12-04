import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'


const PrivacyPolicy = () => {
  return (
<>
<Meta title = {"Privacy Policy"}/>
<BreadCrum title ='Privacy Policy'/>
<section className='policy-wrapper py-5 home-wrapper-2'>
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-12'>
        <div className='policy'>
          <h3>Information Collection</h3>
          <h4>Types of Information:</h4>
          <p>We collect personal information such as name, address, email,
          payment details, and browsing behavior.
          Collection Methods: Information is collected through user input,
          cookies, and other tracking technologies.</p>
          <h4>Information Use</h4>
          <p>Use of Information: Collected information is used to process orders, provide customer support, personalize user experience, and for marketing and promotional activities.
          Third-Party Disclosure: We may disclose information to
          third-party service providers payment processors, shipping companies for
          order fulfillment and other business purposes.</p>
          <h4>Data Protection and Security</h4>
          <p>Data Security: We employ measures to safeguard user data from
          unauthorized access, misuse, or alteration.
          Security Measures: Our website utilizes encryption, SSL certificates
          , and secure payment gateways to protect user information.</p>
          <h4>Cookies and Tracking Technologies</h4>
          <p>Use of Cookies: We use cookies and tracking
          technologies to enhance user experience, analyze website traffic,
          and personalize content.
          User Control: Users can manage or disable cookies through their browser
          settings.</p>
          <h4>User Rights</h4>
          <p>ccess and Control: Users have the right to access, correct, or delete their personal information.
          Contact us for assistance in exercising these rights.</p>
          <h4>Children's Privacy</h4>
          <p>Our services are not directed toward
          children under the age of 13. We do not knowingly
          collect personal information from children.
          </p>
          <h4>Updates to Privacy Policy</h4>
          <p>We may update this Privacy Policy to reflect changes in our data collection practices or legal requirements.
          Users will be notified of any significant changes.</p>
          <h4>Contact Information</h4>
          <p>For questions, concerns, or to exercise privacy rights,
          users can contact us at <Link>hrteam@project1976.com</Link></p>

          </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default PrivacyPolicy
