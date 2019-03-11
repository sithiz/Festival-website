import React, { Component } from 'react';
import NavBar from './Nav/NavBar'
import PlayBack from './MainPageComps/VideoPlayBack'
import About from './MainPageComps/About'
import Flyer from './MainPageComps/Flyer-LineUp'
import Banner from './MainPageComps/Banner'
import './App.css';

class App extends Component {

    state = {
      isHome : true,
      isAbout: false,
      isLineUp : false,
      isInfo : false,
    }
  //* Need a Nav bar  and landing page





  //***Methods for Navagation bar

  isHomeClick = () => {
    this.setState({
      isHome : true,
      isAbout : false,
      isLineUp : false,
      isInfo : false
    })
  }
  isAboutClick = () => {
    this.setState({
      isHome : false, 
      isAbout : true,
      isLineUp : false,
      isInfo : false
    })
  }
  isLineUpClick = () => {
    this.setState({
      isHome : false,
      isAbout : false,
      isLineUp : true,
      isInfo : false
    })
  }
  isInfoClick = () => {
    this.setState({
      isHome : false,
      isAbout : false,
      isLineUp : false,
      isInfo : true
    })
  }

  render() {
    let button = <div></div>
        if(this.state.isHome){
          button = <PlayBack />
        } else if(this.state.isAbout){
          button = <About />
        } else if(this.state.isLineUp){
          button = <Flyer />
        }
    
    return (
      <div className="Main-Container" >
        <Banner />
        <NavBar 
          isHomeClick={this.isHomeClick} 
          isAboutClick={this.isAboutClick} 
          isLineUpClick={this.isLineUpClick} 
          isInfoClick={this.isInfoClick}
        />
        {button}
      </div>


    );
  }
}

export default App;
