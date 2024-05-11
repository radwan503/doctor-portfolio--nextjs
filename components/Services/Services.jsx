import React from 'react'

const Services = () => {
 return (
  <>
   <section className="section service gray-bg" id='services'>
    <div className="container">
     <div className="row justify-content-center">
      <div className="col-lg-7 text-center">
       <div className="section-title">
        <h2>Services</h2>
        <div className="divider mx-auto my-4"></div>
        <p>Comprehensive Healthcare Services at Dr. Emily Sanchez's Clinic</p>
       </div>
      </div>
     </div>

     <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <i className="icofont icofont-laboratory text-lg"></i>
         <h4 className="mt-3 mb-3">Physical Examination</h4>
        </div>

        <div className="content">
         <p className="mb-4">Health assessments tailored to individual needs, including vital signs monitoring</p>
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <i className="icofont icofont-heart-beat-alt text-lg"></i>
         <h4 className="mt-3 mb-3">Care and Wellness</h4>
        </div>
        <div className="content">
         <p className="mb-4"> Preventive care plans to promote overall health and well-being, including vaccinations</p>
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <i className="icofont icofont-tooth text-lg"></i>
         <h4 className="mt-3 mb-3">Disease Management</h4>
        </div>
        <div className="content">
         <p className="mb-4">Treatment plans for managing chronic conditions such as diabetes, hypertension, asthma, and arthritis</p>
        </div>
       </div>
      </div>


      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <i className="icofont icofont-crutch text-lg"></i>
         <h4 className="mt-3 mb-3">Medication</h4>
        </div>

        <div className="content">
         <p className="mb-4">Personalized medication management plans to ensure safe and effective use of prescription medications</p>
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <i className="icofont icofont-brain-alt text-lg"></i>
         <h4 className="mt-3 mb-3">Diagnostic Testing</h4>
        </div>
        <div className="content">
         <p className="mb-4"> In-house diagnostic testing services, including laboratory tests, imaging studies (X-rays, ultrasounds)</p>
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <i className="icofont icofont-dna-alt-1 text-lg"></i>
         <h4 className="mt-3 mb-3">Nutritional Guidance</h4>
        </div>
        <div className="content">
         <p className="mb-4">Personalized dietary assessments and nutritional counseling to support optimal health and manage</p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default Services