// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component {

  handleFocus = () => {
    console.log('Good!');
  }



  render() {
    return (
      <button onClick={this.handleFocus} ></button>
    );
  }
}
