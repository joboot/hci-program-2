import React from 'react';
import './App.css';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import InputForm from './pages/input_form';
import ViewForm from './pages/view_form';
import Footer from './components/Footer';

function App() {
return (
    <div>
        <Router>
        <Navbar />
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/input_form' element={<InputForm/>} />
            <Route path='/view_form' element={<ViewForm/>} />
        </Routes>
        </Router>
        <div className="App">
            <Footer />
        </div>
    </div>
    
);
}
  
export default App;