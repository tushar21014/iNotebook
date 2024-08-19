import { createContext, useState } from "react"
export const NoteContext = createContext()
export function NoteProvider(props) {

    const initialNotes = []

    const [notes, setNotes] = useState(initialNotes)
    
    const host = process.env.REACT_APP_API_URL

    const getNotes = async () => {
        const response = await fetch(host + "/api/notes", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
        })
        const json = await response.json()
        setNotes(json)
    }

    const add = async (newNotes) => {

        const response = await fetch(host + "/api/notes/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
            body: JSON.stringify({
                title: newNotes.title,
                description: newNotes.description,
                tag: newNotes.tag,
            }),
        });
        setNotes([...notes, newNotes])
    }

    const remove = async (removeId) => {
        const response = await fetch(host + "/api/notes/"+ removeId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
        })
        // const json = await response.json()
        setNotes(notes.filter(note => (
            note._id !== removeId
        )))
        // console.log(json)
    }

    const edit = async (title, description, tag, id) => {
        const response = await fetch(host + "/api/notes/" + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })
        // const json = await response.json()
        setNotes(notes.map(note => (
            note._id === id ? { ...note, title, description, tag } : note
        )))
        // console.log(json)
    } 

    return (
        <NoteContext.Provider value={{ notes, add, remove, edit, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}
