import React, { Component } from "react";
import Navbar from "./Navbar.js";
import styled from 'styled-components';

const Container = styled.div`
    font-family: roboto;
`

class BasePage extends Component {
    render(){
        return (
            <Container>
                <Navbar />
            </Container>
        );
    }
}

export default BasePage;
