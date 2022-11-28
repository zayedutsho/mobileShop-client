import React from "react";
import img from "./image/app.png";

const DownloadApp = () => {
  return (
    <div className="hero bg-cyan-500 rounded-lg mt-6 mb-6">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h2 className="text-5xl text-white mb-4">Download the app</h2>
          <figure>
            <img src={img} style={{ height: 200 }} alt="Shoes" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
