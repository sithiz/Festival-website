import React from 'react'
import { Button,  Icon } from 'semantic-ui-react'


const ButtonSpawn = (props) =>(
      <div className="navagation">
        <Button animated
          className="Nav-Button"
          onClick={props.isHomeClick}
        >
          <Button.Content visible>
            HOME
            </Button.Content>
            <Button.Content hidden>
              <Icon name='home' />
            </Button.Content>
        </Button>
        <Button animated
          className="Nav-Button"
          onClick={props.isLineUpClick}
        > 
        <Button.Content visible>
            LINE UP
            </Button.Content>
            <Button.Content hidden>
              <Icon name='tint' />
            </Button.Content>
        </Button>
        <Button animated
          className="Nav-Button"
          onClick={props.isAboutClick}
        > 
        <Button.Content visible>
          GETTING HERE
            </Button.Content>
            <Button.Content hidden>
              <Icon name='dna' />
            </Button.Content>
        </Button>
        <Button animated
          className="Nav-Button"
          onClick={props.isInfoClick}
        > 
        <Button.Content visible>
          TICKETS
            </Button.Content>
            <Button.Content hidden>
              <Icon name='plane' />
            </Button.Content>
        </Button>
      </div>
  )

export default ButtonSpawn
        






