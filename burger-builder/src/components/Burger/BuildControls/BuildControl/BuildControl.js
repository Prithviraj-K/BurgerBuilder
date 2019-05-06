import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.BuildControl.Less} onClick ={props.removed}>Less</button>
        <button className={classes.BuildControl.More} onClick ={props.added}>More</button>
    </div>
);

export default buildControl;
