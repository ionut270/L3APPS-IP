import React , { Component } from 'react';
import { Grid, Container, Segment, Button, Divider, Modal, Header, Image } from 'semantic-ui-react';
import ReadCrud from './ReadCrud';
import CreateCrud from './CreateCrud';
import './Crud.css';
class ProfileInfo extends Component{
    state = { open: false }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    render(){
        const { open, dimmer } = this.state

        return(

            <div className="containerCrud">

                <Divider></Divider>
                <div className="cardsContainer">

                <Grid columns='equal' >
                <Segment color="red">
                <Grid.Column width={3}>

                        <Grid.Row >
                            <ReadCrud>
                            </ReadCrud>
                        </Grid.Row>

                        <Divider hidden></Divider>


                        <Grid.Row>
                            <ReadCrud>
                            </ReadCrud>
                        </Grid.Row>


                        <Divider hidden></Divider>


                        <Grid.Row>
                            <ReadCrud>
                            </ReadCrud>
                        </Grid.Row>

                        <Divider hidden></Divider>
                        <Grid.Row>
                       <CreateCrud></CreateCrud>
                       </Grid.Row>
                    </Grid.Column>
                    </Segment>
                    </Grid>

                </div>    

            </div>
        );
    }
}

export default ProfileInfo;