import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Customization.css'
import { Link } from 'react-router-dom';

const Customization = () => {
  return (
    <div className="container">
      <div className="form-container ">
        <form>
          <h2>Let's Customize Your Store</h2>
          <label>Add a product type</label>
          <input type="text" placeholder='eg-books' />
          
          <label>Add a category(optional)</label>
          <input type='text' placeholder='eg-Academic book'/>
          
          <label>Add a sub-category(optional)</label>
          <input type='text' placeholder='eg-amedical book'></input>
          
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to='/'>
  <button className="btn1" type="button"> Back</button>
  </Link>
  <Link to='/productsetup'>
  <button className="btn2 " type="button">Next</button>
  </Link>
</div>
        </form>
      </div>
      <div className="image-container">
        <img src="https://www.webfx.com/wp-content/uploads/2021/10/product-category.png" alt="Description" />
      </div>
    </div>
  )
}

export default Customization
