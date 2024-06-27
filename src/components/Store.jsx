import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';
import '../styles/Store.css'

const Store = ({ onDataSubmit }) => {
  const [name, setName] = useState("");
  const [title,setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");

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
    onDataSubmit({ name, title, imagePreview, email,phone });
  };
  return (
    <form onSubmit={handleSubmit} className="scrollable">
      <h2>Set Up the Store</h2>
      <h3>Basic Details</h3>
      <div className="mb-3">
        <label htmlFor="name">Name of the Store</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title">Store Title</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="image">Add Logo</label>
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
        <label> Add support details</label>
      </div>

      <div className="mb-3">
        <label htmlFor="email">Support E-mail address</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone">Support Phone Number</label>
        <input
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit" className="mb-3">
              Submit
            </button>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <Link to="/productsetup">
                <button type="button" className='btn1'>
                  Back
                </button>
              </Link>
              <Link to="/newstore">
                <button className='btn2' type="button">
                 Review and Finish
                </button>
              </Link>
              </div>
      </div>
      </form>
  )
}

export default Store
