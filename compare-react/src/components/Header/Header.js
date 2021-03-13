/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

//State full component class etc
function Header() {
    return(
        <div class="nav has-shadow">
        <div class="container">
          <div class="nav-left">
            
            <a class="nav-item">Cultivating Antifragility</a>          
          </div>  
  
          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
  
          <div class="nav-right nav-menu">
            <Link to='/' className="nav-item r-item">Home</Link>
            <Link to='/faq' className="nav-item r-item">Blog</Link>
            <Link to='/faq' className="nav-item r-item">Video</Link>
            <Link to='/faq' className="nav-item r-item">About</Link>
            <Link to='/faq' className="nav-item r-item">FAQ</Link>

            <div class="nav-item">
              <p class="control">
                <a class="button is-primary is-outlined">
                  <span class="icon">
                    <i class="fa fa-envelope"></i>
                  </span>
                  <span>Contact Me</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Header;

  
