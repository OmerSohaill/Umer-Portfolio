import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './nav.css';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <header>
           <nav class="navbar bg-body-tertiary fixed-top " >
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <div className='nav-flexs'>
        <div className='name-round'></div>
        <h1 className='nav-omer'>MIAN OMER</h1>
        <div className="nav-web">
        <p className='nav-omer'>Web Dev</p>

        </div>
      

      </div>
      
      </a> 
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">WELCOME</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <Link to="/home" class="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/projects" class="nav-link" href="#">Projects</Link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More
            </a>
            <ul class="dropdown-menu">
              <li><Link to="/resume" class="dropdown-item" href="#">Resume</Link></li>
              <li><a class="dropdown-item" href="#">Login</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><Link to="/contact" class="dropdown-item" href="#">Contact Me</Link></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
</header>
        </>
    );
}

export default Nav;