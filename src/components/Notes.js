import React, {useContext} from 'react'
import NoteContext from '../contexts/notes/noteContext'
import NoteItem from './NoteItem'

const Notes = () => {

    let {notes, setNotes} = useContext(NoteContext)  
    return (
        <div className='row my-3'>
            <h2>Your Notes</h2>
            {notes.map((note) => {
                return <NoteItem note={note}/>
            })}
        </div>
    )
}

export default Notes
