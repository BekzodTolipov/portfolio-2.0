import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './pages/about/About';
// import { Login } from './pages/login/Login';
import { Play } from './pages/play/Play';
import { Work } from './pages/work/Work';
import Footer from './partials/footer/Footer';
import NavigationComponent from './partials/nav/Navigation';

export default function App() {
  return (
    <div className='main-container'>
      <BrowserRouter>
        <NavigationComponent />

        <Routes>
          <Route path='/' element={<About />} />

          <Route path='/work' element={<Work />} />

          <Route path='/about' element={<About />} />

          <Route path='/projects' element={<Play />} />

          {/* <Route path='/login' element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
