import React, { useContext, memo, useState } from 'react'
import { IconButton, colors } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { NoteContext } from '../context/notes/NoteContext';
import { Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import useInputState from "../hooks/useInputState"
import useToggleState from '../hooks/useToggleState';




function NoteItem({ note }) {

    const { remove, edit } = useContext(NoteContext)

    const [open, toggleOpen] = useToggleState(false)

    const [title, updateTitle] = useInputState(note.title)
    const [description, updateDescription] = useInputState(note.description)
    const [tag, updateTag] = useInputState(note.tag)
    // const [ncolor, updatencolor] = useInputState(note.ncolor)


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

    const priorityColor = priorityColorInput  || "#171730"
    const priorityfontColor = priorityColorInput || "#FFFFFF"

    const handleClickOpen = () => {
        toggleOpen()
    };

    const handleClose = () => {
        toggleOpen()
    };

    const handleSubmit = (evt) => {
        evt.preventDefault()
        edit(title, description, tag, note._id)
    }

    const inputPropsitems = {
        style: {
            color: priorityfontColor,
        }
    }

    const inputLabelPropsitems = {
        style: {
            color: '#00A8E8',
            fontSize: "18px",
            fontWeight: "900"
        }
    }

    return (
        <div className="col-md-4 mt-2 mb-2">

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "bold", fontSize: "2rem", paddingBottom: "0rem", backgroundColor: "#171730", color: "#FFFFFF" }}>Edit Note</DialogTitle>
                <form onSubmit={handleSubmit} style={{ backgroundColor: "#171730" }}>
                    <DialogContent style={{ paddingTop: "0.5rem", color: "#FFFFFF" }}>
                        <DialogContentText style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif", fontSize: "1rem", marginBottom: "0.5rem" }}>
                            Edit your note. edit the field that you want to edit in note
                        </DialogContentText>
                        <TextField InputProps={inputPropsitems} InputLabelProps={inputLabelPropsitems} inputProps={{ minLength: 3 }} autoFocus required color="secondary" margin="dense" value={title} onChange={updateTitle} label="Title" type="text" fullWidth variant="standard" />
                        <TextField InputProps={inputPropsitems} InputLabelProps={inputLabelPropsitems} inputProps={{ minLength: 3 }} autoFocus required color="secondary" margin="dense" value={description} onChange={updateDescription} label="Description" type="text" fullWidth variant="standard" />
                        <TextField InputProps={inputPropsitems} InputLabelProps={inputLabelPropsitems} inputProps={{ minLength: 3 }} autoFocus required color="secondary" margin="dense" value={tag} label="tag" onChange={updateTag} type="text" fullWidth variant="standard" />
                        {/* <TextField InputProps={inputPropsitems} InputLabelProps={inputLabelPropsitems} autoFocus color="secondary" margin="dense" value={priorityColorInput} onChange={updatePriorityColorInput} label="Priority Color" type="text" fullWidth variant="standard" /> */}
                        {/* <FormControl fullWidth margin="normal" color="secondary">
                            <InputLabel style={inputLabelPropsitems.style}>Select Priority Color</InputLabel>
                            <Select
                                value={priorityColorInput}
                                onChange={updatePriorityColorInput}
                                label="Select Priority Color"
                                style={{color : priorityfontColor}}
                                // onChangeCapture={ updatencolor }
                            >
                                {priorityColors.map((colorOption, index) => (
                                    <MenuItem key={index} value={colorOption.color} style={{ color: colorOption.color }}>
                                        {colorOption.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl> */}
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="secondary" onClick={handleClose} style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1rem" }}>Cancel</Button>
                        <Button disabled={title.length < 3 || description.length < 3 || tag.length < 3} variant="contained" color="secondary" type="submit" onClick={handleClose} style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1rem" }}>Edit {note.title}</Button>
                    </DialogActions>
                </form>
            </Dialog>

            <div
                className="card" style={{ background: "#350757", color: priorityfontColor === "#FFFFFF" ? "#FFFFFF" : "#000"  , backgroundColor: priorityColor }}>
                    <div style={{borderRadius: "50%", position: "relative", top: "5px", left: "5px", backgroundColor: priorityColor}}></div>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <IconButton onClick={() => { remove(note._id) }} className="mb-2 ms-auto" color="secondary">
                            <DeleteOutlineOutlinedIcon color="secondary" />
                        </IconButton>
                        <IconButton className="mb-2" color="secondary" onClick={handleClickOpen}>
                            <EditIcon color="secondary" />
                        </IconButton>
                    </div>
                    <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
                    <p className="card-text">{note.description.slice(0, 200)} ...</p>
                </div>
            </div>
        </div>
    )
}

export default memo(NoteItem)

