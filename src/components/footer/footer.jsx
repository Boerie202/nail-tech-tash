import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './footer.scss';

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='container'>
                <div className='row'>
                    {/* Column 1 */}
                    <div className='col'>

                        <h3>Location:</h3>
                        <ul className='list-unstyled'>
                            <li>56 Rose Avenue,</li>
                            <li>Horsforth,</li>
                            <li>Leeds,</li>
                            <li>LS184QE</li>
                        </ul>

                    </div>
                    {/* Column 3 */}
                    <div className='col'>

                        <h3>Contact:</h3>
                        <ul className='list-unstyled'>
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                        </ul>

                    </div>
                    {/* Column 3 */}
                    <div className='col'>

                        <h3>Column 3</h3>
                        <ul className='list-unstyled'>
                            <li>Text</li>
                            <li>Text</li>
                            <li>Text</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;