import React from 'react'

const HeroBanner = () => {
  return (
    <>
      <section className="banner" id='heroBanner'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xl-7">
              <div className="block">
                <div className="divider mb-3"></div>
                <span className="text-uppercase text-sm letter-spacing ">Professional Care For Your Health</span>
                <h1 className="mb-3 mt-3">Good Health Moves
                  Us Forward</h1>

                <p className="mb-4 pr-5">Humanity stands as a cornerstone of professionalism for any doctor. Here at our clinic, we prioritize your holistic well-being, nurturing both your mental and physical health with meticulous care.</p>
                <div className="btn-container ">
                  <a href="appoinment.html" target="_blank" className="btn btn-main-2 btn-icon btn-round-full">Make appoinment
                    <i className="icofont icofont-simple-right ml-2  "></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroBanner
