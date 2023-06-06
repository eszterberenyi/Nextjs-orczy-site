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
import { useRouter } from 'next/router';

const PopupMenu = ({page, subPages}) => {
    const popupState = usePopupState({
        variant: 'popover',
        popupId: 'demoMenu',
    })
    const router = useRouter();

    return (
        <>
            <Button
                disableRipple
                sx={{my: 2, color: 'rgba(0, 0, 0, 0.87)', display: 'block', fontWeight: 'bolder'}}
                {...bindHover(popupState)}
                className={`${(router.asPath === '/workshops#current' || router.asPath === '/workshops#archive') && style.active}`}
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
                {subPages.map((page) => (
                    <Link href={`/workshops#${page.link}`} key={page.name} passHref>
                        <MenuItem
                            className={`${router.asPath === `/workshops#${page.link}` && style.active} ${style.popup}`}
                            key={page.name}
                            sx={{
                                fontSize: '14px',
                                '&:hover': {backgroundColor: 'transparent'}
                            }}
                            disableRipple
                            onClick={popupState.close}>
                            {page.name}
                        </MenuItem>
                    </Link>
                ))}
            </HoverMenu>
        </>
    )
}

export default PopupMenu