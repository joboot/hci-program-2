import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
    
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import InputForm from './pages/input_form';
import ViewForm from './pages/view_form';


/*Questions on Canvas 
1. Who is our audience? 
    The employees at the company that is using the ticket system. 
2. What are the goals for the user? 
    They want to request help with their device or various devices.
3. How did we understand and document context and goals?
    We assigned certain tasks to each person and put inline comments describing what each part does.
4. Can We/Did We use any of the cognitive/behavior patterns discussed in the textbook?
    We made the website look nice and made it so the user only had to enter a few things to request tech help.
*/

function App() {
    // Return nvaigation bar that has routes to all pages
    return (
        <div>
            <Router>
                
                <Navbar /> {/* FNavbar component */}

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/input_form' element={<InputForm/>} />
                    <Route path='/view_form' element={<ViewForm/>} />
                </Routes>
            </Router>
        
            <Footer /> {/* Footer component */}
        </div>
        
    );
}
  
export default App;