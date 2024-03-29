import React from "react";
import {Box, Container, Typography} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

export const Footer = () => {
    return (
        <Toolbar
            variant="dense"
            sx={{
                width: "100%",
                minHeight: '2.5rem',
                backgroundColor: "primary.main",
                position: 'absolute',
                bottom: 0,
            }}
        >
                <Container sx={{display: 'flex', justifyContent: 'flex-start', marginLeft: 0}}>
                    <Typography
                        color="textSecondary" variant="p"
                        fontSize='12px'>
                        The Orczy Szomszédok project is funded by BERTHA Foundation
                    </Typography>
                </Container>
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <IconButton
                        area-label='facebook oldalhoz link'
                        sx={{color:"text.primary", justifySelf: 'flex-end'}}
                        href='https://www.facebook.com/profile.php?id=100092211710150'
                        target="_blank"
                    >
                        <FacebookIcon/>
                    </IconButton>
                    <IconButton
                        sx={{color:"text.primary"}}
                        area-label='instagram oldalhoz link'
                        href='https://www.instagram.com/orczy_szomszedok/'
                        target="_blank"
                    >
                        <InstagramIcon/>
                    </IconButton>
                </Box>
        </Toolbar>
    );
};

export default Footer;