import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import { publishPost } from "../repository";
import { generateURL } from "../helpers";

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
  letter-spacing: 0.9px;
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

  state = {
    blogText: null,
    titleText: null
  };

  // TODO: Validation Errors
  
  handleTitleChange = event => {
    this.setState({
      titleText: event.target.value
    });
  };

  handleBlogTextChange = event => {
    this.setState({
      blogText: event.target.value
    });
  };

  handlePublishPostClick = () => {
    const { titleText, blogText } = this.state;
    const url = generateURL({ title: titleText });
    const request = { title: titleText, body: blogText, url: url };

    publishPost(request).then(response => console.log(response));
  };

  render() {
    return (
      <FormContainer>
        <Form>
          <Form.Group controlId="publishPost">
            <FormLabel>Title</FormLabel>
            <SingleLineTextEntry
              onChange={event => this.handleTitleChange(event)}
            />
            <FormLabel> Blog Text </FormLabel>
            <LargeContentTextArea
              as="textarea"
              rows="5"
              onChange={event => this.handleBlogTextChange(event)}
            />
            <FormButton onClick={this.handlePublishPostClick}> Publish Post </FormButton>
          </Form.Group>
        </Form>
      </FormContainer>
    );
  }
}

export default ContentPage;
