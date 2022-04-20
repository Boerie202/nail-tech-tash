
//Essenaitl imports
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Redirect } from 'react-router-dom';

//CSS import
import './footer.scss';

//Image import
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
                            <li className='mobile'>Mobile: 07506009730</li>

                            <li className='email' onClick={() => window.open("mailto:tashhanbury95@gmail.com?")}>E-mail: tashhanbury95@gmail.com</li>

                        </ul>

                    </div>
                    {/* Column 3 */}
                    <div className='col insta-image'>


                        <img src={instaImage} height="50" width="50" onClick={() => window.open("https://instagram.com/nail.tech.tash?igshid=YmMyMTA2M2Y", "_blank")} />

                        <p onClick={() => window.open("https://instagram.com/nail.tech.tash?igshid=YmMyMTA2M2Y", "_blank")}>@nail.tech.tash</p>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;