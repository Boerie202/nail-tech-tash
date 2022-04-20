import React from 'react';

import { Row, Col } from 'react-bootstrap';

//Image imports
import Image1 from '../../images/image1.jpg';
import Image2 from '../../images/image2.jpg';
import Image3 from '../../images/image3.png';

const Home = () => (
    <div className='main-page-pics'>
        <Row>

            <Col>
                <img src={Image1} height="400" width="400" />
            </Col>

            <Col>
                <img src={Image3} height="400" width="400" />

            </Col>

            <Col>
                <img src={Image2} height="400" width="400" />
            </Col>

        </Row>
    </div>
)

export default Home;