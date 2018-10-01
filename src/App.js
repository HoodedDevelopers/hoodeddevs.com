import React, { Component } from 'react';
import styled from 'styled-components';
import './styles/App.css';
import TechCard from './components/TechCard.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

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
      <AppBody>
        <TechCard technology="react"/>
        <TechCard technology="awscloud"/>
      </AppBody>
    );
  }
}

// styles
const AppBody = styled.section`
  padding: 15px;
`;

export default App;
