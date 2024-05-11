import React from 'react'

const Counter = () => {
 return (
  <>
   <section className="cta-section ">
    <div className="container">
     <div className="cta position-relative">
      <div className="row">
       <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="counter-stat">
         <i className="icofont icofont-doctor"></i>
         <span className="h3">10</span>k
         <p>Happy People</p>
        </div>
       </div>
       <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="counter-stat">
         <i className="icofont icofont-flag"></i>
         <span className="h3">100</span>+
         <p>Surgery Comepleted</p>
        </div>
       </div>

       <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="counter-stat">
         <i className="icofont icofont-badge"></i>
         <span className="h3">4</span>+
         <p>Achievements</p>
        </div>
       </div>
       <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="counter-stat">
         <i className="icofont icofont-globe"></i>
         <span className="h3">2</span>
         <p>Worldwide Branch</p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default Counter