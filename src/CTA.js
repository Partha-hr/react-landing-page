import React from 'react';

const CTASection = () => (
  <section className="cta-section bg-light  text-center py-5">
    <div className="container">
      <h2 className="mb-3 fs-1 fw-bold">Start your free trial</h2>
      <p className="mb-4">Join over 4,000+ startups already growing with Untitled.</p>
      <button className="btnlearn btn btn-primary btn-lg mx-2 text-dark fw-semibold " style={{border:'1px solid #D0D5DD',
      padding:' 12px 20px 12px 20px',width: 'Hug (128px)px',height: 'Hug (48px)px',background:'white'}}>Learn More</button>
      <button className="btn btn-primary btn-lg mx-2"  style={{
      padding:' 12px 20px 12px 20px',width: 'Hug (128px)px',height: 'Hug (48px)px',background:'#6941C6'}}>Get Started</button>
    </div>
  </section>
);

export default CTASection;
