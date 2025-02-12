import React, {useState} from "react";
import NoteContext from "./noteContext";

const NoteContextProvider = ({children}) => {
        const initialNotes = [
            {
            "_id": "67a32bc4f0a70a67ba173609",
            "user": "67a21b0e5487c4dafe4501ee",
            "title": "React JS course UPDATED",
            "description": "Watch 4 videos of React JS course and understand them UPDATED",
            "tag": "Coding",
            "date": "2025-02-05T09:13:40.167Z",
            "__v": 0
            },
            {
            "_id": "67a32bcaf0a70a67ba17360c",
            "user": "67a21b0e5487c4dafe4501ee",
            "title": "React JS course",
            "description": "Watch 4 videos of React JS course and understand them",
            "tag": "Coding",
            "date": "2025-02-05T09:13:46.380Z",
            "__v": 0
            },
            {
            "_id": "67a32bcaf0a70a67ba17360d",
            "user": "67a21b0e5487c4dafe4501ee",
            "title": "React JS course",
            "description": "Watch 4 videos of React JS course and understand them",
            "tag": "Coding",
            "date": "2025-02-05T09:13:46.380Z",
            "__v": 0
            },
            {
            "_id": "67a32bcaf0a70a67ba17360n",
            "user": "67a21b0e5487c4dafe4501ee",
            "title": "React JS course",
            "description": "Watch 4 videos of React JS course and understand them",
            "tag": "Coding",
            "date": "2025-02-05T09:13:46.380Z",
            "__v": 0
            },
        ]

        const [notes, setNotes] = useState(initialNotes)

        // Add a Note
        const addNote = (title, description, tag) => {
            // TODO: Api call
            console.log("Adding a note")
            let note = {
                "_id": "67a32bcaf0a70a67ba17360k",
                "user": "67a21b0e5487c4dafe4501ee",
                "title": title,
                "description": description,
                "tag": tag,
                "date": "2025-02-05T09:13:46.380Z",
                "__v": 0
            }
            setNotes(notes.concat(note))
        }
        // Delete a Note
        const deleteNote = (id) => {
            // TODO: Api call
            const newNotes = notes.filter(note => note._id !== id)
            setNotes(newNotes)
        }

        // Edit a Note
        const editNote = (id, title, description, tag) => {
            
        }


        return <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {children}
        </NoteContext.Provider>
}


export default NoteContextProvider