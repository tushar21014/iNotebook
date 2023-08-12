import React, { useContext, useState } from 'react'
import noteContext from '../Context/Notes/noteContext'
const Addnote = () => {
    
    const context = useContext(noteContext)
    const {addNote} = context
    const [note, setNote] = useState({title : "" , description : "" , tag : "default"})

    const handleClick = (e)=> {
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title : "", description: "" , tag : ""})
    }
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <div className='container my-3'>
                <h1>Add a Note</h1>
                <form className='container my-3'>
                    <div className="form-group">
                        <label htmlFor="exampleInputtitle1">Title</label>
                        <input type="text" className="form-control" id="title1" minLength={5} required aria-describedby="title" value= {note.title} name='title' placeholder="Enter title" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputdescription1">Description</label>
                        <input type="text" className="form-control" id="description"  minLength={5} required name='description' value= {note.description} placeholder="Description" onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tag">Tag</label>
                        <input type="text" className="form-control" id="tag" name='tag' value= {note.tag} placeholder="Tag" onChange={onChange}/>
                    </div>
                    <button disabled= {note.title<5 || note.description<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default Addnote