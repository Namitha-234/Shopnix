import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Product.css";
import { Link } from "react-router-dom";

const Product = ({ onDataSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [netPrice, setNetPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(0);
  const [listPrice, setListPrice] = useState(0);
  const [gstPrice, setGstPrice] = useState(0);

  useEffect(() => {
    calculateNetPrice();
  }, [listPrice, shippingPrice, gstPrice, discountPrice]);

  const handleDiscountPriceChange = (e) => {
    const value = parseFloat(e.target.value);
    setDiscountPrice(value);
  };

  const handleShippingPriceChange = (e) => {
    const value = parseFloat(e.target.value);
    setShippingPrice(value);
  };

  const handleListPriceChange = (e) => {
    const value = parseFloat(e.target.value);
    setListPrice(value);
  };

  const handleGstPriceChange = (e) => {
    const value = parseFloat(e.target.value);
    setGstPrice(value);
  };

  const calculateNetPrice = () => {
    const netPrice = listPrice + shippingPrice + gstPrice - discountPrice;
    setNetPrice(netPrice);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onDataSubmit({ name, description, imagePreview, netPrice });
  };

  return (
    <form onSubmit={handleSubmit} className="scrollable">
      <h2>Let's add your first product</h2>
      <h3>Basic Details</h3>
      <div className="mb-3">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="details">Product Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="image">Add Image(s)</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Product Preview"
            className="image-preview"
          />
        )}
      </div>

      <div className="checkbox">
        <input type="checkbox" />
        <label> this product has an SKU code</label>
      </div>
      <div>
        <input type="text" placeholder="eg-PROD001"></input>
      </div>
      <div className="checkbox mb-3">
        <input type="checkbox" />
        <label> this product has an HSN/SAC code</label>
      </div>
      <div>
        <h3 className="mb-3">Pricing Details</h3>
      </div>
      <div className="checkbox">
        <input type="checkbox" />
        <label> price inclusive of GST</label>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label>Net Price</label>
              <input type="number" value={netPrice} readOnly />
            </div>
            <div className="form-group">
              <label>Discount percentage</label>
              <input
                type="number"
                value={discountPrice}
                onChange={handleDiscountPriceChange}
              />
            </div>
            <div className="form-group">
              <label>Shipping Charges</label>
              <input
                type="number"
                value={shippingPrice}
                onChange={handleShippingPriceChange}
              />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="form-group">
              <label>List Price:</label>
              <input
                type="number"
                value={listPrice}
                onChange={handleListPriceChange}
              />
            </div>
            <div className="form-group">
              <label>GST rate</label>
              <input
                type="number"
                value={gstPrice}
                onChange={handleGstPriceChange}
              />
            </div>
            <div className="mb-3 ">
              <label>Stock level</label>
              <input type="text" placeholder="eg-110"></input>
            </div>
            <button type="submit" className="mb-3">
              Submit
            </button>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <Link to="/customization">
                <button type="button" className="btn1">
                  Back
                </button>
              </Link>
              <Link to="/setupstore">
                <button className="btn2" type="button">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Product;
