import React from "react";
import Container from "./Container/Container";
import Wrapper from "./hoc/Wrapper";
import {BrowserRouter as Router} from "react-router-dom";

class App extends React.Component {
    state = {}

    render() {
        return (
            <Router>
                <Wrapper>
                    <Container/>
                </Wrapper>
            </Router>
        );
    }
}

export default App;