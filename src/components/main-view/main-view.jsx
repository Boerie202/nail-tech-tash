
//Essential imports
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

//Page layout imports
import Nav from '../nav/nav';
import Footer from '../footer/footer';


//scss imports
import '../main-view/main-view.scss';
import { Col, Row } from 'react-bootstrap';

//Page imports
import Home from '../../pages/home-view/home';
import Prices from '../../pages/prices-view/prices';
import Gallery from '../../pages/gallery-view/gallery';
import Availability from '../../pages/availability-view/availability';
import Contact from '../../pages/contact-view/contact';



function MainView() {
    return (

        <div className='page-container'>
            <div className='content-wrap'>
                <Router>
                    <Nav />


                    {/* Routing for pages */}
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/prices" element={<Prices />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/availability" element={<Availability />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>

                </Router>
            </div>
            <Footer />
        </div>



    );

}

export default MainView;
