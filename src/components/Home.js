import React, { Component } from 'react';
import '../styles/App.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <div className="hd-intro">
          HoodedDevs is a Software and Cloud Development company, dedicated to deliverying a tailored solution to any problem. A software and cloud solutions span over a range of technologies from ReactJS, SilverStripe CMS, Electron, Amazon Web Services and many more.
        </div>
        <div className="what-we-do">
          <div className="wwd-title"><h1>WHAT WE DO</h1></div>
          <div className="wwd-container">
            <div className="wwd-item">
              <div className="wwd-logo wwd-logo-react"></div>
              <div className="wwd-content">We have developers who are experts developing both native and web applications with the ReactJS framework built by facebook.com. Our developers are able to leverage the Component-based architecture of ReactJS to build beautiful interactive native and web applications that will bring you or your buisness into the 21st century.</div>
              {/* <div className="wwd-btn btn"><div className="btn-text" onClick={this.props.handler}> READ MORE </div></div> */}
            </div>
            <div className="wwd-item">
              <div className="wwd-logo wwd-logo-ss"></div>
              <div className="wwd-content">SilverStripe is a intuitive content management system build in PHP, which is loved by hundereds of thousands of content managers and developers alike. Our hoodedDevelopers will develop a stunning fully custom website, with a custom silverstripe cms system from start to finish. This CMS allows the customer to take full control of the content published on their website in minutes. </div>
              {/* <div className="wwd-btn btn"><div className="btn-text" onClick={this.props.handler}> READ MORE </div></div> */}
            </div>
            <div className="wwd-item">
              <div className="wwd-logo wwd-logo-awscloud"></div>
              <div className="wwd-content">Amazon Web Services is a worlds most trusted public cloud platform. Providing the most reliable, avaliable and durable platform to host your infrastructure. Here at HoodedDevs we have AWS certified Solutions Architects who can design and develop the infracture for your buisness. HoodedDevs also provide DevOps services to develop automated continuous delivery piplines.</div>
              {/* <div className="wwd-btn btn"><div className="btn-text" onClick={this.props.handler}> READ MORE </div></div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
