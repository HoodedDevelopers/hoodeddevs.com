import React, { Component } from 'react';
import styled from 'styled-components';




class TechCard extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    var assortedComponents = require("../images/logos/"+this.props.technology+".svg");
    return (
      <Card>
        <img src={assortedComponents} alt={this.props.technology}/>
        <div class="tech-card-content">
          <h1>{this.props.technology}</h1>
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </Card>
    );
  }
}

const Card = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: stretch;
  align-items: flex-start;
  width: 365px;
  height: 365px;
  padding: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  transition: all linear 0.25s;
  text-align: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    transition: all linear 0.25s;
  }

  h1 {
    font-size: 22px;
  }

  .tech-card-content {
    position: relative;
  }

  &:hover {
    img {
      width: 35%;
      height: 35%;
      transition: all linear 0.25s;
    }
  }
`;

const TechCardContent = styled.section`
  h1 {
    display: none;
  }

  div {
    display: none;
  }
`;

export default TechCard;
