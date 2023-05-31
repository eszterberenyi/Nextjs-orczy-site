import * as React from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    IconButton,
    Typography,
    Container,
    Button,
    Box,
    AppBar,
    Toolbar, Grid, useScrollTrigger, Slide
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Logo from '../public/OSZ_egysoros_fekete_WEB.svg'
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import style from '../styles/ResponsiveAppBar.module.css'
import MenuPopup from "./PopupMenu";
import PopupMenu from "./PopupMenu";

const pages = [
    'EN',
    'RÓLUNK',
    'FOGLALKOZÁSOK',
    'TÉRKÉP',
    'KUTATÁS',
    'KIÁLLÍTÁS',
    'MÉDIA'
];

const links = [
    'en',
    'about',
    'workshops',
    'map',
    'research',
    'exhibition',
    'media'
]

const workshopsMenuItems = [
    'AKTUÁLIS',
    'ARCHÍV'
]

function HideOnScroll({children}) {
    const trigger = useScrollTrigger();

    return (
        <Slide
            appear={false}
            direction="down"
            in={!trigger}
            timeout={{
                enter: 200,
                exit: 300
            }}
            easing={{
            enter: "linear",
            exit: "linear"
        }}>
            {children}
        </Slide>
    );
}

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
        <HideOnScroll>
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Grid container sx={{display: {xs: 'flex', md: 'none'}}}>
                        <Grid item sx={{alignSelf: 'center', marginBottom: '5px'}} xs={10} sm={11}>
                            <Image
                                src={Logo}
                                alt='orczy szomszédok'
                                priority={true}
                                width='auto'
                                height='auto'
                            />
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <Link href='/' passHref>
                                <IconButton
                                    // size="large"
                                    aria-label="open-menu"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={() => setIsOpen(!isOpen)}
                                    sx={{display: {xs: 'flex', md: 'none'}, justifyContent: 'flex-end'}}
                                >
                                    <MenuIcon fontSize='large'/>
                                </IconButton>
                            </Link>
                        </Grid>
                    </Grid>
                    <Drawer
                        anchor="right"
                        open={isOpen}
                        onClose={toggleDrawer(false)}
                        keepMounted={true}
                        PaperProps={{
                            sx: {
                                height: '80%',
                                borderRadius: '0 0 0 50px'
                            }
                        }}
                    >
                        <Box
                            sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}, width: 'auto'}}
                            onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                        >
                            <List>
                                <ListItem sx={{justifyContent: 'flex-end'}}>
                                    <IconButton
                                        aria-label="close-menu"
                                        sx={{
                                            borderRadius: 50,
                                            width: '25%',
                                            color: '#e5e9ec',
                                        }}
                                    >
                                        <CloseIcon/>
                                    </IconButton>
                                </ListItem>
                                {pages.map((page, index) => (
                                    <Link href={`/${links[index]}`} passHref key={index}>
                                        <ListItemButton>
                                            <ListItemText primary={page} sx={{textAlign: 'center'}}/>
                                        </ListItemButton>
                                    </Link>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                    <Link href='/' passHref>
                        <Container sx={{display: {xs: 'none', md: 'flex'}, marginBottom: '5px'}}>
                            <Image
                                src={Logo}
                                alt='orczy szomszédok'
                                priority={true}
                                width='auto'
                                height='auto'
                            />
                        </Container>
                    </Link>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: 'flex-end'}}>
                        {pages.map((page, index) => (
                            page === 'FOGLALKOZÁSOK' ?
                            <PopupMenu page='FOGLALKOZÁSOK' subPages={workshopsMenuItems}/>
                                :
                                <Link href={`/${links[index]}`} key={index} passHref>
                                    <Button
                                        key={index}
                                        sx={{my: 2, color: 'rgba(0, 0, 0, 0.87)', display: 'block', fontWeight: 'bolder'}}
                                        className={style.underline}
                                    >
                                        {page}
                                    </Button>
                                </Link>
                            )
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        </HideOnScroll>
    );
}

export default ResponsiveAppBar;