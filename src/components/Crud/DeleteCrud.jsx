import React , { Component } from 'react';
import { Grid, Container, Segment, Button, Divider, Modal, Header, ButtonGroup } from 'semantic-ui-react';

class DeleteCrud extends Component{
    state = { open: false }

    show1 = dimmer1 => () => this.setState({ dimmer1, open: true })
    close = () => this.setState({ open: false })
    render(){
        const { open, dimmer1 } = this.state
        return(
            <div>


            <div>

            <Modal dimmer={dimmer1} open={open} onClose={this.close}>
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

        <Button onClick={this.show1('blurring')} color="black" size="tiny">
        DELETE
        </Button>
        </div>
        );
    }
}

export default DeleteCrud;