import { Dialog,DialogContent,Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react'

const StyledDialogContent=styled(DialogContent)`
display:flex;
flex-direction: column;
`
function NotesPopup(props) {
    const {children,openPopup,setOpenPopup}=props;

    const handleClickOpen = () => {
        setOpenPopup(true);
      };
    
      const handleClose = () => {
        setOpenPopup(false);
      };
    
  return (
    <div>
      <Dialog open={openPopup}>
        <StyledDialogContent>
            {children}
            <Button
            variant="outlined" 
            onClick={handleClose}>Save Changes</Button>
        </StyledDialogContent>
      </Dialog>
    </div>
  )
}

export default NotesPopup
