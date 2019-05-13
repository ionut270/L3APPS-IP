import React , { Component } from 'react';
import { Grid, Container, Segment, Button, Divider, Modal, Header, Image } from 'semantic-ui-react';
import ReadCrud from './ReadCrud';

class ProfileInfo extends Component{
    state = { open: false }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    render(){
        const { open, dimmer } = this.state

        return(
            <Container>
                <Button color="yellow">CREATE</Button>
                <Divider></Divider>
                <Grid columns='equal' >
                    <Grid.Row stretched>
                        <Grid.Column width={5}>
                        <ReadCrud>
                        </ReadCrud>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <ReadCrud>
                        </ReadCrud>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <ReadCrud>
                        </ReadCrud>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default ProfileInfo;