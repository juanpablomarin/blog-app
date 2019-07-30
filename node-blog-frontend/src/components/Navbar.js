import React, { Component } from "react";
import { AppBar, Toolbar, Grid, Typography, Button } from "@material-ui/core";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  float: right;
`;

class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Grid justify="space-between" alignItems="center" container spacing={10}>
              <Grid item justify="space-between">
                <Typography variant="h6" color="inherit">
                  Node Blog
                </Typography>
              </Grid>

              <Grid item direction="row" justify="flex-end" alignItems="center">
                <ButtonsContainer>
                  <Button color="inherit">About</Button>
                  <Button color="inherit">Blog</Button>
                  <Button color="inherit">Contact</Button>
                </ButtonsContainer>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
