import React from 'react';

import { Row, Col } from 'react-bootstrap';

import Image1 from '../../images/image1.jpeg'
import Image2 from '../../images/image2.jpeg'
import Image3 from '../../images/image3.png'



function Images() {
    return (
        <Row>

            <Col>
                <img src={Image1} height="50" width="50" />
            </Col>

            <Col>
                <img src={Image2} height="50" width="50" />
            </Col>

            <Col>
                <img src={Image3} height="50" width="50" />
            </Col>
        </Row>
    );
}

export default Images;