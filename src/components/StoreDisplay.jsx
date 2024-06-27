import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/image.css";

const StoreDisplay = ({ data }) => {
  return (
    <div className="data-display">
      <h2>Entered Data</h2>
      <p>
        <strong>Name:</strong> {data.name}
      </p>
      <p>
        <strong>Title:</strong> {data.title}
      </p>
      <img className="image" src={data.imagePreview}></img>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Phone:</strong> {data.phone}
      </p>
    </div>
  );
};

export default StoreDisplay;
