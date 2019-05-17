import _ from 'lodash';
import React , { Component } from 'react';
import { Grid, Container, Segment, Button, Divider, Modal, Header,Label, Form, TextArea, Transition, List, Image } from 'semantic-ui-react';

const users = ['ade', 'chris', 'christian', 'daniel', 'elliot', 'helen']
class CreateCrud extends Component{
    state = { open: false }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    state = { percent: 33 }

    increment = () =>
      this.setState(prevState => ({
        percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
      }))

    state2 = { items: users.slice(0, 3) }

      handleAdd = () => this.setState(prevState => ({ items: users.slice(0, prevState.items.length + 1) }))
    
      handleRemove = () => this.setState(prevState => ({ items: prevState.items.slice(0, -1) }))
    render(){
        const { open, dimmer } = this.state

        const { items } = this.state2

        return(
            <div>


            <div>

            <Modal dimmer={dimmer} open={open} onClose={this.close} >
                <Modal.Header>Informations</Modal.Header>
            <Modal.Description>
                <Segment color="yellow">
                <Header >Title</Header>
                <Form>
                    <TextArea placeholder='Title' />
                </Form>
                <p>Description</p>
                <Form>
                    <TextArea placeholder='Tell us more' />
                </Form>

                <p>Masters</p>
                <Label as='a' image>
                    <img src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                                    Joe
                    </Label>
                <p>Members</p>
                <div>
                <Button.Group>
                <Button disabled={items.length === 0} icon='minus' onClick={this.handleRemove} />
                <Button disabled={items.length === users.length} icon='plus' onClick={this.handleAdd} />
                </Button.Group>
                <Transition.Group as={List} duration={200} divided size='huge' verticalAlign='middle'>
                 {items.map(item => (
                <List.Item key={item}>
                <Image avatar src={`/images/avatar/small/${item}.jpg`} />
                <List.Content header={_.startCase(item)} />
                </List.Item>
                 ))}
                </Transition.Group>


                </div>
                <Divider></Divider>
                </Segment>
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

        <Button onClick={this.show('blurring')} color="yellow"  >
    
                                <p>CREATE</p>
                                
                             
                            </Button>
                           
</div>
        );
    }
}

export default CreateCrud;