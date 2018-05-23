import React, { Component } from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}> Name: {props.name} Age: {props.age} </p>
      <p> {props.children} </p>
      <input type='text' onChange={props.nameChanged} value={props.name}/>
    </div>
  );
};

export default person;
