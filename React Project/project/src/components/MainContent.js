import React , { Component } from 'react';
import '../components/MainContent.css';
import { Grid, Menu ,Segment, Container } from 'semantic-ui-react';

class MainContent extends Component{

    state = { activeItem: 'profile informations' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
    const { activeItem } = this.state
    return (
    <Grid>
        <Grid.Column width={4}>
          <Menu className="menu" fluid vertical tabular >

            <Menu.Item name='profile informations' active={activeItem === 'profile informations'} onClick={this.handleItemClick}  />
            <Menu.Item name='edit informations' active={activeItem === 'edit informations'} onClick={this.handleItemClick}/>
            <Menu.Item name='tasks assigned' active={activeItem === 'tasks assigned'} onClick={this.handleItemClick}/>

          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Container className="content">
          text
          </Container>
        </Grid.Column>
      </Grid>
    );
    }
}

export default MainContent;