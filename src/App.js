import React, { Component } from 'react';
import './styles/App.css';

library.add(faStroopwafel);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainarea: 'HOME'
    }

    this.handler = this.handler.bind(this);
  }

  componentDidMount() {
  }

  handler(e) {
    e.preventDefault()
    this.setState({
      mainarea: 'CONTACT US'
    });
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
