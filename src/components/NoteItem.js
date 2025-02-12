import React, {useContext} from 'react'
import NoteContext from '../contexts/notes/noteContext'

const NoteItem = (props) => {
    const {deleteNote} = useContext(NoteContext)
    const {note} = props
    const handleDelete = () => {
        deleteNote(note._id)
    }

    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash mx-2" onClick={handleDelete}></i>
                    <i className="fa-solid fa-pen mx-2"></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
