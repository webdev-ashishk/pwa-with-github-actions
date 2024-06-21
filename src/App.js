import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    videoFetched();
  }, []);
  async function videoFetched() {
    const result = await fetch("https://orangevalleycaa.org/api/videos");
    const json = await result.json();
    // console.log(json);
    setData(json);
  }
  console.log(data);
  return (
    <div>
      <h1 id="video">Videos</h1>
      <ul style={{ textAlign: "center" }}>
        <Video data={data} />
      </ul>
    </div>
  );
}

// ("https://orangevalleycaa.org/api/videos");
