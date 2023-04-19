import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Products from './products/Products';
import Services from './services/Services';
import HomePage from './components/homepage/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
