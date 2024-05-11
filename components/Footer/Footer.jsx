import React from 'react'

const Footer = () => {
 return (
  <>

   <footer className="footer py-3 gray-bg">
    <div className="container">
     <div className="">
      <div className="row align-items-center ">
       <div className="col-lg-6">
        <div className="copyright">
         &copy; Copyright Reserved by <span>Dr.Emily</span>
        </div>
       </div>
       <div className="col-lg-6">
        <div className="widget float-right mb-5 mb-lg-0">
         <ul className="list-inline footer-socials mt-4">
          <li className="list-inline-item"><a href="#"><i className="icofont icofont-facebook"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="icofont icofont-twitter"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="icofont icofont-linkedin"></i></a></li>
         </ul>
        </div>
       </div>
      </div>

      <div className="row">
       <div className="col-lg-4">
        <a className="backtop" href="#top">
         <i className="icofont icofont-long-arrow-up"></i>
        </a>
       </div>
      </div>
     </div>
    </div>
   </footer>
  </>
 )
}

export default Footer
