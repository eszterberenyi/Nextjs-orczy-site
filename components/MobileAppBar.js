import {Box, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import Image from "next/image";
import Logo from "../public/OSZ_egysoros_fekete_WEB.svg";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
import {useState} from "react";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from "@mui/material/Collapse";
import { v4 as uuidv4 } from 'uuid';

const keyOne = uuidv4()
const keyTwo = uuidv4()

export default function MobileAppBar({pages, links, subPages}) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleNestedListClick = () => {
        setOpen(!open);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setIsDrawerOpen(open);
    };
    return (
        <>
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
                            aria-label="open-menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                            sx={{display: {xs: 'flex', md: 'none'}, justifyContent: 'flex-end'}}
                        >
                            <MenuIcon fontSize='large'/>
                        </IconButton>
                    </Link>
                </Grid>
            </Grid>
            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                keepMounted={true}
                PaperProps={{
                    sx: {
                        borderRadius: '0 0 0 30px'
                    }
                }}
            >
                <Box
                    sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}, width: 'auto'}}
                >
                    <List>
                        <ListItem
                            sx={{justifyContent: 'flex-end'}}
                            key={keyOne}>
                            <IconButton
                                aria-label="close-menu"
                                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                                sx={{
                                    borderRadius: 50,
                                    padding:'0 0 0 16px',
                                    width: '25%',
                                    color: '#e5e9ec',
                                }}
                                key={keyTwo}
                            >
                                <CloseIcon/>
                            </IconButton>
                        </ListItem>
                        {pages.map((page, index) => (
                            page === 'FOGLALKOZÁSOK' ?
                                <React.Fragment key={index}>
                                    <Divider/>
                                    <ListItemButton
                                        disableRipple
                                        onClick={handleNestedListClick}
                                        key={index}
                                    >
                                        <ListItemText primary={page} sx={{textAlign: 'center'}}/>
                                        {open ? <ExpandLess/> : <ExpandMore/>}
                                    </ListItemButton>
                                    <Collapse
                                        in={open}
                                        timeout="auto"
                                        unmountOnExit
                                    >
                                        <List component="div" disablePadding>
                                            {subPages.map((subPage, subIndex) => (
                                                <Link
                                                    href={`/`}
                                                    passHref
                                                    key={index-subIndex}>
                                                    <ListItemButton
                                                        sx={{pl: 2}}
                                                        key={index+subIndex}>
                                                        <ListItemText
                                                            primary={subPage}
                                                            primaryTypographyProps={{sx:{ textAlign: 'left'}}}/>
                                                    </ListItemButton>
                                                </Link>
                                            ))}
                                        </List>
                                    </Collapse>
                                </React.Fragment>
                                :
                                <Link
                                    href={`/${links[index]}`}
                                    passHref
                                    key={index}>
                                    <Divider/>
                                    <ListItemButton
                                        key={index}
                                        onClick={toggleDrawer(false)}
                                        onKeyDown={toggleDrawer(false)}>
                                        <ListItemText primary={page} sx={{textAlign: 'center'}}/>
                                    </ListItemButton>
                                </Link>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}