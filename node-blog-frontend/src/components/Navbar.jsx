import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const NavbarContainer = styled(Nav)`
  display: flex;
  justify-content: end;
`;

class Navbar extends Component {
  static propTypes = {
    sections: PropTypes.array
  };

  static defaultProps = {
    sections: []
  };

  render() {
    const { sections } = this.props;

    return (
      <NavbarContainer>
        {sections.map(section => {
          return (
            <Nav.item>
              <Nav.Link eventKey={section.key}>{section.text}</Nav.Link>
            </Nav.item>
          );
        })}
      </NavbarContainer>
    );
  }
}

export default Navbar;
