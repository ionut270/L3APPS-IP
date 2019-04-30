import React , { Component } from 'react';
import '../components/SideNav.css';
import { Menu } from 'semantic-ui-react';
class SideNav extends Component{
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
    const { activeItem } = this.state

    return (
    <div className="SideNav">
    <h1>SideNav</h1>
    <Menu pointing secondary vertical>
        <Menu.Item name='Profile informations' active={activeItem === 'profile'} onClick={this.handleItemClick} />
        <Menu.Item
          name='Edit information'
          active={activeItem === 'edit'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Tasks asiggned'
          active={activeItem === 'tasks'}
          onClick={this.handleItemClick}
        />
      </Menu>

    </div>
    );
    }
}

export default SideNav;