import React, { useState } from 'react'
import { useContext } from 'react';
import { Card, CardContent, CardActions, Typography, Divider, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import {AcUnit as Hanuman} from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider';
import NotesPopup from './NotesPopup';

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none;
`

const Note = ({ note }) => {

    const { notes, setNotes, setAcrchiveNotes, setDeleteNotes } = useContext(DataContext);
    const [ openPopup, setOpenPopup ] = useState(false);

    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setAcrchiveNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeleteNotes(prevArr => [note, ...prevArr]);
    }
    // const onTextChange = (e) => {
    //     let changedNote = ;
    //     setAddNote(changedNote);
    // }
    let originaltext=note.text;
    return (
        <StyledCard>
                <CardContent >
                    <Typography>{note.heading}</Typography>
                    <Divider/>
                    <Typography>{note.text}</Typography>
                </CardContent>
                <CardActions>
                    <Archive 
                        fontSize="small" 
                        style={{ marginLeft: 'auto', cursor: 'pointer'}} 
                        onClick={() => archiveNote(note)}
                        
                    />
                    <Hanuman
                        fontSize="small"
                        style={{cursor: 'pointer'}}
                        onClick={() => setOpenPopup(true)}
                    />
                    <Delete 
                        fontSize="small"
                        style={{cursor: 'pointer'}} 
                        onClick={() => deleteNote(note)}
                    />
                </CardActions>
                <NotesPopup openPopup={openPopup} setOpenPopup={setOpenPopup}>
                    <Typography>{note.heading}</Typography>
                    <Divider/>
                    <TextField
                    placeholder='Add a note'
                    multiline
                    maxRows={Infinity}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    onChange={(e) => {note.text={ ...originaltext, [e.target.name]: e.target.value }}}
                    name='text'
                    value={note.text}/>                
                    </NotesPopup>
        </StyledCard>
    )
}

export default Note;