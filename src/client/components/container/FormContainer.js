import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  
  render() {
    return (
      <div>
        <Input/>
      </div>
    );
  }
}

export default FormContainer;
