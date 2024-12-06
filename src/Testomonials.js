import React from 'react';

const Testimonials = () => (
  <section className='bg-light py-5'>
    <div className="container" >
      <div className="text-center">
        {/* Logo */}
        <img
          src="Fictional company logo.png"
          alt="Sisyphus Logo"
          className="mb-3"
          style={{ maxWidth: "150px", height: "auto" }} 
        />
{/* style={{backgroundColor: 'rgb(234, 234, 234)' */}
        {/* Testimonial text */}
        <p className=" lh-lg mt-4 px-3 fs-2" >
          <strong>
            We’ve been using Untitled to kick start every new project and can’t
            imagine working without it.
          </strong>
        </p>

        {/* User information */}
        <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
          {/* User Image */}
          <img
            src="Avatar.png"
            alt="Candice Wu"
            className="rounded-circle mb-3 mb-md-0 me-md-3"
            style={{ width: "50px", height: "50px" }}
          />
          {/* User Info */}
          <div className="text-center text-md-start">
            <p className="mb-0 fw-bold text-center">Candice Wu</p>
            <small className="text-muted">Product Manager, Sisyphus</small>
          </div>
        </div>
      </div>
    </div>
    </section>

);

export default Testimonials;
