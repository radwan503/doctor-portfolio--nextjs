"use client";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show button after scrolling down 200px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setShowTopBtn(true);
      else setShowTopBtn(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="footer py-4 gray-bg position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 text-center text-md-left mb-3 mb-md-0">
              <div className="copyright">
                © {new Date().getFullYear()} All Rights Reserved by{" "}
                <span className="text-primary font-weight-bold">Dr. Emily</span>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 text-center text-md-right">
              <ul className="list-inline footer-socials mb-0">
                <li className="list-inline-item mx-2">
                  <a href="#">
                    <i className="icofont icofont-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="#">
                    <i className="icofont icofont-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="#">
                    <i className="icofont icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        {showTopBtn && (
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to Top">
            <i className="icofont icofont-simple-up"></i>
          </button>
        )}

        <style jsx>{`
          .footer {
            background: #f8f9fa;
            border-top: 1px solid #e5e5e5;
          }



          .back-to-top {
            position: fixed;
            right: 25px;
            bottom: 25px;
            background: #007bff;
            color: #fff;
            border: none;
            border-radius: 50%;
            width: 45px;
            height: 45px;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .back-to-top:hover {
            background: #0056b3;
            transform: translateY(-4px);
          }

          @media (max-width: 768px) {
            .footer {
              text-align: center;
            }
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;
