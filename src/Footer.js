import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  const footerData = [
    {
      title: 'Product',
      links: [
        { name: 'Overview' },
        { name: 'Features' },
        { name: 'Solutions', badge: 'New' },
        { name: 'Tutorials' },
        { name: 'Pricing' },
        { name: 'Releases' },
      ],    },
    {
      title: 'Company',
      links: [
        { name: 'About us' },
        { name: 'Careers' },
        { name: 'Press' },
        { name: 'News' },
        { name: 'Media kit' },
        { name: 'Contact' },
      ],    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog' },
        { name: 'Newsletter' },
        { name: 'Events' },
        { name: 'Help centre' },
        { name: 'Tutorials' },
        { name: 'Support' },
      ],    },
    {
      title: 'Use cases',
      links: [
        { name: 'Startups' },
        { name: 'Enterprise' },
        { name: 'Government' },
        { name: 'SaaS centre' },
        { name: 'Marketplaces' },
        { name: 'Ecommerce' },
      ],    },
    {
      title: 'Social',
      links: [
        { name: 'Twitter' },
        { name: 'LinkedIn' },
        { name: 'Facebook' },
        { name: 'GitHub' },
        { name: 'AngelList' },
        { name: 'Dribbble' },
      ],    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms' },
        { name: 'Privacy' },
        { name: 'Cookies' },
        { name: 'Licenses' },
        { name: 'Settings' },
        { name: 'Contact' },
      ],    },
  ];

  return (
    <footer className="mt-0 bg-white pt-4">
      <div className="container">
        <div className="row">
          {footerData.map((section, index) => (
            <div className="col-md-2 mb-3" key={index}>
              <p className='fw-semibold' style={{fontSize:'14px', color:'#667089'}}>{section.title}</p>
              <ul className="list-unstyled">
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-1">
                   <a href="#links" className="text-decoration-none  text-muted">
                     <h6> {link.name }
                      {link.badge && (
                        <span className="badge-inner me-2 px-1 g-3 py-0 rounded-pill" style={{
                            backgroundColor: ' #ECFDF3',
                            color: '#067647',
                            border: '1px solid #ABEFC6',
                            fontSize: '12px',
                            fontWeight: '500', mixBlendMode:'multiply'
                          }}> {link.badge}</span>
                      )}</h6>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-between align-items-center pt-3 mt-3 border-top">
          <div className="d-flex align-items-center">
            <img src="Logomark.png" alt="Logo" className="me-2" style={{ width: '30px' }} />
            <span>Untitled UI</span>
          </div>
          <p className="mb-0">© 2077 Untitled UI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

