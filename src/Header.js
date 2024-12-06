import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => (
  <header className="navbar navbar-expand-lg navbar-light bg-light py-3 border-bottom">
  <div className="container">
    {/* Logo and Brand */}
    <a className="navbar-brand d-flex align-items-center" href="#Untitle">
      <img
        src="Logomark.png" 
        alt="Untitled UI"
        style={{ width: "30px", marginRight: "10px" }}
      />
      Untitled UI
    </a>

  
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
     <span className="navbar-toggler-icon"></span>
    </button>

    {/* Navigation Links */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#products"
            aria-expanded="false"
          >
            Products <span className='dropdown-icon'><i class="fa fa-angle-down"></i></span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link "
            href="#resources"
            aria-expanded="false"
          >
            Resources <span className='dropdown-icon'><i class="fa fa-angle-down"></i></span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#pricing">
            Pricing
          </a>
        </li>
      </ul>

      {/* Profile Icon */}
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#profile">
            <img
              src="Avatar.png" 
              alt="Profile"
              className="rounded-circle"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</header>


);

export default Header;
