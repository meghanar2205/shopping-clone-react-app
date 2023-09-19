import './App.css';
import Checkout from './Checkout';
import HomePage from './HomePage';
// import Header from './Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/checkout' element = {<Checkout />} />
              
          <Route path = '/' element = {<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;