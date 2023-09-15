import React from 'react'
import { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { DataContext } from "../../context/DataProvider";

//components
import Form from "./Form";
import Note from "./Note";
import EmptyNotes from "./EmptyNotes";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const notes = useContext(DataContext);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <Form />
        {notes.length > 0 ? (
          <Grid container style={{ marginTop: 16 }}>
            {
                notes.map(note =>(
                    <Grid item>
                        <Note note={note}/>
                    </Grid>
                ))
            }
          </Grid>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
    
  );
};

export default Notes;
