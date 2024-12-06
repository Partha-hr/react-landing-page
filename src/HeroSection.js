import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


const HeroSection = () => (
  <section className="hero bg-light text-center py-5">
    <div className="container">
    <div className="badge d-inline-flex align-items-center p-1 rounded-pill text-wrap " style={{
      backgroundColor: '#f4f3ff',
      border: '1px solid #e2dffe',
      fontSize: '14px',
      color: '#7c55f7',
      fontWeight: '500'
    }}>
      <span className="badge-inner me-2 px-2 py-1 rounded-pill" style={{
        backgroundColor: 'white',
        color: '#7c55f7',
        border: '2px solid #e2dffe',
        fontSize: '12px',
        fontWeight: '500'
      }}>
        New feature
      </span>
      <a href="#dashboard" className="text-decoration-none" style={{
        color: '#7c55f7',
        fontSize: '14px',
        fontWeight: '500'
      }}>
        Check out the team dashboard <i class="fa fa-arrow-right"></i>
      </a>
    </div>
      <h1 className="display-4 xl" >Beautiful analytics to grow smarter</h1>
      <p className=" lead mt-3 text-centre mx-auto w-50">
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="mt-4">
        <button className="btn btn-outline-secondary btn-lg mx-2 fw-semibold " ><i className='bi bi-play-circle'></i> Demo</button>
        <button className="btn btn-primary btn-lg mx-2 " style={{backgroundColor:"#7c55f7"}}>Sign Up</button>
      </div>
      <img id='hero'
        src="Screen mockup (REPLACE FILL).png"
        alt="Desktop Screenshot"
        className="img-fluid mt-5"
        
      />
    </div>
  </section>
);

export default HeroSection;
