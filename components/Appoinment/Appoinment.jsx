import React from 'react'

const Appoinment = () => {
 return (
  <>
   <section className="section appoinment" id='appoinment'>
    <div className="container">
     <div className="row align-items-center">
      <div className="col-lg-6 ">
       <div className="appoinment-content">
        <img src="/images/about/profile-1.jpg" alt="" className="img-fluid" />
        <div className="emergency">
         <h2 className="text-lg"><i className="icofont icofont-phone-circle text-lg"></i>+2-990-770-55</h2>
        </div>
       </div>
      </div>
      <div className="col-lg-6 col-md-10 ">
       <div className="appoinment-wrap mt-5 mt-lg-0">
        <h2 className="mb-2 title-color">Book appoinment</h2>
        <p className="mb-4">The process of booking an appointment is simple. Just fill out the form below, and we'll get back to you shortly.</p>
        <form id="#" className="appoinment-form" method="post" action="#">
         <div className="row">
          <div className="col-lg-6">
           <div className="form-group">
            <select className="form-control" id="exampleFormControlSelect1">
             <option>Choose Clinic</option>
             <option>Newyork,USA</option>
             <option>London,UK</option>
            </select>
           </div>
          </div>
          <div className="col-lg-6">
           <div className="form-group">
            <select className="form-control" id="exampleFormControlSelect2">
             <option>Select Services</option>
             <option>Comprehensive Physical Examinations:</option>
             <option>Preventive Care and Wellness</option>
             <option>Chronic Disease Management</option>
             <option>Acute Illness Management</option>
             <option>Medication Management</option>
             <option>Diagnostic Testing</option>
             <option>Telemedicine Consultations</option>
             <option>Nutritional Guidance</option>
             <option>Mental Health Support</option>
            </select>
           </div>
          </div>

          <div className="col-lg-6">
           <div className="form-group">
            <input name="date" id="date" type="text" className="form-control" placeholder="dd/mm/yyyy" />
           </div>
          </div>

          <div className="col-lg-6">
           <div className="form-group">
            <input name="time" id="time" type="text" className="form-control" placeholder="Time" />
           </div>
          </div>
          <div className="col-lg-6">
           <div className="form-group">
            <input name="name" id="name" type="text" className="form-control" placeholder="Full Name" />
           </div>
          </div>

          <div className="col-lg-6">
           <div className="form-group">
            <input name="phone" id="phone" type="Number" className="form-control" placeholder="Phone Number" />
           </div>
          </div>
         </div>
         <div className="form-group-2 mb-4">
          <textarea name="message" id="message" className="form-control" rows="6" placeholder="Your Message"></textarea>
         </div>

         <a className="btn btn-main btn-round-full" href="appoinment.html" >Make Appoinment <i className="icofont icofont-simple-right ml-2  "></i></a>
        </form>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default Appoinment