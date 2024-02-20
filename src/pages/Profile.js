import React, { useState } from 'react'
import { useEffect } from 'react';
import baseApi from '../component/utils/baseApi';
import getToken from '../component/utils/getToken';

export default function Profile() {
  const [data, setData] = useState({
    name:null,
    email:null,
    address:null,
    imageUrl:null,
  });
  const [isEditable,setIsEditable] = useState(false)
  const [readOnly,setReadOnly] = useState(true)
  const fetchUserInfo = async () => {
    try {
      const res = await baseApi.get("/user/individual", {
        headers: { token: getToken() },
      });
  
      if (res.status === 200) {
        const d = await res.data;
  
        // Update state only if it hasn't been set yet
        setData((prev) => (Object.keys(prev).every((key) => prev[key] === null) ? {
          name: d.data.name,
          email: d.data.email,
          address: d.data.address,
          imageUrl: d.data.imageUrl
        } : prev));
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };
  const MakeEditable = ()=>{
    setReadOnly((prev)=>!prev);
    setIsEditable((prev)=>!prev);
    document.getElementById("name").focus();

  }
  const handleOnChange = (e) => {
    setData((prev) => {
      if (e.target.type === "file") return { ...prev, [e.target.name]: e.target.files[0] };
      else return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleChanges = async ()=>{

  }
  const preventDefault = (e)=>{
    e.preventDefault()
;  }

  useEffect(()=>{
   fetchUserInfo(); 
  },[fetchUserInfo]);
  return (
    <div id='profile-page'>
      <div className="edit">
      </div>
      <div className="profile-container">
        <button className='edit' onClick={MakeEditable}>Edit Profile</button>
        <div className="form-box">
          <form action="" onSubmit={preventDefault}>
            <div className="image">
              <div className="img">
                <img src={data.imageUrl} alt="" />
              </div>
              <div className="photo-icon">

              </div>
            </div>
            <div className="textbox">
              <div className="title">Name</div>
              <input className='input' type="text" name="name" id="name" onChange={handleOnChange} value={data.name} readOnly={readOnly} autoComplete="off"/>
            </div>
            <div className="textbox">
            <div className="title">Email</div>
              <input className='input' type="email" name="email" onChange={handleOnChange} value={data.email} readOnly={readOnly} autoComplete="off" />
            </div>
            <div className="textbox">
            <div className="title">Address</div>
              <input className='input' type="text" name='address' onChange={handleOnChange} value={data.address} readOnly={readOnly} autoComplete="off" />
            </div>
            {
              isEditable?
              <button className='submit' onClick={handleChanges}>Save Changes</button>
              :
              <></>
            }
          </form>
        </div>
      </div>
    </div>
  )
}
