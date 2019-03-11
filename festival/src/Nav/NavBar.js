import React from 'react'
import { Button } from 'semantic-ui-react'


const ButtonSpawn = (props) =>(
      <div className="navagation">
        <Button 
          className="Nav-Button"
          onClick={props.isHomeClick}
        > 
          HOME
        </Button>
        <Button 
          className="Nav-Button"
          onClick={props.isLineUpClick}
        > 
          LINE UP
        </Button>
        <Button
          className="Nav-Button"
          onClick={props.isAboutClick}
        > 
          FESTIVAL ABOUT
        </Button>
        <Button
          className="Nav-Button"
        > 
          GETTING HERE
        </Button>
      </div>
  )

export default ButtonSpawn
        






