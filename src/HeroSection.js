import React from 'react';

const HeroSection = () => (
  <section className="hero bg-light text-center py-5">
    <div className="container">
      <h1 className="display-4">Beautiful analytics to grow smarter</h1>
      <p className="lead mt-3">
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
      </p>
      <div className="mt-4">
        <button className="btn btn-primary btn-lg mx-2">Demo</button>
        <button className="btn btn-outline-secondary btn-lg mx-2">Sign Up</button>
      </div>
      <img
        src=""
        alt="Desktop Screenshot"
        className="img-fluid mt-5"
        // Ensure image is responsive
      />
    </div>
  </section>
);

export default HeroSection;
