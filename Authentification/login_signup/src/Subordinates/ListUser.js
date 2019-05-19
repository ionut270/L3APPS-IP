import React from "react";
import {
  Container,
  Header,
  Divider,
  Segment,
  Progress,
  Responsive,
  Label,
  Card, Icon, Modal, List, Button, Image
} from "semantic-ui-react";

class ListUser extends React.Component {
  state = {
    nume: null,
    job: null,
    jobs: []
  };

  async componentDidMount() {
    const url = "http://localhost:8081/viewUnderlings/2";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({jobs:data[1].underlings});
    console.log(data[1]);
  }
  render() {

    return (
                            //maparea
        <div>
      
      <List  animated verticalAlign='middle'>
          
      {this.state.jobs.map(title =>(
      <div key={title.ID}>

      <List.Item>
      <Image avatar src='http://chittagongit.com/download/338038' />
      <List.Content>
        <List.Header as='a'>John Miller</List.Header>
        <List.Description>
            <p>Job <a>{title.job}</a></p>
        </List.Description>
      </List.Content>
    </List.Item>
    
    </div>
                
            ))}
        
    
                
   {/*  <List.Item>  
      <Image avatar src='http://chittagongit.com/download/338038' /> 
      <List.Content>
        <List.Header as='a'>Veronika Ossi</List.Header>
        <List.Description>No task assigned yet</List.Description>
      </List.Content>
    </List.Item> */}

  </List>
    </div>
    );
  }
}

export default ListUser;