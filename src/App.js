import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar';
import Error from './components/Error';
import Post from './components/pages/Post';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = { <Home />} />
        <Route path='/about' element = { <About />} />
        <Route path='/contact' element = { <Contact />} />
        <Route path='/post/:category' element = { <Post />} />
        <Route path = '*' element = { <Error />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
