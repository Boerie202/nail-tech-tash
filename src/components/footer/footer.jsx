import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './footer.scss';

import instaImage from '../../images/Instagram.png'



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
                            <li>Mobile: 07506009730</li>
                            <li>E-mail: tashhanbury95@gmail.com</li>
                        </ul>

                    </div>
                    {/* Column 3 */}
                    <div className='col insta-image'>

                        {/* <h3>Social Media</h3> */}

                        <img src={instaImage} height="50" width="50" />

                        <p>@nail.tech.tash</p>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;