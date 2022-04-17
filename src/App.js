
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import { useLocation } from 'react-router-dom';
import Header from './Components/Navbar/Header';




function App() {
  const currentLocation = useLocation();
  console.log(currentLocation);
  return (
   
    <div className="App">
      {currentLocation.pathname === '/' ? '' : <Header bg={'dark'}/>}
     <Routes>
       <Route path='/' element={<Home/>}></Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
