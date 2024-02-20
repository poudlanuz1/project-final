import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapPin } from 'react-icons/fa';
import baseApi from './utils/baseApi';
import { toast } from 'react-toastify';

export default function Contact() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    console.log(contactInfo);
  }, [contactInfo]);

  const submitContactForm = async (e) => {
    e.preventDefault();
    if (contactInfo.email === "" || contactInfo.name === "" || contactInfo.message === "") {
      return;
    }

    try {
      const res = await baseApi.post('/contact', {
        email: contactInfo.email,
        name: contactInfo.name,
        description: contactInfo.message,
      });

      console.log(res);

      if (res.status === 200) {
        toast.success("Contact submitted successfully");
        setContactInfo((prev) => ({
          ...prev,
          name: "",
          email: "",
          message: "",
        }));
        return;
      } else {
        toast.error("Error while submitting");
        return;
      }
    } catch (err) {
      toast.error("Error while submitting");
      return;
    }
  }

  const handleOnChange = (e) => {
    setContactInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <div id='contact-page'>
      <h1>SEND US A MESSAGE:</h1>
  <div id='contact'>
    
    <div id='location'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4602246529544!2d85.37662817557998!3d27.67216722704209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b000a87c03f%3A0xc84e2ca40c83e5dc!2sVisual%20Vision%20Creation!5e0!3m2!1sen!2snp!4v1705378956506!5m2!1sen!2snp" 
      style={{width:"250px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div id='company-details'>
      <h3>
      <ul>
        <li>
        <FaMapPin/>      Chardobato -3, Madhyapur Thimi
        </li>
        <li>
          <FaEnvelope/>      visualvisioncreation9@gmail.com
        </li>
        <li>
          <FaPhone/>    +977-9860389022
        </li>
      </ul>
      </h3>
      </div>
    </div>
    <div className="contact-form">
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required onChange={handleOnChange} value={contactInfo.name} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required onChange={handleOnChange} value={contactInfo.email}/>

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required onChange={handleOnChange} value={contactInfo.message} />

        <button type="submit" onClick={submitContactForm}>Submit</button>
      </form>
    </div>
  </div>
  </div>
  );
}