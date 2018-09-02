import React, { Component } from 'react';
// import '../styles/App.css';

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <div className="aboutUs">
          <h1>WHO ARE WE?</h1>
          <div className="aboutUs-content">
            HoodedDevs is a group of developers who are dedicated to meeting any of your software needs. Our developers range accross many fields of expertise and will use this knowledge to take your buisness or project to the next level. Our HoodedDevs are able to provide a solutions to your problem in the form that best suits you. Weather that solution be delivered through a web application, native mobile app or desktop app. Our Developers are also equiped with the knowledge to enhance/optimise your cloud environments.
          </div>
          <div className="aboutUs-profiles">
              <div className="aboutUs-profile aboutUs-profile">
              <div className="aboutUs-profile-content">
                <h2 className="aboutUs-name">Aaron <div className="aboutUs-nickname">aka Pjak</div></h2>
                <h3 className="aboutUs-role">Senior Developer</h3>
                <div className="aboutUs-experience">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                <div className="aboutUs-socials">
                <div className="aboutUs-pic"><img src="https://media.licdn.com/dms/image/C5603AQFo1TqGKo4o1Q/profile-displayphoto-shrink_200_200/0?e=1540425600&v=beta&t=HOCCjEbHMPZ-aelbMLQA1el0rmu9iOzrHWgIxU7D1hw" alt=""/></div>
                  <div className="aboutUs-item aboutUs-email"><span>EMAIL:</span>aaron.pjak@hoodeddevs.com</div>
                  <div className="aboutUs-item aboutUs-phone"><span>PHONE:</span>TBHBTHBTHB</div>
                  <div className="aboutUs-item aboutUs-insta"><span>INSTAGRAM:</span>www.instagram.com/tbhtbtb</div>
                  <div className="aboutUs-item aboutUs-fb"><span>FACEBOOK:</span>www.facebook.com/tbhbthbt</div>
                  <div className="aboutUs-item aboutUs-twitter"><span>TWITTER:</span>@btjtbjbtjbt</div>
                </div>
              </div>
            </div>
            <div className="aboutUs-profile aboutUs-profile">
              <div className="aboutUs-profile-content">
                <h2 className="aboutUs-name">Liam <div className="aboutUs-nickname">aka Stash</div></h2>
                <h3 className="aboutUs-role">senior Developer</h3>
                <div className="aboutUs-experience">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                <div className="aboutUs-socials">
                  <div className="aboutUs-pic"></div>
                  <div className="aboutUs-item aboutUs-email"><span>EMAIL:</span>liam.storkey@hoodeddevs.com</div>
                  <div className="aboutUs-item aboutUs-phone"><span>PHONE:</span>0447280697</div>
                  <div className="aboutUs-item aboutUs-insta"><span>INSTAGRAM:</span>www.instagram.com/_storkey_</div>
                  <div className="aboutUs-item aboutUs-fb"><span>FACEBOOK:</span>https://www.facebook.com/liam.storkey.9</div>
                  <div className="aboutUs-item aboutUs-twitter"><span>TWITTER:</span>@stash40</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
