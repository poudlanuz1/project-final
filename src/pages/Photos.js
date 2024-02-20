import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImgCard from "../component/ImgCard";
import baseApi from "../component/utils/baseApi";

export default function Photos() {
  const { category } = useParams();
  console.log(category);
    const [data, setData] = useState([]);
  const remainder = data.length % 3;
  const n = Math.floor(data.length / 3);
  let second;
  let first;
  let third = data.slice(-n);
  if (remainder === 2) {
    second = data.slice(data.length - n * 2 - 1, -n);
    first = data.slice(0, data.length - n * 2 - 1);
  } else if (remainder === 1) {
    second = data.slice(data.length - n * 2, -n);
    first = data.slice(0, data.length - n * 2);
  } else {
    second = data.slice(data.length - n * 2, -n);
    first = data.slice(0, data.length - n * 2);
  }
  const fetchPhotos = async ()=>{
    try{
        const res = await baseApi.get(`/photo?category=${category}`);
        if(res.status === 200){
          const d = await res.data;
          setData(d);
          console.log(d);
        }
      }catch(err){
        // toast container
      }
  }

  useEffect(()=>{
    fetchPhotos();
  })
  return (
    <div class="photo-container">
      <div class="col">
        {first.map((items, index) => {
          return <ImgCard value={items} />;
        })}
      </div>
      <div class="col">
        {second.map((items, index) => {
          return <ImgCard value={items} />;
        })}
      </div>
      <div class="col">
        {third.map((items, index) => {
          return <ImgCard value={items} />;
        })}
      </div>
    </div>
  );
}
