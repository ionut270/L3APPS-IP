import React , { Component } from 'react';
import { Grid, Container, Segment, Button, Divider, Modal, Header, Image } from 'semantic-ui-react';
import ReadCrud from './ReadCrud';
import './Crud.css';
class ProfileInfo extends Component{
    state = { open: false }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    render(){
        const { open, dimmer } = this.state

        return(

            <div className="container">
                <Button color="yellow">CREATE</Button>
                <Divider></Divider>
                <div className="cardsContainer">
                <Grid columns='equal' >
                <Grid.Column width={3}>
                    <Segment color="red" >
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
                        </Segment>
                    </Grid.Column>

                </Grid>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;