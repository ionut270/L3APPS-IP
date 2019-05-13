import React , { Component } from 'react';
import { Grid, Container, Segment, Button, Divider, Modal, Header,Label, Progress } from 'semantic-ui-react';

import DeleteCrud from './DeleteCrud';
class ReadCrud extends Component{
    state = { open: false }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    state = { percent: 33 }

    increment = () =>
      this.setState(prevState => ({
        percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
      }))
    render(){
        const { open, dimmer } = this.state


        return(
            <div>


            <div>

            <Modal dimmer={dimmer} open={open} onClose={this.close} >
                <Modal.Header>Informations</Modal.Header>
            <Modal.Description>
                <Header>Title</Header>
                <p>Description</p>
                <p>Members</p>
                <div>
                    <Label as='a' image>
                    <img src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                                    Joe
                    </Label>
                    <Label as='a' image>
                    <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                    Elliot
                    </Label>
                    <Label as='a' image>
                    <img src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
                                    Stevie
                    </Label>
                </div>
                <p>Due Date: </p>
                <p>Progress:</p>
                <div>
                    <Progress percent={this.state.percent} indicating />
                    <Button onClick={this.increment}>Increment</Button>
                </div>
                <Divider></Divider>
                <Button color = "yellow">UPDATE</Button>
            </Modal.Description>

            <Modal.Actions>
            <Button
            positive
            icon='checkmark'
            labelPosition='right'
            content="OK"
            onClick={this.close}
            />
            </Modal.Actions>
            </Modal>
        </div>

        <Button onClick={this.show('blurring')} >
        <Segment>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <Button.Group>
                                    <DeleteCrud></DeleteCrud>

                                </Button.Group>
                            </Segment></Button>
</div>
        );
    }
}

export default ReadCrud;