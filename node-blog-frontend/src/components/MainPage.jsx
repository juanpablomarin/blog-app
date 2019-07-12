import React, { Component } from "react";
import styled from "styled-components";
import { getInitialNavbarSections } from "../repository";
import NavigationBar from "./NavigationBar";
import ContentPage from "./ContentPage"
import { Spinner } from "react-bootstrap";

const HeaderContainer = styled.div`
  display: block;
  font-family: monospace;
`;

const BodyContainer = styled.div`
  display: flex;
`;

class MainPage extends Component {
  state = {
    sections: [],
    isLoading: false,
    contentPage: "welcome"
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    getInitialNavbarSections().then(data =>
      this.setState({ sections: data, isLoading: false })
    );
  }

  setContentPage = (content) =>  {
    this.setState({
      contentPage: content
    });
  }

  render() {
    const { isLoading, sections, contentPage } = this.state;

    return (
      <div>
      <HeaderContainer>
        {isLoading ? (
          <Spinner animation="border" role="status" />
        ) : (
          <NavigationBar setContentPage={this.setContentPage} sections={sections} />
        )}
      </HeaderContainer>
      <BodyContainer>
          <ContentPage content={contentPage} />
      </BodyContainer>
      </div>
    );
  }
}

export default MainPage;
