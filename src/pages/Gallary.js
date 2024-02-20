import React from 'react'
import { Link } from 'react-router-dom'

export default function Gallary() {
  return (
    <div id="gallary">
        <div className="title">Gallary</div>
    <div id='all-category'>
      <div className="category">
        <Link to="/gallery/photos/bride">
        <div className="img">
            <img src="https://nativeroaming.com/wp-content/uploads/2021/01/rustic-wedding-ceremony-native-roaming.jpg" alt="" />
        </div>
        </Link>
        <div className="category-title">
            <p>Bride</p>
        </div>
      </div>
      <div className="category">
        <Link to="/gallery/photos/groom">
        <div className="img">
            <img src="https://nativeroaming.com/wp-content/uploads/2021/01/rustic-wedding-ceremony-native-roaming.jpg" alt="" />
        </div>
        </Link>
        <div className="category-title">
            <p>Groom</p>
        </div>
      </div>
      <div className="category">
        <Link to="/gallery/photos/potrait">
        <div className="img">
            <img src="https://nativeroaming.com/wp-content/uploads/2021/01/rustic-wedding-ceremony-native-roaming.jpg" alt="" />
        </div>
        </Link>
        <div className="category-title">
            <p>Potrait</p>
        </div>
      </div>
      <div className="category">
        <Link to="/gallery/photos/prewedding">
        <div className="img">
            <img src="https://nativeroaming.com/wp-content/uploads/2021/01/rustic-wedding-ceremony-native-roaming.jpg" alt="" />
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
            <img src="https://nativeroaming.com/wp-content/uploads/2021/01/rustic-wedding-ceremony-native-roaming.jpg" alt="" />
        </div>
        </Link>
        <div className="category-title">
            <p>Post-wedding</p>
        </div>
      </div>
      <div className="category">
        <Link to="/gallery/photos/indoor">
        <div className="img">
            <img src="https://nativeroaming.com/wp-content/uploads/2021/01/rustic-wedding-ceremony-native-roaming.jpg" alt="" />
        </div>
        </Link>
        <div className="category-title">
            <p>Indoor</p>
        </div>
      </div>
      <div className="category">
        <Link to="/gallery/photos/product">
        <div className="img">
            <img src="https://nativeroaming.com/wp-content/uploads/2021/01/rustic-wedding-ceremony-native-roaming.jpg" alt="" />
        </div>
        </Link>
        <div className="category-title">
            <p>Product</p>
        </div>
      </div>
      <div className="category">
        <Link to="/gallery/photos/outdoor">
        <div className="img">
            <img src="https://nativeroaming.com/wp-content/uploads/2021/01/rustic-wedding-ceremony-native-roaming.jpg" alt="" />
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
