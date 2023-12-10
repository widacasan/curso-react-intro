import React from "react";
import GIF from "./GIF.gif";
import "./GifComponent.css";

function GifComponent() {
  return (
    <div className="gif-container">
      <img src={GIF} alt="Gif" className="gif-image" />
    </div>
  );
}

export { GifComponent };
