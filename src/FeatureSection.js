
import React from "react";


const FeaturesSection = () => {
    const features = [
        {
          icon: <img src="message-chat-circle.png" alt="Connect with customers" className="mb-3" style={{ width: '24px', height: '24px' }} />,
          title: 'Share team inboxes',
          description:
            'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
            button: <i className=" fw-bold "  style={{fontStyle:'normal',color: '#6941C6'}}>
            Learn more <i class="fa fa-arrow-right"></i></i>
          
        },
        {
          icon: <img src="zap.png" alt="Connect with customers" className="mb-3" style={{ width: '24px', height: '24px' }} />,
          title: 'Deliver instant answers',
          description:
            'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
            button: <i className=" fw-bold "  style={{fontStyle:'normal',color: '#6941C6'}}>
            Learn more <i class="fa fa-arrow-right"></i></i>
          
        },
        {
          icon: <img src="chart-breakout-square.png" alt="Connect with customers" className="mb-3" style={{ width: '24px', height: '24px' }} />,
          title: 'Manage your team with reports',
          description:
            "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
            button: <i className=" fw-bold "  style={{fontStyle:'normal',color: '#6941C6'}}>
            Learn more <i class="fa fa-arrow-right"></i></i>
        }
    ];
  return (
    <div>
    <section className="features-section py-5 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
        <span className="badge-inner me-2 px-2 py-1 rounded-pill" style={{
        backgroundColor: '#f4f3ff',
        color: '#7c55f7',
        border: '2px solid #e2dffe',
        fontSize: '12px',
        fontWeight: '500'
      }}>
         Features
      </span>
          <h2 className="mt-4 fw-bold">Cutting-edge features for advanced analytics</h2>
          <p className="text-muted">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="container position-relative ">
      <div className="row justify-content-center">
        {/* Desktop Image */}
        <div className="col-10 position-relative text-center" >
          <img
            src="desktop mockup.png"
            alt="Desktop View"
            className="img-fluid w-75"
            style={{border:'#101828 solid 4px', borderRadius:'10px', boxShadow:'0 5px 3px rgba(0, 0, 0, 0.3)'}}
          />

          {/* Mobile Image */}
          {/* <div class="iphone-mockup position-absolute img-fluid "> */}
        {/* <div class="notch"></div> */}
        {/* <div class="screen d-flex justify-content-center align-items-center"> */}
            {/* <p class="text-muted"></p> */}
                <img
                className="position-absolute
                 overlap-image img-fluid"
            src="iPhone 12 Pro mockup.png"
            alt="Mobile View"
            
          /> 
        </div>
    </div>
         
        </div>
          
       
      </div>
     
    </section>
    <div className="container py-5 ">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {features.map((feature, index) => (
          <div key={index} className="col">
            <div className="card h-100 text-center border-0 g-5">
              <div className="card-body">
                {feature.icon}
                <h5 className="card-title">{feature.title}</h5>
                <p className="card-text">{feature.description}</p>
                {feature.button}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default FeaturesSection;
