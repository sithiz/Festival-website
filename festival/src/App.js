import React, { Component } from 'react';
import NavBar from './Nav/NavBar'
import PlayBack from './MainPageComps/VideoPlayBack'
import About from './MainPageComps/About'
import Flyer from './MainPageComps/Flyer-LineUp'
import Banner from './MainPageComps/Banner'
import './App.css';

class App extends Component {

    state = {
      isHome : false,
      isAbout: false,
      isLineUp : false
    }
  //* Need a Nav bar  and landing page





  //***Methods for Navagation bar

  isHomeClick = () => {
    this.setState({
      isHome : true,
      isAbout : false,
      isLineUp : false

    })

  }
  isAbout = () => {
    this.setState({
      isHome : false, 
      isAbout : true,
      isLineUp : false
    })
  }
  isLineUp = () => {
    this.setState({
      isHome : false,
      isAbout : false,
      isLineUp : true
      
    })
  }

  render() {
    return (
      <div className="Main-Container" >
        <Banner />
        <NavBar />
        <PlayBack />
        <About />
        <Flyer />

      </div>


    );
  }
}

export default App;
