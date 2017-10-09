import React from 'react';
import { Jumbotron } from 'react-bootstrap';


class Header extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {value: 'Sup?'};

  }

 

  render() {
    return (
      <Jumbotron className="jumbotron">
    <h1>{this.state.value}</h1>
  </Jumbotron>
    );
  }
}

	export default Header;