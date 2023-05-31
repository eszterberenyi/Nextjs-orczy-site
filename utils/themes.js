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
            primary: '#000000',
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
                     background: '#5b7c99',
                     color: '#e5e9ec',
                     fontWeight: 'bolder'

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