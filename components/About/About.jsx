import React from 'react'

const About = () => {
 return (
  <>
   <section className="section about" id='about'>
    <div className="container position-relative">
     <div className="row">
      <div className="col-12 col-md-8 col-lg-6">
       <div className="d-flex flex-column justify-content-center h-100">
        <h2 className="about-heading">About Dr. Emily</h2>
        <p className="about-sub-heading my-2">
         Dr. Emily Sanchez is a highly skilled and compassionate physician with over 15 years of experience in internal medicine. She obtained her medical degree from Harvard Medical School, where she graduated with honors, showcasing her dedication to academic excellence.
        </p>
        <p className="about-sub-heading my-2">
         Dr. Sanchez completed her residency training at Massachusetts General Hospital, one of the nation's top-ranked hospitals, where she honed her clinical expertise and developed a deep understanding of complex medical conditions.
        </p>
        <p className="about-sub-heading my-2">
         Known for her warm bedside manner and empathetic approach, Dr. Sanchez takes the time to listen to her patients' concerns and collaborates with them to develop personalized treatment plans. She believes in the importance of holistic care, addressing not only the physical aspects of illness but also the emotional and psychological well-being of her patients.
        </p>
        <p className="about-sub-heading my-2">
         In her spare time, Dr. Sanchez enjoys hiking in the great outdoors and spending quality time with her family. She brings a genuine passion for healing and a deep sense of compassion to her practice, earning the trust and admiration of her patients and colleagues alike.
        </p>
       </div>
      </div>
      <div className="col-12 col-md-6">
       <img src="/images/about/profile-1.jpg" alt="" className="img-fluid about-img" />
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default About