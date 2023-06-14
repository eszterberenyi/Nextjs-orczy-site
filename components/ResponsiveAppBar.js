import * as React from 'react';
import {
    Container,
    AppBar,
    Toolbar, useScrollTrigger, Slide
} from "@mui/material";
import MobileAppBar from "./MobileAppBar";
import {menuItems} from '../utils/menuItems'
import DesktopAppBar from "./DesktopAppBar";
import {useEffect, useRef, useState} from "react";

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
    const appBarRef = useRef(null);
    const [appBarHeight, setAppBarHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const appBar = appBarRef.current;
            // setAppBarHeight(appBar.offsetHeight);
            if (appBar) {
                const height = appBar.offsetHeight;
                setAppBarHeight(height);
            }
        };

        handleResize();

        // window.addEventListener('resize', handleResize);
        //
        // return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <HideOnScroll>
        <AppBar position="sticky" elevation={0} ref={appBarRef}>
            <Container maxWidth="false">
                <Toolbar disableGutters>
                    <MobileAppBar
                        menuItems={menuItems}
                        appBarHeight={appBarHeight}
                    />
                    <DesktopAppBar
                        menuItems={menuItems}
                    />
                </Toolbar>
            </Container>
        </AppBar>
        </HideOnScroll>
    );
}

export default ResponsiveAppBar;