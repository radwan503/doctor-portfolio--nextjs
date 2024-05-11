import React from 'react'

const Features = () => {
 return (
  <>
   <section className="features">
    <div className="container">
     <div className="row">
      <div className="col-lg-12">
       <div className="feature-block d-lg-flex">
        <div className="feature-item mb-5 mb-lg-0">
         <div className="feature-icon mb-4">
          <i className="icofont icofont-surgeon-alt"></i>
         </div>
         <span>24 Hours Service</span>
         <h4 className="mb-3">Online Appoinment</h4>
         <p className="mb-4">We've implemented the principle of family medicine, ensuring continuous care and support for you and your loved ones.</p>
         <a href="appoinment.html" className="btn btn-main btn-round-full">Make a appoinment</a>
        </div>

        <div className="feature-item mb-5 mb-lg-0">
         <div className="feature-icon mb-4">
          <i className="icofont icofont-ui-clock"></i>
         </div>
         <span>Timing schedule</span>
         <h4 className="mb-3">Working Hours</h4>
         <ul className="w-hours list-unstyled">
          <li className="d-flex justify-content-between">Sun - Wed : <span>7:00 - 18:00</span></li>
          <li className="d-flex justify-content-between">Thu - Fri : <span>8:00 - 18:00</span></li>
          <li className="d-flex justify-content-between">Sat - sun : <span>9:00 - 18:00</span></li>
         </ul>
        </div>

        <div className="feature-item mb-5 mb-lg-0">
         <div className="feature-icon mb-4">
          <i className="icofont icofont-support"></i>
         </div>
         <span>Emegency Cases</span>
         <h4 className="mb-3">2-990-770-5550</h4>
         <p>Experience all-time support for emergencies. We embrace the principle of family medicine, ensuring continuous care. Connect with us for any urgent need.</p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default Features
