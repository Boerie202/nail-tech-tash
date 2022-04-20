import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav.scss';


function Nav() {
    return (

        <nav>

            <h1 className='title'>Nail Tech Tash</h1>
            <h3 className='sub-heading text-center' >Treat Yourself</h3>

            <Row>
                <Col>
                    <Link to='/'>
                        <li className='nav-list'>Home</li>
                    </Link>
                </Col>
                <Col>
                    <Link to='/prices'>
                        <li className='nav-list'>Products & Prices</li>
                    </Link>
                </Col>
                <Col>
                    <Link to='/gallery'>
                        <li className='nav-list'>Gallery</li>
                    </Link>
                </Col>
                {/* <Col>
                    <Link to='/contact'>
                        <li className='nav-list'>Contact</li>
                    </Link>
                </Col> */}
                <Col>
                    <Link to='/availability'>
                        <li className='nav-list'>Availability</li>
                    </Link>
                </Col>
            </Row>
        </nav>

    )
}

export default Nav;