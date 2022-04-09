import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav.scss';


function Nav() {
    return (

        <nav>
            <h1 className='title'>Nail Tech Tash</h1>
            <h3 className='sub-heading text-center' >Treat Yourself</h3>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
            </ul>
        </nav>

    )
}

export default Nav;