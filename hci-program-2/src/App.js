import React from 'react';
import './App.css';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import InputForm from './pages/input_form';
import ViewForm from './pages/view_form';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/home' exactelement={<Home />} />
        <Route path='/input_form' element={<InputForm/>} />
        <Route path='/view_form' element={<ViewForm/>} />
    </Routes>
    </Router>
);
}
  
export default App;