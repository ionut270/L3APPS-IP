import React, { Component } from "react";
import { Button, Header,Modal, Icon, Form} from 'semantic-ui-react'

class UpdateTaskModal extends Component {

  state = { taskName: '', email: '', submittedName: '', submittedEmail: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { taskName, email } = this.state

    this.setState({ submittedName: taskName, submittedEmail: email })


  }
    render() {

      const { taskName, email, submittedName, submittedEmail } = this.state


      return (
        <div>
<Modal trigger={<Button color="yellow">UPDATE</Button>} closeIcon>
    <Header icon='archive' content='Update task' />
    <Modal.Content>
    <Form onSubmit={this.handleSubmit}>
          <Form.Input label="Task name" placeholder='Edit task name' name='taskName' value={taskName} onChange={this.handleChange} />   
          <Form.Input  label='Project' readOnly >Project name</Form.Input>

          <Form.Group unstackable widths={2} label="Due date">
            
            <Form.Input
              placeholder=''
              name='email'
              value={email}
              onChange={this.handleChange}
            />

          </Form.Group>
          
          <Form.Button color='green'content="Submit"/>
        </Form>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ taskName, email }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName, submittedEmail }, null, 2)}</pre>
    </Modal.Content>
    <Modal.Actions>
    

    </Modal.Actions>
  </Modal>

        </div>
      )
    }
  }
  
  export default UpdateTaskModal