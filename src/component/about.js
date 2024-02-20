import React from 'react'
import sijandp from '../images/sijan.jpeg';
import roshandp from '../images/roshan.jpg';
import anujdp from '../images/anuj.jpg';
import aaryandp from '../images/aaryan.jpg';
import bibekdp from '../images/bibek.jpeg';
export default function about() {
  return (
    <div id='about-us'>
        <div id='vvc'>
          <p>
       <h2> Welcome to Visual Vision Creation – Where Vision Meets Reality!</h2>
Established in December 2023, Visual Vision Creation is a cutting-edge photography and videography studio dedicated to transforming ordinary moments into extraordinary memories. At the heart of our creative endeavor is a passion for storytelling through the lens, capturing the essence of every fleeting moment and preserving it for a lifetime.
          </p>
<p>
  <h2>

Our Vision:
  </h2>
At Visual Vision Creation, we believe that every moment is a unique chapter in the grand story of life. Our vision is to be the architects of visual narratives, crafting timeless images and films that resonate with authenticity, emotion, and artistic flair.

</p>
<p>
  <h2>

A Creative Journey:
  </h2>
Our journey begins with a commitment to creativity and innovation. Armed with state-of-the-art equipment and an exceptionally talented team of photographers and videographers, we embark on a mission to explore the artistry within each frame. Whether it's a wedding, a corporate event, a family gathering, or a commercial project, we approach every assignment with an unwavering dedication to excellence.

</p>
<p>
<h2>
Meet Our Team:

</h2>

</p>
</div>
<div id='meet-our-team'>
  <div id='sijan'>
    <img src={sijandp} alt='dp-sijan'></img>
    <h3>Sijan Raut</h3>
    <h4>CEO</h4>
  </div>
  <div id='roshan'>
  <img src={roshandp} alt='dp-roshan'></img>
    <h3>Roshan Gyawali</h3>
    <h4>COO</h4>
  </div>
  <div id='anuj'>
  <img src={anujdp} alt='dp-anuj'></img>
    <h3>Anuj Poudel</h3>
    <h4>Executive Manager</h4>
  </div>
  <div id='bibek'>
  <img src={bibekdp} alt='dp-bibek'></img>
    <h3>Bibek Sigdel</h3>
    <h4>Sound Manager</h4>
  </div>
  <div id='aaryan'>
  <img src={aaryandp} alt='dp-aaryan'></img>
    <h3>Aaryan Baral</h3>
    <h4>Technical Head</h4>
  </div>
</div>
</div>
  )
}
