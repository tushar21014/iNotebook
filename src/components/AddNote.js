import React, { useContext, useEffect, useState } from 'react'
import { NoteContext } from '../context/notes/NoteContext';
import { TextField, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from "react-router-dom";
import "../styles/home.css"
import Navbar from "./Navbar";
import { AlertContext } from '../context/AlertContext';
import { useFormik } from 'formik'
import * as Yup from 'yup';

function FormValidations() {
    const { add } = useContext(NoteContext)
    const navigate = useNavigate()
    const { showAlert } = useContext(AlertContext)
    const [priorityColorInput, setPriorityColorInput] = useState('');

    // Update priority color input state
    const updatePriorityColorInput = (event) => {
        setPriorityColorInput(event.target.value);
    };

    const priorityColors = [
        { color: "#FF5722", label: "High Priority", fontColor: "black" },
        { color: "#FFC107", label: "Medium Priority", fontColor: "" },
        { color: "#4CAF50", label: "Low Priority", fontColor: "" },
    ];

    const priorityColor = priorityColorInput || "#171730"
    useEffect(() => {
        if (localStorage.getItem('token')) {
            console.log()
        } else {
            navigate('/login')
            showAlert("You need to signed in first", "error")
        }
    }, [])

    const noteSchema = Yup.object().shape({
        title: Yup.string().min(3).required(),
        description: Yup.string().min(3).required(),
        tag: Yup.string().min(3).required(),
        // ncolor: Yup.string(),
    })

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            tag: "",
            // ncolor: "#FF5722",
        },
        validationSchema: noteSchema,
        onSubmit: (values) => {
            console.log(values)
            add(values)
            navigate('/')
            showAlert(`Created note ${values.title} successfully`, "success")
        }
    })

    const { errors, touched, handleSubmit, getFieldProps } = formik;

    const inputLabelProps = {
        style: {
            color: '#00A8E8',
            borderColor: '#FF6600',
        },
    };

    const inputProps = {
        style: {
            color: '#00A8E8',
            caretColor: "#FFD700",
            outlineColor: "#FFD700"
        },
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-4 addnotes" >
                <Button className="mb-4" variant="text" color="secondary" startIcon={<ArrowBackIcon />} component={Link} to="/" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif" }}>Home</Button>
                <h2 style={{ fontWeight: "Bold" }}>Create new Note</h2>
                <p className="mb-4">Add a new note with your info / notes</p>
                <form autoComplete="off" noValidate onSubmit={handleSubmit} >
                    <div className="title mb-4">
                        <TextField
                            {...getFieldProps('title')}
                            error={Boolean(touched.title && errors.title)}
                            helperText={touched.title && errors.title}
                            color="secondary"
                            label="Title" variant="outlined" fullWidth
                            InputLabelProps={inputLabelProps}
                            InputProps={inputProps}
                        />
                    </div>
                    <div className="description mb-4">
                        <TextField
                            {...getFieldProps('description')}
                            error={Boolean(touched.description && errors.description)}
                            helperText={touched.description && errors.description}
                            color="secondary" label="Description" variant="outlined" fullWidth
                            InputLabelProps={inputLabelProps}
                            InputProps={inputProps}
                        />
                    </div>
                    <div className="tags mb-4">
                        <TextField
                            {...getFieldProps('tag')}
                            error={Boolean(touched.tag && errors.tag)}
                            helperText={touched.tag && errors.tag}
                            color="secondary" label="Tags" variant="outlined" fullWidth
                            InputLabelProps={inputLabelProps}
                            InputProps={inputProps}
                        />
                    </div>
                    {/* <div className="title mb-4">

                        <TextField
                            {...getFieldProps('ncolor')}
                            error={Boolean(touched.ncolor && errors.ncolor)}
                            helperText={touched.ncolor && errors.ncolor}
                            color="secondary" label="Note Color" variant="outlined" fullWidth
                            InputProps={inputProps} InputLabelProps={inputLabelProps} autoFocus margin="dense" value={priorityColorInput} onChange={updatePriorityColorInput} type="text"/>
                    </div> */}
                    <Button type="submit" fullWidth size="large" className="mb-4" variant="contained" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }}>Add Note</Button>
                </form>
            </div>
        </div>
    )
}

export default FormValidations
