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
import Logo from '../public/fekete_logo.svg'

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
                        <Grid item sx={{alignSelf: 'center'}} xs={10} sm={11}>
                            {/*<Image*/}
                            {/*    src={Logo}*/}
                            {/*    alt='orczy szomszédok'*/}
                            {/*    priority={true}*/}
                            {/*    width='auto'*/}
                            {/*    height='auto'*/}
                            {/*/>*/}
                            <Typography
                                variant="h4"
                                noWrap
                                sx={{
                                    mr: 2,
                                    display: {xs: 'flex', md: 'none'},
                                    fontFamily: 'inherit',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    color: 'rgba(0, 0, 0, 0.87)',
                                    fontSize: '14pt'
                                }}
                            >
                                ORCZY SZOMSZÉDOK
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <Link href='/' passHref>
                                <IconButton
                                    // size="large"
                                    aria-label="open-menu"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={() => setIsOpen(!isOpen)}
                                    sx={{display: {xs: 'flex', md: 'none'}, justifyContent: 'flex-end', padding: '8px 8px 8px 15px'}}
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
                                            color: 'white',
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
                        <Typography
                            variant="h3"
                            noWrap
                            sx={{
                                mr: 2,
                                display: {xs: 'none', lg: 'flex'},
                                flexGrow: 1,
                                fontFamily: 'inherit',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'rgba(0, 0, 0, 0.87)',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                fontSize: '20pt',
                                alignSelf: 'flex-start'
                            }}
                        >
                        ORCZY SZOMSZÉDOK
                        {/*<Container sx={{display: {xs: 'none', md: 'flex'}}}>*/}
                        {/*    <Image*/}
                        {/*        src={Logo}*/}
                        {/*        alt='orczy szomszédok'*/}
                        {/*        priority={true}*/}
                        {/*        width='auto'*/}
                        {/*        height={50}*/}
                        {/*    />*/}
                        {/*</Container>*/}
                        </Typography>
                        <Typography
                            variant="h4"
                            noWrap
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex', lg: 'none'},
                                fontFamily: 'inherit',
                                fontWeight: '700',
                                cursor: 'pointer',
                                color: 'rgba(0, 0, 0, 0.87)',
                                fontSize: '12pt'
                            }}
                        >
                            ORCZY SZOMSZÉDOK
                        </Typography>
                    </Link>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: 'flex-end'}}>
                        {pages.map((page, index) => (
                                <Link href={`/${links[index]}`} key={index} passHref>
                                    <Button
                                        key={index}
                                        sx={{my: 2, color: 'rgba(0, 0, 0, 0.87)', display: 'block', fontWeight: 'bolder'}}
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