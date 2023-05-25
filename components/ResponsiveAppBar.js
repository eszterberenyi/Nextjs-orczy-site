import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {useState} from "react";
import Link from "next/link";
import {Drawer, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const pages = [
    'EN',
    'RÓLUNK',
    'FOGLALKOZÁSOK',
    'TÉRKÉP',
    'KUTATÁS',
    'KIÁLLÍTÁS',
    'MÉDIA'
];

function ResponsiveAppBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setIsOpen(open);
    };

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link href='/'>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'inherit',
                                fontWeight: '700',
                                cursor: 'pointer',
                                color: 'rgba(0, 0, 0, 0.87)'
                            }}
                        >
                            ORCZY SZOMSZÉDOK
                        </Typography>
                    </Link>
                    <IconButton
                        size="large"
                        aria-label="open-menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={() => setIsOpen(!isOpen)}
                        sx = {{display: {xs: 'flex', md: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                        <Drawer
                            anchor="left"
                            open={isOpen}
                            onClose={toggleDrawer(false)}
                            keepMounted={true}
                        >
                            <Box
                                sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}, width: 'auto'}}
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}
                            >
                                <List>
                                    <ListItem>
                                        <IconButton
                                            aria-label="close-menu"
                                            sx={{borderRadius: 50, width:'25%', color: 'white'}}
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                   </ListItem>
                                    {pages.map((page) => (
                                        <ListItem key={page} disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary={page} sx={{textAlign: 'center'}}/>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>

                    {/*</Box>*/}
                    <Link href='/'>
                        <Typography
                            variant="h5"
                            noWrap
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'inherit',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'rgba(0, 0, 0, 0.87)',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                fontSize: '10pt',
                            }}
                        >
                            ORCZY SZOMSZÉDOK
                        </Typography>
                    </Link>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: 'flex-end'}}>
                        {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{my: 2, color: 'rgba(0, 0, 0, 0.87)', display: 'block', fontWeight: 'bolder'}}
                                >
                                    {page}
                                </Button>
                            )
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;