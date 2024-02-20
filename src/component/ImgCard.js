import React from "react";

export default function ImgCard(props) {
  const value = props.value
  return (
    <div>
      <img
        src={value.imageUrl}
        alt=""
      />
    </div>
  );
}
