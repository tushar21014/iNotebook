import React, { useContext, useEffect, } from 'react'
import { NoteContext } from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import empty from '../images/empty.svg'
import { useNavigate } from "react-router-dom";
import { AlertContext } from '../context/AlertContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Notes() {

    const { notes, getNotes } = useContext(NoteContext)
    const navigate = useNavigate()
    const { showAlert } = useContext(AlertContext)


    const handleLogout = (evt) => {
        localStorage.removeItem('token')
        navigate('/login')
        showAlert("Please Login Again!", "error")

    }


    useEffect(() => {
        if (localStorage.getItem('token')) {
            try {
                getNotes()
                    .catch(error => {
                        console.log("CATCH (Promise rejection)");
                        handleLogout();
                    });
            } catch (error) {
                handleLogout();
            }
        } else {
            navigate('/about');
            showAlert("You need to sign in first", "error");
        }
    }, []);
    

    return (
        <div className="row ps-5 mt-4 mb-1">
            <h1 className="display-6">Your Notes: </h1>
            {notes.length === 0 &&
                <div className="d-flex ">
                    <p style={{ position: "absolute", left: "35%", bottom: "-10%" }}>Create your first note :) !!!!!</p>
                    <img className="img-fluid ms-5 mt-3" src={empty} alt="empty" style={{ width: "30%", opacity: "0.5" }} />
                </div>
            }
            {notes ? notes.map(note =>
                <NoteItem
                    key={note._id} note={note} />
            )
                : handleLogout()
            }
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default Notes;

