import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar';
import Error from './components/Error';
import Post from './components/pages/Post';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';

function App() {

  let isLogged = false;

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = { <Home />} />
        <Route path='/about' element = { <About />} />
        <Route path='/contact' element = { <Contact />} />
        <Route path='/post/:category' element = { <Post />} />
        <Route path='/post/:category/:id' element = { <Post />} />
        <Route path='/dashboard' element = { isLogged ? <Dashboard /> : <Navigate to = '/login' replace />} />
        <Route path='/login' element = { <Login />} />
        <Route path = '*' element = { <Error />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
