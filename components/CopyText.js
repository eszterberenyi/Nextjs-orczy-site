import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React, {useState} from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export const CopyText = ({text}) => {
    const [open, setOpen] = useState(false);

    const handleCopyClick = () => {

        navigator.clipboard.writeText(text)
            .then(() => {
                setOpen(true);
            })
            .catch((error) => {
                console.error('Failed to copy text:', error);
            });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            setOpen(false);
        }
        setOpen(false);
    };

    return (
        <>
            <ContentCopyIcon
                onClick={handleCopyClick}
                sx={{cursor: 'pointer'}}
            />
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert severity="success" variant='filled'>
                    Szöveg másolva a vágólapra
                </Alert>
            </Snackbar>
        </>

    )
}