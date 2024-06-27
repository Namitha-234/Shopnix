import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Theme.css'
import { Link } from 'react-router-dom';

const Theme = () => {
    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);
    const handleClick1 = () => {
      setIsClicked1(true);
    };

    const handleClick2 = () => {
        setIsClicked2(true);
      };

      const handleClick3 = () => {
        setIsClicked3(true);
      };


  
  return (
    <div className='container1'>
      <h2>Apply a theme</h2>
      <div className='container2'>
        <div className="row">
            <div className="col-sm-4">
                <div className="card" style={{ width: "18rem" }}>
  <img src="https://www.zilliondesigns.com/blog/wp-content/uploads/Flatsome.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title p-3">Bags Theme</h5>
    <button className="btn btn-outline-primary" onClick={handleClick1}> 
    {isClicked1 ? <span>&#10003;</span> : <span>Apply</span>}
    </button>
  </div>
</div>
            </div>
            <div className="col-sm-4">
            <div className="card" style={{ width: "18rem" }}>
  <img src="https://www.zilliondesigns.com/blog/wp-content/uploads/Flatsome.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title p-3">Flex Theme</h5>
    <button className="btn btn-outline-primary" onClick={handleClick2}> 
    {isClicked2 ? <span>&#10003;</span> : <span>Apply</span>}
    </button>
  </div>
</div>
            </div>
            <div className="col-sm-4">
            <div className="card" style={{ width: "18rem" }}>
  <img src="https://www.zilliondesigns.com/blog/wp-content/uploads/Flatsome.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title p-3">Chic Theme</h5>
  <button className="btn btn-outline-primary" onClick={handleClick3}> 
    {isClicked3 ? <span>&#10003;</span> : <span>Apply</span>}
    </button>
  </div>
</div>
            </div>
            <Link to='/customization'>
            <button type="button" class="btn btn-primary justify-content-md-end"  >Next</button>
            </Link>
        </div>
      </div>
    </div>


  )
}

export default Theme
