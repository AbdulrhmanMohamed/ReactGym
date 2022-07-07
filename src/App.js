import logo from './logo.svg';

import {Box} from '@mui/material'
import{Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ExcersiceDetails from './pages/ExcersiceDetails';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Box  width='400px'  sx={{ width:{xl:'1400px'} }} m='auto' >
     
     <NavBar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='excersiceDetails/:id' element={<ExcersiceDetails/>}/>
       
     </Routes>
     <Footer/>
    </Box>
  );
}

export default App;
