import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../component/Providers/UserProvider";
import baseApi from "../component/utils/baseApi";
import getToken from "../component/utils/getToken";

export default function Profile() {
  const { logoutUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [id,setId] = useState(null);
  const [data, setData] = useState({
    name: null,
    email: null,
    address: null,
    imageUrl: null,
  });
  const [image,setImage] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const fetchUserInfo = async () => {
    try {

      const res = await baseApi.get("/user/individual", {
        headers: { token: getToken() },
      });

      if (res.status === 200) {
        const d = await res.data;
        // Update state only if it hasn't been set yet
        setId(d.data._id);
        console.log(id);
        setImage((prev)=> prev===null? d.data.imageUrl : prev);
        setData((prev) =>
          Object.keys(prev).every((key) => prev[key] === null)
            ? {
                name: d.data.name,
                email: d.data.email,
                address: d.data.address,
                imageUrl: d.data.imageUrl,
              }
            : prev
        );
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };
  const MakeEditable = () => {
    setReadOnly((prev) => !prev);
    setIsEditable((prev) => !prev);
    document.getElementById("name").focus();
  };

  const handleOnChange = (e) => {
    if(e.target.type==="file"){
      setImage(URL.createObjectURL(e.target.files[0]));
    }
    setData((prev) => {
      if (e.target.type === "file"){
        return { ...prev, [e.target.name]: e.target.files[0] };
      }
      else return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleChanges = async () => {
    let formData = new FormData();
    formData.append("name",data.name);
    formData.append("email",data.email);
    formData.append("address",data.address);
    if(typeof(data.imageUrl) === "object"){
      formData.append("image",data.imageUrl);
    }
    const res = await baseApi.put(`user/${id}`,formData,{
      headers: { "content-type": "multipart/form-data" },
    })
    if(res.status === 200){
      toast.success("Profile Info updated sucessfully");
    }
    else{
      toast.error("Error Occoured while Updating");
    }
  };
  const handleDelete = async()=>{
        if(window.confirm("Do you want to delete your account?") === true){
          const res = await baseApi.delete("/user",{
            headers: { token: getToken() },
          });
          if(res.status === 200){
            toast.success("User Deleted Sucessfully");
            localStorage.removeItem("token");
            logoutUser();
            navigate("/",{replace:true});
          }
          else{
            toast.error("Couldn't delete profile");
          }
        }
        else{
          return ;
        }
  }

  const preventDefault = (e)=>{
    e.preventDefault();
  }


  useEffect(() => {
    fetchUserInfo();
  });

  return (
    <div id="profile-page">
      <div className="profile-container">
        <button className="edit" onClick={MakeEditable}>
          Edit Profile
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete Profile
        </button>
        <div className="form-box">
          <form action="" onSubmit={preventDefault}>
            <div className="image">
              <div className="img">
                <img src={image} alt="" />
              </div>
              {
                isEditable?
              <div className="photo-icon">
                <label htmlFor="image-input">
                <i class="fa-solid fa-camera"></i>
                </label>
                <input type="file" accept="image/*" name="imageUrl" src="" alt="" id="image-input" onChange={handleOnChange} />
              </div>
              :<></>
              }
            </div>
            <div className="textbox">
              <div className="title">Name</div>
              <input
                className="input"
                type="text"
                name="name"
                id="name"
                onChange={handleOnChange}
                value={data.name}
                readOnly={readOnly}
                autoComplete="off"
              />
            </div>
            <div className="textbox">
              <div className="title">Email</div>
              <input
                className="input"
                type="email"
                name="email"
                onChange={handleOnChange}
                value={data.email}
                readOnly={true}
                autoComplete="off"
              />
            </div>
            <div className="textbox">
              <div className="title">Address</div>
              <input
                className="input"
                type="text"
                name="address"
                onChange={handleOnChange}
                value={data.address}
                readOnly={readOnly}
                autoComplete="off"
              />
            </div>
            {isEditable ? (
              <button className="submit" onClick={handleChanges}>
                Save Changes
              </button>
            ) : (
              <></>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
