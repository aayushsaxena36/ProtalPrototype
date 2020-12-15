import React from 'react';
import classes from './Content.module.css' ;

const Content = (props) => {
    return (
        <div>
            <input type="text" className={classes.input} />
            <label>{props.cred}</label>
        </div>
    )
};

export default Content;