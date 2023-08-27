import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#FDC623',
        },
        secondary: {
            main: '#ede7f6',
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
        },
        info: {
            main: '#9e9e9e',
        },
        success: {
            main: '#fdc623',
        },
        background: {
            default: '#f5f5f5',
            paper: '#f5f5f5',
        },
    },
    typography: {
        fontFamily: 'Montserrat',
        h5: {
            position: 'relative',
            display: 'inline-block',
            padding: '10px',
            zIndex: 1,
            '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0, // Position it at the start of the element
                width: '100%', // Cover the full width
                height: '25px',
                backgroundColor: '#FDC623',
                zIndex: -1,
                marginBottom: '5px'
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,   // Extra small devices
            sm: 600, // Small devices
            md: 960, // Medium devices
            lg: 1280, // Large devices
            xl: 1920, // Extra large devices
        },
    },
    components: {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    // borderBottom: '1px solid red',
                    // padding: '0 0 2px'
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    // width: '100%',
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                 paper: {
                     // background: 'linear-gradient(0deg, rgba(188,248,249,1) 0%, rgba(253,187,45,1) 100%)'
                     backgroundColor: 'rgb(131,58,180)',
                     background: 'linear-gradient(29deg, rgba(131,58,180,1) 30%, rgba(253,37,29,1) 30%, rgba(253,198,35,1) 71%)',
                     color: 'rgba(0, 0, 0, 0.87)',
                     fontWeight: 'bolder',
                     width: '100%',
                     height: '100%',
                     opacity: 1

}
            }
        },
        MuiModal: {
            styleOverrides: {
                root: {
                }
            }
        }
    }
});