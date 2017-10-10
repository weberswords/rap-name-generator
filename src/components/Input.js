import React from 'react';
import {

	Form,
	FormGroup,
	FormControl,
	Button,
  InputGroup,
  ButtonToolbar,
  
} from 'react-bootstrap';
import { getName } from './getName';

class NameForm extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({value: getName()});
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2>What kind of MC are you?</h2> 
          <p>
          <input type="text" id="inputBox"/>
          </p>
        </label>
        <input type="submit" value="Submit" id="button"/>
        <h2 onSubmit={this.handleSubmit}> {this.state.value} </h2>
      </form>

    );
  }
}

	export default NameForm;