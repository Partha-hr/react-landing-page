import React from 'react';

const SocialProof = () => (
  <section className="social-proof bg-white py-5">
    <div className="container text-center ">
      <p className="lead mb-4">Join 4,000+ companies already growing with Untitled</p>
      <div className=" row justify-content-center "> 
        {/* left column */}
        <div className="  col-12 col-md-6 col-xl-2 mb-2 ">
          <img src="boltshift.png" alt="Boltshift" className="img-fluid" />
        </div>
        <div className=" col-12 col-md-6 col-xl-2 mb-2 ">
          <img src="lightbox.png" alt="Lightbox" className="img-fluid" />
        </div>
        <div className=" col-12 col-md-6 col-xl-2 mb-2 ">
          <img src="featherdev.png" alt="FeatherDev" className="img-fluid" />
        </div>
        
       
        <div className=" col-12 col-md-6 col-xl-2 mb-2 ">
          <img src="Spherule.png" alt="Sphere" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 col-xl-2 mb-2 ">
          <img src="globalbank.png" alt="GlobalBank" className="img-fluid" />
        </div>
        <div className=" col-12 col-md-6 col-xl-2 mb-2 ">
          <img src="nietzche.png" alt="Nietzsche" className="img-fluid" />
        </div>
        
      </div>
    </div>
  </section>
);

export default SocialProof;
