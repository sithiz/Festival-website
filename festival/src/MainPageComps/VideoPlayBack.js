import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
export default class App extends Component {
 

  render () {
    return (

    <div className="Play-Back">
	    <ReactPlayer 
	    	url="https://www.youtube.com/watch?v=xaOPY2k9ISQ" 
	    	playing 
	    	loop
	    />
 	</div>
 	)
  }

}