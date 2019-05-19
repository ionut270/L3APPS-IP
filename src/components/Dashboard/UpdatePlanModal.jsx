import React, { Component } from "react";
import { Button, Header,Modal } from 'semantic-ui-react'

class UpdatePlanModal extends Component {
    state = { open: false }
  
    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
  
    render() {
      const { open, dimmer } = this.state
  
      return (
        <div>
          <Button size="mini" color="yellow" onClick={this.show(true)}>UPDATE</Button>
          <Modal dimmer={dimmer} open={open} onClose={this.close}>
            <Modal.Header>Update Plan</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <p>Description</p>
                <p>Is it okay to use this photo?</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color='black' onClick={this.close}>
                Nope
              </Button>
              <Button
                positive
                icon='checkmark'
                labelPosition='right'
                content="Yep, that's me"
                onClick={this.close}
              />
            </Modal.Actions>
          </Modal>

        </div>
      )
    }
  }
  
  export default UpdatePlanModal