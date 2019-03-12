import React from 'react'
import { Image, List } from 'semantic-ui-react'

const ListExampleAnimated = () => (
  <div className='Footer'>
  <div className='Footer-List'>
    <List horizontal animated>
    <List.Item>
      <Image avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD1dALlQFBFXQe03nTZJLRqQsM5UE8zQX89ZjSPGLrDT5A-PDkFA' />
      <List.Content>
        <List.Header><a href='https://youtube.com'>FaceBook</a></List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='http://www.logospng.com/images/0/instagram-logo-camera-mobile-icon-84.png' />
      <List.Content>
        <List.Header><a href='https://youtube.com'>Instagram</a></List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCppRQ_CtTi_FjqTgCeaG531gUhN_oOK9uYI7bvFnY6R2-AGJwvg' />
      <List.Content>
        <List.Header><a href='https://youtube.com'>Youtube</a></List.Header>
      </List.Content>
    </List.Item>
  </List>
  <p className="Footer-Text"> Check Us Out on Social Media </p>
</div>
</div>
)

export default ListExampleAnimated