/* import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';

class Meniu extends Component {

  render() {

    let linksMarkup = this.props.links.map((link, index) => {
        let linkMarkup = link.active ? (
            <a className="menu__link menu__link--active" href={link.link}>{link.label}</a>
        ) : (
            <a className="menu__link" href={link.link}>{link.label}</a>
        );

        return (
            <li key={index} Button variant="secondary">
                {linkMarkup}
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">Left</Button>
              <Button variant="secondary">Middle</Button>
              <Button variant="secondary">Right</Button>
            </ButtonGroup>;
            </li>
        );
    });

    return (
        <nav className="menu">
            <h1 style={{
            backgroundImage: 'url(' + this.props.logo + ')'
            }} className="menu__logo">New Trello.</h1>

            <div className="menu__right">
                <ul className="menu__list">
                    {linksMarkup}
                </ul>
            </div>
        </nav>
    );
  }
}

export default Meniu;
 */