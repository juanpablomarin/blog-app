import React, { Component } from "react";
import styled from "styled-components";
import { getInitialNavbarSections } from "../repository";
import Navbar from "./Navbar";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: monospace;
`;

class MainPage extends Component {
  state = {
    initialState: {}
  };

  componentDidMount() {
    this.setState({ initialState: getInitialNavbarSections() });
  }

  render() {
    const { initialState } = this.state;

    return (
      <MainContainer>
        <Navbar initialState={initialState} />
      </MainContainer>
    );
  }
}

export default MainPage;
