import { useState } from "react";
import NoteContext from "./noteContext";
const host = "http://localhost:5000"

const notesInitial = []
const detailsInitail = []
const NoteState = (props) => {
    const [notes, setNotes] = useState(notesInitial)
    const [details, setDetails] = useState(detailsInitail)


    //Gets all notes
    const getNote = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json();
        setNotes(json);
    }
    

    const getDetail = async () => {
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json();
        setDetails(json);
        }



    //Add a note
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const note = await response.json();
        setNotes(notes.concat(note))
    }


    //Delete a note

    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = response.json();
        console.log(json);

        console.log("deleting a note with this id: " + id);
        const newNotes = notes.filter((notes) => { return notes._id !== id })
        setNotes(newNotes);
        


    }

    //Edit a note
    const editNote = async (id, title, description, tag) => {

        const host = "http://localhost:5000"
        const response = await fetch(`${host}/api/notes/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }),
        });

        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < notes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }



    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNote, getDetail, details,setDetails}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;