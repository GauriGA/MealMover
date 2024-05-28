import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/footer';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';

const App = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : null}
            <div className='app'>
                <Navbar setShowLogin={setShowLogin} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/order' element={<PlaceOrder />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default App;
