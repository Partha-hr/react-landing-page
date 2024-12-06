import React from "react";


const Feature = ()=> {
    const features = [
        {
          icon: <img src="message-chat-circle.png" alt="Connect with customers" className="mb-3" style={{ width: '24px', height: '24px' }} />,
          title: 'Share team inboxes',
          description:
            'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
        },
        {
          icon: <img src="zap.png" alt="Connect with customers" className="mb-3" style={{ width: '24px', height: '24px' }} />,
          title: 'Deliver instant answers',
          description:
            'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
        },
        {
          icon: <img src="chart-breakout-square.png" alt="Connect with customers" className="mb-3" style={{ width: '24px', height: '24px' }} />,
          title: 'Manage your team with reports',
          description:
            "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
        },
        {
          icon: <img src="message-smile-circle.png" alt="Connect with customers" className="mb-3" style={{ width: '24px', height: '24px' }} />,
          title: 'Connect with customers',
          description:
            'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
        },
        {
          icon: <img src="command.png" alt="Connect with customers" className="mb-3" style={{ width: '24px', height: '24px' }} />,
          title: 'Connect the tools you already use',
          description:
            'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
        },
        {
          icon: <img src="message-heart-circle.png" alt="Connect with customers" className="mb-3" style={{ width: '24px', height: '24px' }} />,
          title: 'Our people make the difference',
          description:
            "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
        },
      ];
    
    return(
        <div>

        <div className="container text-center  g-5 " style={{gap:'20px'}}>
            <div className="text-center " style={{width:' Fill (768px)px',
height:'Hug (80px)px', 
gap: '12px',
}}>
            <p className="feature fw-semibold">Features</p>
            <h1><b>Analytics it's feels like from the future</b></h1>
            <p className="para w-75 text-center mt-3 mx-auto">Powerful, self-serve product and growth analytics that help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            </div>
        </div>
         
        <div className="container py-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {features.map((feature, index) => (
          <div key={index} className="col">
            <div className="card h-100 text-center border-0">
              <div className="card-body">
                {feature.icon}
                <h5 className="card-title">{feature.title}</h5>
                <p className="card-text">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>

);

};




export default Feature;