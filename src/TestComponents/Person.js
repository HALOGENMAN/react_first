import React from 'react';
import './Person.css'
const person = (props) =>{
    return (<div className="name">
        <h1> this is my name : {props.name}</h1> 
        <input type="text" onChange={props.click} name="shayak" value={props.name}/>
        </div>
    );
}

export default person;