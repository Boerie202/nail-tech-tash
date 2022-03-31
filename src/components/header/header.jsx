import React from "react";
import { Row, Col } from 'react-bootstrap';


export class Header extends React.Component {
    render() {
        return (
            <Row>
                <Col className='header text-center'>
                    <h1 className='mainHeading'>Nail Tech Tash</h1>
                    <h2 className='subHeading' >Treat Yourself</h2>
                    <div className="hr"><hr /></div>
                </Col>
            </Row >
        )
    }
}