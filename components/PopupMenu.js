import * as React from 'react'
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import {
    usePopupState,
    bindHover,
    bindMenu,
} from 'material-ui-popup-state/hooks'
import Link from "next/link";
import style from '../styles/ResponsiveAppBar.module.css'

const PopupMenu = ({page, subPages}) => {
    const popupState = usePopupState({
        variant: 'popover',
        popupId: 'demoMenu',
    })
    return (
        <>
            <Button
                disableRipple
                sx={{my: 2, color: 'rgba(0, 0, 0, 0.87)', display: 'block', fontWeight: 'bolder'}}
                {...bindHover(popupState)}
            >
                {page}
            </Button>
            <HoverMenu
                {...bindMenu(popupState)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                elevation={2}
                PaperProps={{
                    sx:
                        {
                            backgroundColor: '#FDC623',
                            width: '150px',
                        }
                }}
            >
                {subPages.map((page, index) => (
                    <Link href={`/`} key={index} passHref>
                        <MenuItem
                            className={style.popup}
                            key={index}
                            sx={{
                                fontSize: '14px',
                                '&:hover': {backgroundColor: 'transparent'}
                            }}
                            disableRipple
                            onClick={popupState.close}>
                            {page}
                        </MenuItem>
                    </Link>
                ))}
            </HoverMenu>
        </>
    )
}

export default PopupMenu