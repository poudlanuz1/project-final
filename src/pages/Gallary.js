import React from 'react'
import { Link } from 'react-router-dom'

export default function Gallary() {
  return (
    <div id="gallary">
        <div className="title">Gallery</div>
    <div id='all-category'>
      <div className="category">
        <Link to="/gallery/photos/bride">
        <div className="img">
            <img src="https://w0.peakpx.com/wallpaper/777/999/HD-wallpaper-pretty-woman-jewellery-model-bridal-indian.jpg" alt="" />
        </div>
        
        </Link>
        <div className="category-title">
            <p>Bride</p>
        </div>
      </div>
      <div className="category">
        <Link to="/gallery/photos/groom">
        <div className="img">
            <img src="https://wallpapercave.com/wp/wp8796275.jpg" alt="" />
        </div>
        </Link>
        <div className="category-title">
            <p>Groom</p>
        </div>
      </div>
      <div className="category">
        <Link to="/gallery/photos/potrait">
        <div className="img">
            <img src="https://c4.wallpaperflare.com/wallpaper/815/805/71/5c1caa81790d8-wallpaper-preview.jpg" alt="" />
        </div>
        </Link>
        <div className="category-title">
            <p>Portrait</p>
        </div>
      </div>
      <div className="category">
        <Link to="/gallery/photos/prewedding">
        <div className="img">
            <img src="https://e1.pxfuel.com/desktop-wallpaper/671/70/desktop-wallpaper-this-prewedding-shoot-in-delhi-by-lenseyezia-productions-exudes-cuteness-and-romance-in-2020-pre-wedding-thumbnail.jpg" alt="" />
        </div>
        </Link>
        <div className="category-title">
            <p>Pre-wedding</p>
        </div>
      </div>
      <div className="category">
        <Link to="/gallery/photos/inwedding">
        <div className="img">
            <img src="https://nativeroaming.com/wp-content/uploads/2021/01/rustic-wedding-ceremony-native-roaming.jpg" alt="" />
        </div>
        </Link>
        <div className="category-title">
            <p>In-wedding</p>
        </div>
      </div>
      <div className="category">
        <Link to="/gallery/photos/postwedding">
        <div className="img">
            <img src="https://image.wedmegood.com/resized/800X/uploads/member/710774/1569589819_53184563_2290316911013651_6155209389578911744_o.jpg" alt="" />
        </div>
        </Link>
        <div className="category-title">
            <p>Post-wedding</p>
        </div>
      </div>
      <div className="category">
        <Link to="/gallery/photos/indoor">
        <div className="img">
            <img src="https://c4.wallpaperflare.com/wallpaper/165/129/317/asian-4k-hd-high-resolution-wallpaper-preview.jpg" alt="" />
        </div>
        </Link>
        <div className="category-title">
            <p>Indoor</p>
        </div>
      </div>
      <div className="category">
        <Link to="/gallery/photos/product">
        <div className="img">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
        </Link>
        <div className="category-title">
            <p>Product</p>
        </div>
      </div>
      <div className="category">
        <Link to="/gallery/photos/outdoor">
        <div className="img">
            <img src="https://wallpapercrafter.com/desktop/231649-outdoor-person-outside-and-corporate-hd.jpg" alt="" />
        </div>
        </Link>
        <div className="category-title">
            <p>Outdoor</p>
        </div>
      </div>
    </div>
    </div>
  )
}