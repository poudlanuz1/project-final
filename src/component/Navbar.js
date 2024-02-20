import React from 'react'
import logo from '../images/logo-final.png';
import {Link} from "react-router-dom";
import { FaImage } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
export default function Navbar() {
  return (
    <div id='nav'>
      <div id='navbar-top'>
        <img src={logo} alt='Logo' id='logo'></img>
        <div id='navbar-writings'>
        <p id='vvc'>
          VISUAL VISION CREATION
        </p>
        <p id='tagline'> 
          WHERE VISION MEETS REALITY
        </p>
        </div>
      </div>
      <div id='routes'>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <div class='dropdown'>
              <button class='dropbtn'>Gallery</button>
              <div class='dropdown-content'>
                <Link to="/gallery">
                <FaImage />Photos
                </Link>
                <Link to="/gallery/videos">
                <FaVideo/>Videos
                </Link>
              </div>
              </div>
            </li>
            <li>
              <Link to="/packages">Packages</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        </div>
    </div>
  )
}