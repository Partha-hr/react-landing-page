import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaPlus, FaMinus } from 'react-icons/fa';


const FAQ = ({ question, answer, id }) => {
    const faqs = [
        {
          question: 'Is there a free trial available?',
          answer:
            'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
          id: 1,
        },
        { question: 'Can I change my pYeslan later?',
           answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
            id: 2 },
        { question: 'What is your cancellation policy?',
           answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.', id: 3 },
        { question: 'Can other info be added to an invoice?', 
          answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.', id: 4 },
        { question: 'How does billing work?', 
          answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.', id: 5 },
        { question: 'How do I change my account email?', 
          answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.', id: 6 },
      ];

      const [collapsedStates, setCollapsedStates] = useState(
        faqs.reduce((acc, faq) => ({ ...acc, [faq.id]: true }), {})
      );
    
      const toggleCollapse = (id) => {
        setCollapsedStates((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
      };
 
  
  return (
    <div className="container my-5">
      {/* FAQ Section */}
      <div className="text-center mb-5">
        <h2>Frequently asked questions</h2>
        <p>Everything you need to know about the product and billing.</p>
      </div>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq) => (
  <div className="accordion-item" key={faq.id}>
  <h2 className="accordion-header" id={`heading-${faq.id}`}>
    <button
      className="accordion-button collapsed d-flex justify-content-between align-items-center"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={`#collapse-${faq.id}`}
      aria-expanded={!collapsedStates[faq.id]}
      aria-controls={`collapse-${faq.id}`}
      onClick={() => toggleCollapse(faq.id)}
    >
      {faq.question}
      <span className="ms-2">
        {collapsedStates[faq.id] ? '' : ''}
      </span>
    </button>
  </h2>
  <div
    id={`collapse-${faq.id}`}
    className={`accordion-collapse collapse ${!collapsedStates[faq.id] ? 'show' : ''}`}
    aria-labelledby={`heading-${faq.id}`}
    data-bs-parent="#faqAccordion"
  >
    <div className="accordion-body">{faq.answer}</div>
  </div>
</div>
  
))}       
      </div>

      {/* Still Have Questions Section */}
      <div className="text-center mt-1 pt-5  border-top bg-light">
        <div className="mb-3 position-relative">
          <img
            src="Avatar1.png"
            alt="User 1"
            className="position-relative rounded-circle me-2 user-image"
          />
          <img
            src="Avatar.png"
            alt="User 2"
            className="position-absolute rounded-circle me-2 user-image1"
          />
          <img
            src="Avatar2.png"
            alt="User 3"
            className="position-relative rounded-circle me-2 user-image"
          />
        </div>
        <h5>Still have questions?</h5>
        <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        <button className=" btn btn-primary   " style={{ background: '#6941C6', border:'none', marginBottom:'30px'}}>Get in touch</button>
      
      </div>
    </div>
  );

};
export default FAQ;














// return (
//     <div className="accordion-item">
//       <h2 className="accordion-header" id={`heading-${id}`}>
//         <button
//           className="accordion-button collapsed"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target={`#collapse-${id}`}
//           aria-expanded="false"
//           aria-controls={`collapse-${id}`}
//         >
//           {question}
//         </button>
//       </h2>
//       <div
//         id={`collapse-${id}`}
//         className="accordion-collapse collapse"
//         aria-labelledby={`heading-${id}`}
//         data-bs-parent="#faqAccordion"
//       >
//         <div className="accordion-body">{answer}</div>
//       </div>
//     </div>
//   );
// };
