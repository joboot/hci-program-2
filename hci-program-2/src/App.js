import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import InputForm from './pages/input_form';
import ViewForm from './pages/view_form';
import Footer from './components/Footer';

// Questions on Canvas 
//1. Who is our audience? The employees at the company that is using the ticket system. 
//2. What are the goals for the user? They want to request help with their device or various devices.
//3. How did we understand and document context and goals?
//4. Can We/Did We use any of the cognitive/behavior patterns discussed in the textbook? 

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
        <div>
            <Footer />
        </div>
    </div>
    
);
}
  
export default App;