import React , { Component } from 'react';
import { Grid, Container, Segment, Button, Divider, Modal, Header, ButtonGroup } from 'semantic-ui-react';

class DeleteCrud extends Component{
    state = { open: false }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
    render(){
        const { open, dimmer } = this.state
        return(
            <div>


            <div>

            <Modal dimmer={dimmer} open={open} onClose={this.close}>
                <Modal.Header>DELETE</Modal.Header>
                <Modal.Content image>
            <Modal.Description>
                <Header>Title</Header>
                <p>Are you sure?</p>
                <ButtonGroup>

                </ButtonGroup>
            </Modal.Description>
                </Modal.Content>
            <Modal.Actions>
            <Button color="black"
            >No</Button>
                    <Button positive
                    icon='checkmark'
                    labelPosition='right'
                    content="Yes"
                    onClick={this.close}/>
            </Modal.Actions>
            </Modal>
        </div>

        <Button onClick={this.show('blurring')} color="black">
        DELETE
        </Button>
        </div>
        );
    }
}

export default DeleteCrud;