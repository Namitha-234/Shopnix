import React,{useState} from 'react'
import Store from './Store'
import StoreDisplay from './StoreDisplay'
import 'bootstrap/dist/css/bootstrap.css';

function SetUpStore() {
    const [formData, setFormData] = useState(null);
  
    const handleDataSubmit = (data) => {
      setFormData(data);
    };

  return (
    <div className="setupstore">
      <div className="container">
        <div className="form-side">
          <Store onDataSubmit={handleDataSubmit} />
        </div>
        <div className="display-side">
          {formData && <StoreDisplay data={formData} />}
        </div>
      </div>
    </div>
  )
}

export default SetUpStore
