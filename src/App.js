
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import { useLocation } from 'react-router-dom';
import Header from './Components/Navbar/Header';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import CheckoutPage from './Components/CheckoutPage/CheckoutPage';
import RequiredAuth from './Components/RequiredAuth/RequiredAuth';




function App() {
  const currentLocation = useLocation();
  return (
   
    <div className="App">
      {currentLocation.pathname === '/' ? '' : <Header bg={'dark'}/>}
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/signup' element={<SignUp/>}></Route>
       <Route path='/service/:service' element={<RequiredAuth><CheckoutPage/></RequiredAuth>}></Route>

     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
