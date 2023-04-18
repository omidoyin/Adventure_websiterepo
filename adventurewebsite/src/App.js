import './App.css';
import Hero from './components/Hero/Hero';
import Cards from './components/cardDisplay/Cards';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
