import React from "react";
export default function Video({ data }) {
  return (
    <div>
      {data.map((video) => (
        <div>
          <h1>{video.name}</h1>
          <video
            key={video.id}
            src={video.video_url}
            controls
            style={{ width: "500px", margin: "auto" }}
          />
        </div>
      ))}
    </div>
  );
}
