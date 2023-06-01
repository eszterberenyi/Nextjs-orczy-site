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
                <Container sx={{display: 'flex', justifyContent: 'flex-start'}}>
                    <Typography
                        // sx={{display: {xs: 'none', sm: 'flex'}}}
                        color="textSecondary" variant="p"
                        fontSize='12px'>
                        The Orczy Szomszédok project is funded by BERTHA Foundation
                    </Typography>
                </Container>
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <IconButton
                        area-label='navigate to facebook page'
                        sx={{color:"text.primary", justifySelf: 'flex-end'}}
                        href='https://www.facebook.com/profile.php?id=100092211710150'
                        target="_blank"
                    >
                        <FacebookIcon/>
                    </IconButton>
                    <IconButton
                        sx={{color:"text.primary"}}
                    >
                        <InstagramIcon/>
                    </IconButton>
                </Box>
        </Toolbar>
    );
};

export default Footer;