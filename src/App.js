import React, { Component } from 'react';
import './styles/App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/fontawesome-free-brands';

library.add(faStroopwafel);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainarea: 'HOME'
    }

    this.handler = this.handler.bind(this);
    this.sendhome = this.sendhome.bind(this);
  }

  componentDidMount() {
    var hamburger = document.querySelector('.hamburger');
    var megamenu = document.querySelector('.mega-menu');
    var flhamburger = document.querySelector('.flhamburger');
    var floatingHeader = document.querySelector('.floating-header');
    var fllogo = document.querySelector('.floating-header-logo');
    var body = document.querySelector('body');

    hamburger.addEventListener("click", function(){
      hamburger.classList.toggle('active');
      megamenu.classList.toggle('active');
      body.classList.toggle('active');
    });

    flhamburger.addEventListener("click", function(){
      flhamburger.classList.toggle('active');
      megamenu.classList.toggle('active');
      fllogo.classList.toggle('active');
      body.classList.toggle('active');
    });

    window.onscroll = function() {myFunction()};
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > 300) {
        floatingHeader.classList.add("sticky");
      } else {
        floatingHeader.classList.remove("sticky");
      }
    }

    // mega menu state switch
    var megaitems = document.querySelectorAll('.mega-item');
    megaitems.forEach((itm)=>{
      itm.addEventListener('click', ()=>{
        this.setState({mainarea: itm.innerHTML});
        hamburger.classList.toggle('active');
        megamenu.classList.toggle('active');
        body.classList.toggle('active');

        if(flhamburger.classList.contains('active')){
          flhamburger.classList.toggle('active');
          fllogo.classList.toggle('active');
        }
      });
    });

    document.querySelector('.floating-header-logo').addEventListener('click', ()=>{
      this.setState({mainarea: "HOME"});
    });

    document.querySelector('.footer-logo').addEventListener('click', ()=>{
      this.setState({mainarea: "HOME"});
    });

    this.headerSize();
  }

  componentDidUpdate() {
    this.headerSize();
  }

  headerSize(){
    if(this.state.mainarea != "HOME"){
      document.querySelector('header').style.height = "75vh";
      document.querySelector('.banner-overlay').style.height = "75vh";
    }
    else {
      document.querySelector('header').style.height = "100vh";
      document.querySelector('.banner-overlay').style.height = "100vh";
    }
  }

  handler(e) {
    e.preventDefault()
    this.setState({
      mainarea: 'CONTACT US'
    });
  }

  sendhome(){
    this.setState({mainarea: "HOME"});
  }

  renderMain() {
    if(this.state.mainarea == 'HOME'){
      return(
        <Home handler={this.handler}/>
      );
    }
    else if (this.state.mainarea == 'ABOUT US'){
      return(
        <AboutUs/>
      );
    }
    else if (this.state.mainarea == 'CONTACT US'){
      return(
        <ContactUs/>
      );
    }
    else {
      return(
        <div className="error">Sometghin happened</div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="banner-overlay"></div>
          <div className="floating-header">
            <div className="floating-header-logo">HOODEDDEVS</div>
            <div className="hamburger">
              <span className="ham-1"></span>
              <span className="ham-2"></span>
              <span className="ham-3"></span>
            </div>
          </div>
          <div className="flhamburger">
            <span className="ham-1"></span>
            <span className="ham-2"></span>
            <span className="ham-3"></span>
          </div>
          <div className="header-logo">HOODEDDEVS</div>
        </header>
        {this.renderMain()}
        <footer>
          <div className="footer-logo">HOODEDDEVS</div>
          <div className="footer-socials">
            <a href="https://github.com/HoodedDevelopers" target="_blank"><div className="footer-social-icon footer-github"></div></a>
            <a href="https://www.instagram.com/hoodeddevs/" target="_blank"><div className="footer-social-icon footer-instagram"></div></a>
            <a href="https://www.facebook.com/liam.storkey.9" target="_blank"><div className="footer-social-icon footer-facebook"></div></a>
            <a href="https://www.twitter.com" target="_blank"><div className="footer-social-icon footer-twitter"></div></a>
          </div>
        </footer>

        <div className="mega-menu">
          <div className="mega-item">HOME</div>
          {/* <div className="mega-item">ABOUT US</div> */}
          <div className="mega-item">CONTACT US</div>
        </div>
      </div>
    );
  }
}

export default App;
