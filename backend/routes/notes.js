const express = require("express")
const fetchuser = require("../middleware/fetchuser")
const Note = require("../models/Note")
const { body, validationResult, matchedData } = require('express-validator');
const router = express.Router()

// ROUTE 1: Get All the Notes using: GET "/api/notes/fetchallnotes". Login required
router.get("/fetchallnotes", fetchuser,  async (req, res) => {
    try {
        const userId = req.user
        const notes = await Note.find({user: userId})
        res.json(notes)
        
    } catch (error) {
        console.log("Error creating user: ", error)
        res.status(500).json({error: "Internal Server Error"})
    }
})

// ROUTE 2: Add a Note using: POST "/api/notes/addnote". Login required
router.post("/addnote", fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 })
  ],  async (req, res) => {
    try {
        // If there are errors, return bad request and the errors
        const {title, description, tag} = req.body
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        const note = await Note.create({
            title: title,
            description: description,
            tag: tag,
            user: req.user
        })

        res.json(note)
    }
    catch (error) {
        console.log("Error creating user: ", error)
        res.status(500).json({error: "Internal Server Error"})
    }
    
})

// ROUTE 3: Update an existing Note using: PATCH "/api/notes/updatenote". Login required
router.patch("/updatenote/:id", fetchuser,  async (req, res) => {
    try {
        const {title, description, tag} = req.body
        
        // Creating newNote object
        const newNote = {}
        if(title) {newNote.title = title}
        if(description) {newNote.description = description}
        if(tag) {newNote.tag = tag}

        // Find the note to be updated and update it
        let note = await Note.findById(req.params.id)
        if (!note) {res.status(404).send("Not Found")}

        // Allow updation only if user owns this note
        if (note.user.toString() !== req.user) {
            return res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
        res.json(note)

    } catch (error) {
        console.log("Error creating user: ", error)
        res.status(500).json({error: "Internal Server Error"})
    }
})

// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete("/deleltenote/:id", fetchuser,  async (req, res) => {
    try {
        // Find the note to be deleted and delete it
        let note = await Note.findById(req.params.id)
        if (!note) {res.status(404).send("Not Found")}
    
        // Allow deletion only if user owns this note
        if (note.user.toString() !== req.user) {
            return res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({"Success": "Note has been deleted", title: note.title})

    } catch (error) {
        console.log("Error creating user: ", error)
        res.status(500).json({error: "Internal Server Error"})
    }

})



module.exports = router