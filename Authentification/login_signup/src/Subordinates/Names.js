import React from "react";
import {
  Container,
  Header,
  Divider,
  Segment,
  Progress,
  Responsive,
  Label,
  Card
} from "semantic-ui-react";
                                                                //Pentru testare si incercari
class Names extends React.Component {
  state = {
    loading: true,
    nume: null,
    prenume: null,
    email: null,
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
    
     if(!this.state.jobs.length){
        return <div>no jobs</div>;
    }
    
    return (
       
        <div>
            {this.state.jobs.map(title =>(
                <div key={title.ID}>
                <div>{title.job}</div>
                </div>
            ))}
        
        </div>
      
    );
    
  }
}

export default Names;