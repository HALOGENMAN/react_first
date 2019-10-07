import React from "react";
import "./Person.css"

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>i am {props.name} and iam {props.age} years old</p>
            <p>{props.children}</p>
            <input  type="text" onChange={props.click1} value = {props.name}/>
        </div>
    )
};

export default person;