import {useTheme} from "@mui/material/styles";
import {useEffect, useState} from "react";

export function getWindowWidth() {
    const theme = useTheme();
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);

            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);
    return {theme, windowWidth};
}
