
//Essential imports
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

//Page layout imports
import Nav from '../nav/nav';
import Header from '../header/header';
import Footer from '../footer/footer';


//scss imports
import '../main-view/main-view.scss';
import { Col, Row } from 'react-bootstrap';

//Page imports
import Prices from '../../pages/prices-view/prices';
import Gallery from '../../pages/gallery-view/gallery';
import Availability from '../../pages/availability-view/availability';
import Contact from '../../pages/contact-view/contact';




const Home = () => (
    <div></div>
)

function MainView() {
    return (

        <div className='page-container'>
            <div className='content-wrap'>
                <Router>
                    <Nav />

                    <Header />


                    <Row>
                        <Col>
                            {/* Space for page filler */}
                        </Col>
                    </Row>



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
