import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../Context/Notes/noteContext'
import Addnote from './Addnote'
import { useNavigate } from 'react-router-dom';
import Noteitem from './Noteitem'
const Notes = () => {
    const context = useContext(noteContext)
    const { notes, getNote, editNote } = context
    const ref = useRef(null);
    const closeRef = useRef(null);
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "default" })
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            getNote()
        }
        else{
            navigate("/Login");
        }
    }, [])

    const updateNote = (currentnote) => {
        ref.current.click();
        setNote({ id: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag })
    }

    const handleClick = (e) => {
        console.log("Updating the note ", note)
        editNote(note.id, note.etitle, note.edescription, note.etag);
        closeRef.current.click();
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (<>
        <Addnote />
        <button type="button" ref={ref} className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className='container my-3'>
                            <div className="form-group">
                                <label htmlFor="exampleInputtitle1">Title</label>
                                <input type="text" className="form-control" id="etitle" value={note.etitle} aria-describedby="etitle" name='etitle' placeholder="Enter title" minLength={5} required onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputdescription1">Description</label>
                                <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} placeholder="Description" minLength={5} required onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tag">Tag</label>
                                <input type="text" className="form-control" id="etag" name='etag' placeholder="Tag" value={note.etag} onChange={onChange} />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" ref={closeRef} data-dismiss="modal">Close</button>
                        <button type="button" onClick={handleClick} className="btn btn-primary">Update Note</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <h1>Your Notes</h1>

            <div className='row my-3'>
                <div className='container'>
                    {notes.length === 0 && "No Notes to Display"}
                </div>
                {notes.map((obj) => {
                    return <div className='col md-4 my-3 ' key={obj._id}>
                        <Noteitem note={obj} updateNote={updateNote} />
                    </div>
                })}
            </div>
        </div>
    </>
    )
}

export default Notes