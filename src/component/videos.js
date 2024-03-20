import React, { useState } from "react";
import { useEffect } from "react";
import baseApi from "./utils/baseApi";
import VideoCard from "./VideoCard";

export default function Videos() {
  const [data,setData] = useState([]);

  const fetchData = async()=>{
    const res = await baseApi.get("/video");
    if(res.status === 200){
      const d = await res.data;
      setData(d);
    }
  }
  useEffect(()=>{
    fetchData();
  })
  return (
    <div className="video">
      <div className="title">
        Videos
      </div>
  <div id= "videos">
    {
      data.map((item,index)=> {
        return <VideoCard value = {item} />
      })
    }
    </div>
  </div>
  );
}
