import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  margin: 5px;
`;

const FormButton = styled(Button)`
    display: block;
`;

const FormLabel = styled(Form.Label)`
  display: block;
  padding-bottom: 5px;
  letter-spacing: .9px;
`;

const SingleLineTextEntry = styled(Form.Control)`
  border-radius: 5px;
  border: 1px solid;
  padding: 5px;
`;

const LargeContentTextArea = styled(Form.Control)`
border-radius: 5px;
border: 1px solid;
padding: 5px;
`;

class ContentPage extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired
  };

  render() {
    return (
      <FormContainer>
        <Form>
          <Form.Group controlId="publishPost" >
            <FormLabel>Title</FormLabel>
            <SingleLineTextEntry />
            <FormLabel> Blog Text </FormLabel>
            <LargeContentTextArea as="textarea" rows="5"/>
            <FormButton> Publish Post </FormButton> 
          </Form.Group>
        </Form>
      </FormContainer>
    );
  }
}

export default ContentPage;
