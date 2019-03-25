import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle= () =>{
      return{
          background: '#eee',
          padding: '10px',
          borderBottom:'1px #ccc dotted',
          textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }
    }

   markComplete = (e) => {
       console.log(this.props)
   }

  render() {
      const { id, title } = this.props.todo;
    return (
        <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind (this, id)} /> {' '}
            { title }
            <button onClick={this.props.delTodo.bind(this, id)} style={butnStyle}>X</button> 
        </p>
      </div>
    )
  }
}


Todoitem.propTypes={
    todos: PropTypes.object.isRequired
}

const butnStyle ={
    background: '#490A0A',
    color: '#eee',
    border: '#00000',
    padding: '10 px 9px',
    cursor: 'pointer',
    float: 'right'
}

export default Todoitem
