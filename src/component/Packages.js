import React, { useContext, useEffect, useState } from "react";
import display from "../images/display.jpg";
import { Link, useNavigate } from "react-router-dom";
import baseApi from "./utils/baseApi";
import getToken from "./utils/getToken";
import { UserContext } from "./Providers/UserProvider";

export default function Packages() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { logoutUser } = useContext(UserContext);

  const fetchUserInfo = async () => {
    const res = await baseApi.get("/user/individual", {
      headers: { token: getToken() },
    });
    if (res.status === 200) {
      const d = await res.data;
      setData(d.data);
    }
  };
  const logout = async () => {
    const res = await baseApi.post("/userLogout", {
      headers: { token: getToken() },
    });
    console.log(res);
    if (res.status === 200) {
      localStorage.removeItem("token");
      logoutUser();
      navigate("/", { replace: true });
    }
  };
  useEffect(() => {
    fetchUserInfo();
  });
  return (
    <div id="packages-list">
      <div id="profile">
        <img src={display} alt="pp"></img>
        <div class="dropdown">
          <button class="dropbtn">{data.name}</button>
          <div class="dropdown-content">
            <Link to="/my-profile">My Profile</Link>
            <div onClick={logout}>Log Out</div>
          </div>
        </div>
      </div>
      <div id="wedding-packages-list">
        <div id="basic">
          <h2> WEDDING BASIC</h2>
          <img src={display}></img>
          <ul>
            <li>100 printed photos with album</li>
            <li>15" by 21" Frame</li>
            <li>Highlight Video</li>
            <li>Full Video</li>
            <li>Softcopy Photos (64gb)</li>
            <li><h1>RS.40000</h1></li>
          </ul>
          <button type="submit">BUY NOW</button>
        </div>
        <div id="standard">
          <h2>WEDDING STANDARD</h2>
          <img src={display}></img>
          <ul>
            <li>300 printed photos with album</li>
            <li>15" by 21" Frame</li>
            <li>Highlight Video</li>
            <li>Full Video</li>
            <li>Softcopy Photos (64gb)</li>
            <li><h1>RS.55000</h1></li>
          </ul>
          <button type="submit">BUY NOW</button>
        </div>
        <div id="premium">
          <h2>WEDDING PREMIUM</h2>
          <img src={display}></img>
          <ul>
            <li>Karizma Album</li>
            <li>15" by 21" Frame</li>
            <li>Highlight Video</li>
            <li>Full Video</li>
            <li>Softcopy Photos (64gb)</li>
            <li><h1>RS.70000</h1></li>
          </ul>
          <button type="submit">BUY NOW</button>
        </div>
      </div>
      <div id="custom-packages-list">
        <div id="custom-wedding-list">
          <h2>WEDDING CUSTOM</h2>
          <img src={display}></img>
          <ul>
            <li id="customize">
              Customize the wedding package according to your need
            </li>
          </ul>
          <button type="submit">
            <Link to="/packages/custom/wedding">Customize Now</Link>
          </button>
        </div>
        <div id="custom-event-list">
          <h2>EVENT CUSTOM</h2>
          <img src={display}></img>
          <ul>
            <li id="customize">
              Customize your event package according to your need
            </li>
          </ul>
          <button type="submit">
            <Link to="/packages/custom/events">Customize Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
