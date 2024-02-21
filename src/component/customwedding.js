import React from 'react'

export default function customwedding() {
  return (
    <div id='wedding-custom-form'>
        <div id='form-wedding'>

        <form>
            <ul>
                <li>
                <h1>CUSTOMIZE YOUR WEDDING WITH US</h1>
                </li>
                <li>
                <label htmlFor="package">Package:</label>
                <input type="radio" name="package"  checked/> Wedding Day
                <input type="radio" name="package"  /> Reception Day
                <input type="radio" name="package"  /> Both
                </li>
                <li>
                <label htmlFor="packagefor">Package For:</label>
                <input type="radio" name="packagefor"  checked/> Bride
                <input type="radio" name="packagefor"  /> Groom
                <input type="radio" name="packagefor"  /> Both 
                </li>
                <li>
                <label htmlFor="frame size">Size of Frame:</label>
                <input type="radio" name="framesize"  checked/> 15in by 21in
                <input type="radio" name="framesize"  /> 16in by 24in
                <input type="radio" name="framesize"  /> 20in by 24in
                </li>
                <li>
                <label htmlFor="albumtype">Album Type:</label>
                <input type="radio" name="albumtype"  checked/> Normal Album
                <input type="radio" name="albumtype"  /> Karizma Album
                </li>
                <li>
                <label htmlFor="numofphoto">Number of printed Photos:</label>
                <input type="number" name="numofphoto" min='100' max='700' defaultValue='100'/>
                <p>(Note: Number can be from 100 to 700 only.)</p>
                </li>
                <li>
                <label htmlFor="droneshot">Drone Shot:</label>
                <input type="radio" name="droneshot"  /> Yes
                <input type="radio" name="droneshot"  checked/> No
                </li>
                <li>
                <label htmlFor="additionalmessage">Additional Message (optional):</label>
                <textarea id="additionalmessage" name="message" rows="4" placeholder='Write a Message'></textarea>
                </li>
                <li>
                    <button type='submit'>BUY PACKAGE</button>
                </li>
            </ul>
        </form>
    </div>
</div>
  )
}
