import React from 'react'
import display from '../images/display.jpg';


export default function home() {
  return (
    <>
    <div id='home-elements'>
        <div id='display-pictures'>
          <img src={display} alt='Display Pictures'></img>
        </div>
        <div id='description'>
        <h1>WE MAKE YOUR MOMENTS LAST FOREVER</h1>
        <h4>VISUAL VISION CREATION is a team of highly experienced and professional photographers and cinematographers. We specialize in photography and cinematography. With an experience of covering more than 100 weddings, tv shows, youtube shows, music videos, documentaries, short movies, we make sure that your memories are something that you will always cherish.</h4>
        </div>
        <div id='featured-photos'>
          <h1>FEATURED PHOTOS </h1>
          <div id='picture-card'>
          <img src={display} alt='featured'></img>
          <img src={display} alt='featured'></img>
          <img src={display} alt='featured'></img>
          </div>
        </div>
        <div id='featured-videos'>
          <h1>FEATURED VIDEOS </h1>
          <div id='video-card'>
          <img src={display} alt='video-featured'></img>
          <img src={display} alt='video-featured'></img>
          <img src={display} alt='video-featured'></img>
          </div>
        </div>
        <div id='testimonials'>
          <h1>TESTIMONIALS</h1>
          <p>OUR HAPPY CUSTOMERS SAYING</p>
          <div id='testimonial-picture'>
            <img src={display} alt='testimonialdp'></img>
          </div>
          <p id='message'>"MESSAGE:  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh leo, laoreet sit amet eleifend ac, fringilla non massa. Nulla feugiat ligula nec ex vestibulum, vitae suscipit nunc ullamcorper. Phasellus bibendum vulputate neque lobortis bibendum. Cras ac eros ornare, dictum nisl mollis, convallis quam. Maecenas a tellus quis arcu sodales pharetra ut sit amet ante."</p>
        </div>
    </div>
    </>
  )
}
