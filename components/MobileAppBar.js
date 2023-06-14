import {
    Drawer,
    Grid,
    IconButton,
    List,
    ListItemButton,
    ListItemText
} from "@mui/material";
import Image from "next/image";
import Logo from "../public/OSZ_egysoros_fekete_WEB.svg";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import * as React from "react";
import {useState} from "react";
import style from "../styles/ResponsiveAppBar.module.css";
import { useRouter } from 'next/router';
import Backdrop from "@mui/material/Backdrop";


export default function MobileAppBar({menuItems, appBarHeight}) {
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
                        <Link href='/' passHref>
                            <Image
                                src={Logo}
                                alt='orczy szomszédok'
                                priority={true}
                                width='auto'
                                height='auto'
                            />
                            </Link>
                    </Grid>
                <Grid item xs={2} sm={1}>
                    <IconButton
                        aria-label="open-menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                        sx={{display: {xs: 'flex', md: 'none'}, justifyContent: 'flex-end'}}
                    >
                        {isDrawerOpen ?
                            <CloseOutlinedIcon fontSize='large'/>
                            : <MenuIcon fontSize='large'/>
                        }
                    </IconButton>
                </Grid>
            </Grid>
            <Drawer
                anchor="right"
                elevation={0}
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                keepMounted={true}
                PaperProps={{
                    sx: {
                        marginTop: `${appBarHeight-1}px`
                    }
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    invisible: true,
                    style: { backgroundColor: 'transparent' },
                }}
            >
                {/*<Box*/}
                {/*    sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}, width: 'auto'}}*/}
                {/*>*/}
                    <List sx={{width: '100%'}}>
                        {menuItems.map((item) => (
                            <Link
                                href={`/${item.link}`}
                                passHref
                                key={item.name}>
                                <ListItemButton
                                    key={item.name}
                                    onClick={toggleDrawer(false)}
                                    onKeyDown={toggleDrawer(false)}
                                    className={`${router.pathname === `/${item.link}` && style.active}`}
                                >
                                    <ListItemText
                                        primary={item.name}
                                        primaryTypographyProps={{sx:{ textAlign: 'center', fontSize: '1.2rem'}}}
                                    />
                                </ListItemButton>
                            </Link>
                        ))}
                    </List>
                {/*</Box>*/}
            </Drawer>
        </>
    )
}