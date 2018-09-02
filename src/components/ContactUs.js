import React, { Component } from 'react';

class ContactUs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <div className="contact-us">
          <h1 className="contact-us-title">CONTACT US</h1>
          <div className="contact-us-content">
            We are dedicated to developing the best software/web solution to a problem youself or your buisness may be facing. <br/>
            If you are in need of a solution to your problem, please contact us at:
          </div>
          <div className="contact-us-details">
            <div className="contact-item contact-email"><span>EMAIL:</span>hoodeddevs@hoodeddevs.com</div>
            <div className="contact-item contact-phone"><span>PHONE:</span>0447280697</div>
            <div className="contact-item contact-insta"><span>INSTAGRAM:</span>www.instagram.com/hoodeddevs</div>
            <div className="contact-item contact-fb"><span>FACEBOOK:</span>www.facebook.com/hoodeddevs</div>
            <div className="contact-item contact-twitter"><span>TWITTER:</span>@hoodeddevs</div>
          </div>

        </div>
      </div>
    );
  }
}

export default ContactUs;