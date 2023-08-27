import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";

export const ItemTransition = ({ children, initial = false }) => {
    const [isInView, setIsInView] = useState(initial);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    useEffect(() => {
        if (!isInView) {
            setIsInView(inView);
        }
    }, [isInView, inView]);

    return (
        <Grow
            in={isInView}
            ref={ref}
            timeout={1000}
            easing="cubic-bezier(0.4, 0, 0.2, 1)"
        >
            <Grid item container ref={ref} spacing={2}>
                {children}
            </Grid>
        </Grow>
    );
};