import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = { <Home />} />
        <Route path='/about' element = { <About />} />
        <Route path='/contact' element = { <Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
