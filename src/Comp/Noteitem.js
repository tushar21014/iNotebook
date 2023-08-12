import React, { useContext } from 'react'
import noteContext from '../Context/Notes/noteContext';

const Noteitem = (props) => {
    const { note,updateNote} = props;   
    const context = useContext(noteContext);
    const {deleteNote} = context;

    return (
        <div>
            <div className="card" style={{width:"18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}.</p>
                        <i className="fa-solid fa-trash-can mx-2" onClick={() => {deleteNote(note._id)}}></i>
                        <i className="fa-solid fa-pen-to-square " onClick={()=> {updateNote(note)}}></i>
                    </div>
            </div>
        </div>
    )
}

export default Noteitem