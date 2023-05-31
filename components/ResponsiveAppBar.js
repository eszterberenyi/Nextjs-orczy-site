import * as React from 'react';
import {
    Container,
    Button,
    Box,
    AppBar,
    Toolbar, Grid, useScrollTrigger, Slide
} from "@mui/material";
import Link from "next/link";
import Image from 'next/image';
import Logo from '../public/OSZ_egysoros_fekete_WEB.svg'
import style from '../styles/ResponsiveAppBar.module.css'
import PopupMenu from "./PopupMenu";
import MobileAppBar from "./MobileAppBar";
import { v4 as uuidv4 } from 'uuid';

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

const key = uuidv4();

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


    return (
        <HideOnScroll>
        <AppBar position="sticky">
            <Container maxWidth="false">
                <Toolbar disableGutters>
                    <MobileAppBar
                        pages={pages}
                        links={links}
                        subPages={workshopsMenuItems}
                    />
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
                            <PopupMenu
                                page='FOGLALKOZÁSOK'
                                subPages={workshopsMenuItems}
                                key={key}
                            />
                                :
                                <Link
                                    href={`/${links[index]}`}
                                    key={index}
                                    passHref
                                >
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