import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const BlogSection = () => {
  const blogs = [
    {
      title: 'UX review presentations',
      category: <h6 style={{color:'#6941C6'}}>Design</h6>,
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      author: 'Olivia Rhye',
      date: '20 Jan 2024',
      image: 'Image1.png',
      u_image:  <img
      src="Avatar.png"
      alt=""
      className="rounded-circle me-2 user-image"
    />
    },
    {
      title: 'Migrating to Linear 101',
      category:<h6 style={{color:'#6941C6'}}>Product</h6>,
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
      author: 'Phoenix Baker',
      date: '19 Jan 2024',
      image: 'Image2.png',
      u_image:  <img
      src="Avatar4.png"
      alt=""
      className="rounded-circle me-2 user-image"
    />
    },
    {
      title: 'Building your API stack',
      category: <h6 style={{color:'#6941C6'}}>Software Engineer</h6>,
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      author: 'Lana Steiner',
      date: '18 Jan 2024',
      image: 'Image3.png',
      u_image:  <img
      src="Avatar5.png"
      alt=""
      className="rounded-circle me-2 user-image"
    />
    },
  ];

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h6 style={{color:'#6941C6'}}>Our blog</h6>
          <h2>Lastest blog posts</h2>
          <p>Tools and strategies modern teams need to help their companies grow.</p>
        </div>
        <button className="btn btn-primary" style={{background:'#6941C6', border:'none'}}>View all posts</button>
      </div>
      <div className="row">
        {blogs.map((blog, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 border-0 rounded-0 ">
              <img
                src={blog.image}
                className="card-img-top"
                alt={blog.title}
              />
              <div className="card-body" style={{border:'none'}}>
                <p className="text-primary mb-1">{blog.category}</p>
                <h5 className="card-title">{blog.title}<span className='bi bi-arrow-up-right ' style={{marginLeft:'75px'}}></span></h5>
                <p className="card-text">{blog.description}</p>
                <div className="d-flex align-items-center mt-3">
                 {blog.u_image}
                  <div>
                    <p className="mb-0">{blog.author}</p>
                    <small>{blog.date}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;


