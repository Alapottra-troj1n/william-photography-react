
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Header from './Components/Navbar/Header';


function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Home/>}></Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
