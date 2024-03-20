import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function CustomWedding() {
    const [packageWed, setPackageWed] = useState(0);
    const [packageFor, setPackageFor] = useState(0);
    const [frameSize, setFrameSize] = useState(0);
    const [albumType, setAlbumType] = useState(0);
    const [droneShot, setDroneShot] = useState(0);
    const [total, setTotal] = useState(0);

    const errorCustom = ()=> {
        toast.warning("Payment Portal Integrating Soon !!!");
    }
    const preventDefault = (e)=>{
        e.preventDefault();
    }

    // Function to update total whenever any state changes
    useEffect(() => {
        setTotal(packageWed + packageFor + frameSize + albumType + droneShot);
    }, [packageWed, packageFor, frameSize, albumType, droneShot]);

    return (
        <div id='wedding-custom-form'>
            <div id='form-wedding'>
                <form onSubmit={preventDefault}> 
                    <ul>
                        <li>
                            <h1>CUSTOMIZE YOUR WEDDING WITH US</h1>
                        </li>
                        <li>
                            <label htmlFor="package">Package:</label>
                            <input type="radio" name="package" onChange={() => setPackageWed(20000)}  /> Wedding Day
                            <input type="radio" name="package" onChange={() => setPackageWed(20000)} /> Reception Day
                            <input type="radio" name="package" onChange={() => setPackageWed(30000)} /> Both
                        </li>
                        <li>
                            <label htmlFor="packagefor">Package For:</label>
                            <input type="radio" name="packagefor" onChange={() => setPackageFor(10000)}  /> Bride
                            <input type="radio" name="packagefor" onChange={() => setPackageFor(15000)} /> Groom
                            <input type="radio" name="packagefor" onChange={() => setPackageFor(20000)} /> Both
                        </li>
                        <li>
                            <label htmlFor="frame size">Size of Frame:</label>
                            <input type="radio" name="framesize" onChange={() => setFrameSize(2000)}  /> 15in by 21in
                            <input type="radio" name="framesize" onChange={() => setFrameSize(4000)} /> 16in by 24in
                            <input type="radio" name="framesize" onChange={() => setFrameSize(6000)} /> 20in by 24in
                        </li>
                        <li>
                            <label htmlFor="albumtype">Album Type:</label>
                            <input type="radio" name="albumtype" onChange={() => setAlbumType(5000)}  /> Normal Album
                            <input type="radio" name="albumtype" onChange={() => setAlbumType(10000)} /> Karizma Album
                        </li>
                        <li>
                            <label htmlFor="numofphoto">Number of printed Photos:</label>
                            <input type="number" name="numofphoto" min='100' max='700' defaultValue='100' />
                            <p>(Note: Number can be from 100 to 700 only.)</p>
                        </li>
                        <li>
                            <label htmlFor="droneshot">Drone Shot:</label>
                            <input type="radio" name="droneshot" onChange={() => setDroneShot(8000)} /> Yes
                            <input type="radio" name="droneshot" onChange={() => setDroneShot(0)}  /> No
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
    );
}
