import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const NavbarContainer = styled(Nav)`
  display: flex;
  justify-content: flex-end;
`;

const NavItem = styled(Nav.Item)`
  margin: 5px;
  font-size: 16px;
`;

const NavLink = styled(Nav.Link)`
  text-decoration: none;
`;

class NavigationBar extends Component {
  static propTypes = {
    sections: PropTypes.array,
    setContentPage: PropTypes.func
  };

  static defaultProps = {
    sections: [],
    setContentPage: () => {}
  };

  render() {
    const { sections } = this.props;

    return (
      <NavbarContainer>
        {sections.map(section => {
          return (
            <NavItem onClick={() => this.props.setContentPage(section.key)}>
              <NavLink eventKey={section.key}>{section.text}</NavLink>
            </NavItem>
          );
        })}
      </NavbarContainer>
    );
  }
}

export default NavigationBar;
