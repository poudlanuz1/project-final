import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

export default function customevent() {
  return (
    <div id='event-custom-form'>
      <div id='form-event'>
        <form>
          <ul>
            <li>
            <h1>CUSTOMIZE YOUR EVENTS WITH US</h1>
            </li>
            <li>
            <label htmlFor="event">Event Name:</label>
            <select name='event' id='event'>
              <option value='PreWedding'>Pre-Wedding</option>
              <option value='PostWedding'>Post-Wedding</option>
              <option value='Bratabanda'>Bratabanda</option>
              <option value='Photoshoot' >Photoshoot</option>
              <option value='ProductShoot'>Product Photoshoot</option>
            </select>
            </li>
            <li>
            <label htmlFor="numofphoto">Number of Photos:</label>
                <input type="number" name="numofphoto" min='6' max='500' required /> 
            </li>
            <li>
            <label htmlFor="location">Location:</label>
            <input type="radio" name="location"  checked/> Indoor
                <input type="radio" name="location"  /> Outdoor
            </li>
            <li>
            <label htmlFor="time">Timeline:</label>
            <input type="radio" name="timeline"  /> Half Day
                <input type="radio" name="timeline"  checked/> Full Day
            </li>
            <li>
            <label htmlFor="service">Service:</label>
            <input type="radio" name="service"  checked/> Photography
                <input type="radio" name="service"  /> Videography
                <input type="radio" name="service"  /> Both
            </li>
            <li>
            <label htmlFor="additionalmessage">Additional Message (optional):</label>
                <textarea id="additionalmessage" name="message" rows="3" placeholder='Write a message'></textarea>
            </li>
            <li>
            <button type='submit'>SEND<FaArrowRight></FaArrowRight></button>
            </li>
          </ul>
        </form>
      </div>

    </div>
  )
}
