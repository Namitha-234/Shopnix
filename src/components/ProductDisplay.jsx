import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/image.css'

const ProductDisplay = ({ data }) => {
  return (
    <div className="data-display">
      <h2>Entered Data</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Description:</strong> {data.description}</p>
      <img className='image' src={data.imagePreview}></img>
      <p><strong>Net Price:</strong> {data.netPrice}</p>
    </div>
  );
};

export default ProductDisplay;



