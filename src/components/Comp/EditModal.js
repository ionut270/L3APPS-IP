import React, { Component } from 'react';
import { Button , Modal , Form , Label , Col ,Input , FormGroup  , ModalHeader , ModalFooter , ModalBody  } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



class EditModal extends Component {
  constructor(props) {
  super(props);
  this.state = {
    name: '',
    category: '',
    departament: '',
    description: '',
    priority: '',
    deadline: ''
  }
}



state = {
  visible: true,
  modalIsOpen: false
}

toggleModal(){
  this.setState(
    { modalIsOpen : ! this.state.modalIsOpen }
  );
}

changeHandler = e => {
  this.setState({[e.target.name]: e.target.value})
}



submitHandler = e =>{
  e.preventDefault()

  const create = {
      name : this.state.name,
      category : this.state.category,
      departament : this.state.departament,
      description : this.state.description,
      priority : this.state.priority,
      deadline : this.state.deadline

  }


  axios.post('https://jsonplaceholder.typicode.com/posts',{create})
  .then(response => {
    console.log(response)
  })
  .catch(error=> {
    console.log(error)
  })

}
  render() {
    const { name, category, departament, description, priority,deadline} = this.state
    return (
      <div className="EditModal">
        <Button color="primary" onClick={this.toggleModal.bind(this)}>Edit</Button>

        <Modal size='lg' isOpen={this.state.modalIsOpen}   >
          <ModalHeader toggle={this.toggleModal.bind(this)} >Create Plan</ModalHeader>
          <ModalBody>
              <Form onSubmit={this.submitHandler}>
                <FormGroup row>
                  <Label sm={2}>Name</Label>
                  <Col sm={10}>
                    <Input name="name" value={name} onChange={this.changeHandler}/>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label sm={2}>Category</Label>
                  <Col sm={10}>
                    <Input name="category" value={category} onChange={this.changeHandler}/>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label sm={2}>Departament</Label>
                  <Col sm={10}>
                    <Input name="departament" value={departament} onChange={this.changeHandler}/>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label sm={2}>Description</Label>
                  <Col sm={10}>
                    <textarea  className="form-control" name="description" value={description} onChange={this.changeHandler}/>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label sm={2}>Priority</Label>
                  <Col sm={10}>
                    <select className="browser-default custom-select" name="priority" value={priority} onChange={this.changeHandler}>
                    <option>Choose your option</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                    </select>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label sm={2}>Deadline</Label>
                  <Col sm={10}>
                    <Input name="deadline" value={deadline} onChange={this.changeHandler}/>
                  </Col>
                </FormGroup>


              </Form>
          </ModalBody>
          <ModalFooter >
          <Form onSubmit={this.submitHandler}>
            <Button color="primary" type="submit" >Submit</Button>
          </Form>
            <Button color="secondary" onClick={this.toggleModal.bind(this)}>Cancel</Button>

          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditModal;
