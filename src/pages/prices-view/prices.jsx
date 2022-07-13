import React from "react";
import '../../components/main-view/main-view.scss';
import './prices.scss';
import { Col, Row } from 'react-bootstrap';

import Logo from '../../images/tash-logo.PNG'

const Prices = () => {
    return (
        <div className='pricesPage'>
            <h1 className=' heading text-center'>Price List</h1>
            <Row>
                <img src={Logo} height="500" width="500" className='Logo' />
                <Col>

                    <ul className='priceList'>

                        <li className='products'> Gel Polish: £15.00</li>
                        <li className='products'> BIAB (on it's own): £17.00</li>
                        <li className='products'> BIAB with gel polish: £19.00</li>
                        <li className='products'> French Tips (add on): £4.00</li>
                        <li className='products'> Nail art: £4.00</li>
                        <li className='products'> Soak off: £5.00</li>

                    </ul>
                </Col>

            </Row>
        </div>
    );
}

export default Prices;