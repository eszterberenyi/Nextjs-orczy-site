import {
    Box,
    Divider,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from "@mui/material";
import Image from "next/image";
import Logo from "../public/OSZ_egysoros_fekete_WEB.svg";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import DropdownMenu from "./DropdownMenu";
import style from "../styles/ResponsiveAppBar.module.css";
import { useRouter } from 'next/router';

const keyOne = uuidv4()
const keyTwo = uuidv4()

export default function MobileAppBar({menuItems}) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
    const router = useRouter();

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
                    <IconButton
                        aria-label="open-menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                        sx={{display: {xs: 'flex', md: 'none'}, justifyContent: 'flex-end'}}
                    >
                        <MenuIcon fontSize='large'/>
                    </IconButton>
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
                                    margin:'0 0 0 16px',
                                    width: '25%',
                                    color: '#e5e9ec',
                                }}
                                key={keyTwo}
                            >
                                <CloseIcon/>
                            </IconButton>
                        </ListItem>
                        {menuItems.map((item) => (
                            Array.isArray(item.dropdown) ?
                                <DropdownMenu
                                    key={item.name}
                                    page={item.name}
                                    subPages={item.dropdown}
                                />
                                :
                                <Link
                                    href={`/${item.link}`}
                                    passHref
                                    key={item.name}>
                                    <Divider/>
                                    <ListItemButton
                                        key={item.name}
                                        onClick={toggleDrawer(false)}
                                        onKeyDown={toggleDrawer(false)}
                                        className={`${router.pathname === `/${item.link}` && style.activemobile}`}
                                    >
                                        <ListItemText primary={item.name} sx={{textAlign: 'center'}}/>
                                    </ListItemButton>
                                </Link>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}