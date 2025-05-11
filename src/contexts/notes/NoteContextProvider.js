import React, {useState} from "react";
import NoteContext from "./noteContext";

const NoteContextProvider = ({children}) => {
    const host = "http://localhost:5000"
    
    const initialNotes = []
    const [notes, setNotes] = useState(initialNotes)
        // Fetch all Note
        const fetchAllNotes = async () => {
            // Api call
            const response = await fetch (`${host}/api/notes/fetchallnotes/`,
                {method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2EyMWIwZTU0ODdjNGRhZmU0NTAxZWUiLCJpYXQiOjE3Mzg2ODcyMTh9.A18dWMZ4F-nFR7VDgvcvigGPFqtj30SWdOUqX-dCV10"
                    }
                })
                const json = await response.json()
                setNotes(json)
            }

            
        const addNote = async (title, description, tag) => {
            // Api call
            const response = await fetch (`${host}/api/notes/addnote/`,
                {method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2EyMWIwZTU0ODdjNGRhZmU0NTAxZWUiLCJpYXQiOjE3Mzg2ODcyMTh9.A18dWMZ4F-nFR7VDgvcvigGPFqtj30SWdOUqX-dCV10"
                },
                body: JSON.stringify({title, description, tag})
            })

            fetchAllNotes()
        }
        // Delete a Note
        const deleteNote = async (id) => {
            // Api call

            const response = await fetch (`${host}/api/notes/deleltenote/${id}`,
                {method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2EyMWIwZTU0ODdjNGRhZmU0NTAxZWUiLCJpYXQiOjE3Mzg2ODcyMTh9.A18dWMZ4F-nFR7VDgvcvigGPFqtj30SWdOUqX-dCV10"
                }
            })

            // For frontend
            fetchAllNotes()
        }

        // Edit a Note
        const editNote = async (id, title, description, tag) => {
            // API Call
            console.log(`Fetching: ${host}/api/notes/updatenote/${id}`);
            const response = await fetch (`${host}/api/notes/updatenote/${id}`,
                {method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2EyMWIwZTU0ODdjNGRhZmU0NTAxZWUiLCJpYXQiOjE3Mzg2ODcyMTh9.A18dWMZ4F-nFR7VDgvcvigGPFqtj30SWdOUqX-dCV10"
                },
                body: JSON.stringify({title, description, tag})
            })

            console.log(`Fetched: ${host}/api/notes/updatenote/${id}`);

            fetchAllNotes()
        }


        return <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, fetchAllNotes}}>
            {children}
        </NoteContext.Provider>
}


export default NoteContextProvider