import React from 'react'

export default function VideoCard(props) {
  const value = props.value;
    return (
    <div className="video-card">
        <iframe src={value.videoUrl} className="iframe" frameborder="0"></iframe>
    </div>

  )
}
