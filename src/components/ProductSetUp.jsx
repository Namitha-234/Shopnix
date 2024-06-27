import React, { useState } from 'react';
import Product from './Product';
import ProductDisplay from './ProductDisplay';
import '../styles/ProductSetUp.css';
import 'bootstrap/dist/css/bootstrap.css';

function ProductSetUp() {
  const [formData, setFormData] = useState(null);

  const handleDataSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="productsetup">
      <div className="container">
        <div className="form-side">
          <Product onDataSubmit={handleDataSubmit} />
        </div>
        <div className="display-side">
          {formData && <ProductDisplay data={formData} />}
        </div>
      </div>
    </div>
  );
}

export default ProductSetUp;

