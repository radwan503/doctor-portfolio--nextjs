import React from 'react'

const About = () => {
 return (
  <>
   <section class="section about" id='about'>
    <div class="container position-relative">
     <div class="row">
      <div class="col-12 col-md-8 col-lg-6">
       <div class="d-flex flex-column justify-content-center h-100">
        <h2 class="about-heading">About Dr. Emily</h2>
        <p class="about-sub-heading my-2">
         Dr. Emily Sanchez is a highly skilled and compassionate physician with over 15 years of experience in internal medicine. She obtained her medical degree from Harvard Medical School, where she graduated with honors, showcasing her dedication to academic excellence.
        </p>
        <p class="about-sub-heading my-2">
         Dr. Sanchez completed her residency training at Massachusetts General Hospital, one of the nation's top-ranked hospitals, where she honed her clinical expertise and developed a deep understanding of complex medical conditions.
        </p>
        <p class="about-sub-heading my-2">
         Known for her warm bedside manner and empathetic approach, Dr. Sanchez takes the time to listen to her patients' concerns and collaborates with them to develop personalized treatment plans. She believes in the importance of holistic care, addressing not only the physical aspects of illness but also the emotional and psychological well-being of her patients.
        </p>
        <p class="about-sub-heading my-2">
         In her spare time, Dr. Sanchez enjoys hiking in the great outdoors and spending quality time with her family. She brings a genuine passion for healing and a deep sense of compassion to her practice, earning the trust and admiration of her patients and colleagues alike.
        </p>
       </div>
      </div>
      <div class="col-12 col-md-6">
       <img src="/images/about/profile-1.jpg" alt="" class="img-fluid about-img" />
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default About