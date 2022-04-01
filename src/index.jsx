import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';

// Main component (will eventually use all the others)
class nailTechTash extends React.Component {
    render() {
        return (
            <Container>
                <MainView />
            </Container>
        );
    }
}

// Finds the root of the app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render the app in the root DOM element
ReactDOM.render(React.createElement(nailTechTash), container);