// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component {

  newArray = (event) => {
     let array=[event.clientX,event.clientY];
  }



  render() {
    return (
      <button onClick={this.newArray} ></button>
    );
  }
}
