import * as React from 'react';
import {
    Container,
    AppBar,
    Toolbar, useScrollTrigger, Slide
} from "@mui/material";
import MobileAppBar from "./MobileAppBar";
import {menuItems} from '../utils/menuItems'
import DesktopAppBar from "./DesktopAppBar";

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
        <AppBar position="sticky" elevation={1}>
            <Container maxWidth="false">
                <Toolbar disableGutters>
                    <MobileAppBar
                        menuItems={menuItems}
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