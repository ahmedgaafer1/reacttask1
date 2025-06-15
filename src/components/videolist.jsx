import axios from "axios";
import React, { useEffect, useState } from "react";
import Videoitem from "./videoitem";

function Videolist() {
  const [videosArr, setVideosArr] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/a055ff59-3367-4f9a-9b14-ff3c8c131717")
      .then((response) => {
        setVideosArr(response.data);
      })
      .catch((error) => {
        console.error("There is an error!", error);
      });
  }, []);

  return (
    <div className="row justify-content-center  mx-auto mt-5 container">
      {videosArr.map((video, index) => (
        <Videoitem data={video} key={index} />
      ))}
    </div>
  );
}

export default Videolist;
