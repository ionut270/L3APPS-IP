import React, { Component } from 'react';
import './App.css';
import SideNav from './components/SideNav';
import MainContent from './components/MainContent';
import { Grid } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
  
       <Grid columns={2} celled>
         <Grid.Row>
            <Grid.Column width="4">
              <SideNav></SideNav>
            </Grid.Column>
            <Grid.Column width="12">
              <MainContent></MainContent>
            </Grid.Column>
         </Grid.Row>
        </Grid>
    );
  }
}

export default App;
