import Link from "next/link";
import {Box, Button, Container} from "@mui/material";
import Image from "next/image";
import Logo from "../public/OSZ_egysoros_fekete_WEB.svg";
import style from "../styles/ResponsiveAppBar.module.css";
import * as React from "react";
import { useRouter } from 'next/router';

export default function DesktopAppBar({menuItems}) {
    const router = useRouter();

    return (
        <>
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
                {menuItems.map((item) => (
                        // Array.isArray(item.dropdown) ?
                        //     <PopupMenu
                        //         page={item.name}
                        //         subPages={item.dropdown}
                        //         key={item.name}
                        //     />
                        //     :
                            <Link
                                href={`/${item.link}`}
                                key={item.name}
                                passHref
                            >
                                <Button
                                    key={item.name}
                                    sx={{my: 2, color: 'text.primary', display: 'block', fontWeight: 'bolder'}}
                                    className={`${router.pathname === `/${item.link}` && `${style.active}`} ${style.underline}`}
                                >
                                    {item.name}
                                </Button>
                            </Link>
                    )
                )}
            </Box>
        </>
    )
}