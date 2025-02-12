import React, {useContext} from 'react'
import NoteContext from '../contexts/notes/noteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'

const Notes = () => {

    let {notes, addNote, deleteNote, editNote} = useContext(NoteContext)
    return (
        <>
            <AddNote />
            <div className='row my-3'>
                <h2>Your Notes</h2>
                {notes.map((note, key) => {
                    return <NoteItem note={note} key={key}/>
                })}
            </div>
        </>
    )
}

export default Notes
