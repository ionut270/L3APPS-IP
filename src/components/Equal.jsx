import React from 'react';
import './Equal.css';

export const Equal = (props) => (
    <div className={`equal-wrapper`} onClick={() => props.handleClick(props.children)}> {props.children} </div>
);