import React, {useContext} from 'react'
import NoteContext from '../contexts/notes/noteContext'


const About = () => {

  const {user} = useContext(NoteContext)

  return (
    <div>
      <p>Username is: {user}</p>
    </div>
  )
}

export default About