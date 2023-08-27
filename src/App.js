import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Users from './pages/Users';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer/Footer';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route exact path='/' element ={<Home/>}/>
        <Route path='/Users' element ={<Users/>}/>
        <Route path='/ContactUs' element ={<ContactUs/>}/>
        <Route path='/Detail/:id' element={<Detail/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
