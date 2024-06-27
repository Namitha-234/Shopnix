import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Theme from './components/Theme';
import Customization from './components/Customization';
import ProductSetUp from './components/ProductSetUp'
import SetUpStore from './components/SetUpStore';
import NewStore from './components/NewStore';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Theme/>}></Route>
          <Route path='customization' element={<Customization/>}></Route>
          <Route path='productsetup' element={<ProductSetUp/>}></Route>
          <Route path='setupstore' element={<SetUpStore/>}></Route>
          <Route path='newstore' element={<NewStore/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
