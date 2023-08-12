const express = require('express');
const router = express.Router();
const Note = require('../Models/Note');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

// Route 1: Get all the motes using GET "/api/notes/fetchallnotes" . Login Required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some internal Error occured");

    }
})


// Route 2: add a mote using POST "/api/notes/fetchallnotes" . Login Required
router.post('/addnotes', fetchuser, [
    body('title', 'Please Enter a title first').exists(),
    body('description', 'description should be greater than 5').exists()
], async (req, res) => {
    try {

        const { title, description, tag } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const savedNote = await note.save()
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some internal Error occured");

    }
})

// Route 3: Update a note using PUT "/api/notes/update" . Login Required

router.put('/update/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        const newNote = {};
        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        // Find a note to be updated and update it
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("No Notes Found")
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json(note);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some internal Error occured");

    }
})


// Route 4: Delete a note using DELETE "/api/notes/delete" . Login Required
router.delete('/delete/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        // Find a note to be updated and update it
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("No Notes Found")
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some internal Error occured");

    }
})



module.exports = router