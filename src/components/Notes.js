import React, {useContext, useEffect, useRef, useState} from 'react'
import NoteContext from '../contexts/notes/noteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'

const Notes = () => {

    let {notes, fetchAllNotes, editNote} = useContext(NoteContext)
    useEffect(() => {
      fetchAllNotes()
      // eslint-disable-next-line
    }, [])

    const [note, setNote] = useState({title: "", description: "", tag: "Default"})
    const ref = useRef()
    const refClose = useRef()

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    const showUpdateModal = (currentNote) => {
        ref.current.click()
        setNote(currentNote)
    }
    
    const handleClick = () => {
        editNote(note._id, note.title, note.description, note.tag)
        refClose.current.click()
    }
    
    return (
        <>
            <AddNote />
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" value={note.title} id="title" name='title' aria-describedby="emailHelp" onChange={onChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" value={note.description} id="description" name='description' onChange={onChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tag" className="form-label">Tag</label>
                            <input type="text" className="form-control" value={note.tag} id="description" name='tag' onChange={onChange} />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button disabled={note.title.length < 5 || note.description.length < 5} type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                </div>
                </div>
            </div>
            </div>
            <div className='row my-3'>
                <h2>Your Notes</h2>
                <div className="container mx-2">
                    {notes.length===0 && "No Notes to display"}
                </div>
                {notes.map((note, key) => {
                    return <NoteItem note={note} key={key} showUpdateModal={showUpdateModal}/>
                })}
            </div>
        </>
    )
}

export default Notes
