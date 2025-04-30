import './App.css';
import Benefits from './components/Benefits/Benefits';
import Header from './components/Header/Header';
import Hero from "./components/Hero/Hero";
import Prints from './components/Prints/Prints';

function App() {
  return (
    <div className='container-content'>
      <Header />
      <Hero />
      <Benefits />
      <Prints />
    </div>
  );
}

export default App;
