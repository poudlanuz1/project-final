import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function CustomEvent() {

  const [location, setLocation] = useState(0);
  const [timeline, setTimeline] = useState(0);
  const [service, setService] = useState(0);
  const [total, setTotal] = useState(0);

  const errorCustom = ()=> {
      toast.warning("Payment Portal Integrating Soon !!!")
  }
  const preventDefault = (e)=>{
    e.preventDefault();
}

  // Function to update total whenever any state changes
  useEffect(() => {
      setTotal(location + timeline + service );
  }, [location, timeline, service]);

  return (
    <div id='event-custom-form'>
      <div id='form-event'>
        <form onSubmit={preventDefault}>
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
                <input type="number" name="numofphoto" min='6' max='300' required /> 
            </li>
            <li>
            <label htmlFor="location">Location:</label>
            <input type="radio" name="location"  onChange={() => setLocation(5000)}/> Indoor
                <input type="radio" name="location" onChange={() => setLocation(10000)} /> Outdoor
            </li>
            <li>
            <label htmlFor="time">Timeline:</label>
            <input type="radio" name="timeline" onChange={() => setTimeline(5000)} /> Half Day
                <input type="radio" name="timeline" onChange={() => setTimeline(10000)} /> Full Day
            </li>
            <li>
            <label htmlFor="service">Service:</label>
            <input type="radio" name="service" onChange={() => setService(5000)} /> Photography
                <input type="radio" name="service" onChange={() => setService(10000)} /> Videography
                <input type="radio" name="service" onChange={() => setService(13000)} /> Both
            </li>
            <li>
            <label htmlFor="additionalmessage">Note: Cannot be refunded if booked.</label>
            </li>
            <li>
                <h2>RS.{total}</h2>
            </li>
            <li>
                <button type='submit' onClick={errorCustom}>BUY PACKAGE</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
}
