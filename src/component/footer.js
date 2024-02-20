import React from 'react'
import { FaTiktok } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import {Link} from "react-router-dom";
export default function footer() {
  return (

    <div id='footer-contents'>
        <div id='about-us-footer'>
        <h1>ABOUT US</h1>
        <p>Visual Vision Creation is a photography & videography studio that is founded by professional cinematographers & photographers.</p>
        </div>
        <div id='gallery-footer'>
          <h1>GALLERY</h1>
          <p>
          <ul>
            <li>
              <Link to="/gallery/photos">Photos</Link>
            </li>

            <li>
              <Link to="/gallery/videos">Videos</Link>
            </li>
            </ul>
          </p>

        </div>
        <div id='get-connected-with-us-footer'>
        <h1>GET CONNECTED WITH US</h1>
        <p>
            <a href='https://www.facebook.com/visualvision.np' target='_blank'> <FaFacebook/></a>
            <a href='https://www.youtube.com/channel/UCtjMmoM7eFx6arEn7fk8STA' target='_blank'><FaYoutube/></a>
            <a href='https://www.instagram.com/visualvision.np/' target='_blank'><FaInstagram/></a>
            <a href='https://www.tiktok.com' target='_blank'><FaTiktok/></a>
        </p>
        </div>
    </div>
  )
}
