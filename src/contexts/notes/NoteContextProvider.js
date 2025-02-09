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
            "_id": "67a32bcaf0a70a67ba17360c",
            "user": "67a21b0e5487c4dafe4501ee",
            "title": "React JS course",
            "description": "Watch 4 videos of React JS course and understand them",
            "tag": "Coding",
            "date": "2025-02-05T09:13:46.380Z",
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
            "_id": "67a32bcaf0a70a67ba17360c",
            "user": "67a21b0e5487c4dafe4501ee",
            "title": "React JS course",
            "description": "Watch 4 videos of React JS course and understand them",
            "tag": "Coding",
            "date": "2025-02-05T09:13:46.380Z",
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
            "_id": "67a32bcaf0a70a67ba17360c",
            "user": "67a21b0e5487c4dafe4501ee",
            "title": "React JS course",
            "description": "Watch 4 videos of React JS course and understand them",
            "tag": "Coding",
            "date": "2025-02-05T09:13:46.380Z",
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
            "_id": "67a32bcaf0a70a67ba17360c",
            "user": "67a21b0e5487c4dafe4501ee",
            "title": "React JS course",
            "description": "Watch 4 videos of React JS course and understand them",
            "tag": "Coding",
            "date": "2025-02-05T09:13:46.380Z",
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
            }
        ]

        const [notes, setNotes] = useState(initialNotes)

        return <NoteContext.Provider value={{notes, setNotes}}>
            {children}
        </NoteContext.Provider>
}


export default NoteContextProvider