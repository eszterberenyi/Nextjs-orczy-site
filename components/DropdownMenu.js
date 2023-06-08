import {List, ListItemButton, ListItemText} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";
import * as React from "react";
import { useRouter } from 'next/router';
import style from "../styles/ResponsiveAppBar.module.css";


export default function DropdownMenu({page, subPages}) {
    const router = useRouter();
    const isCurrentPage = router.pathname === `/workshops`
    const [open, setOpen] = React.useState(isCurrentPage);

    const handleNestedListClick = () => {
        setOpen(!open);
    };

    return (
        <React.Fragment key={page}>
            {/*<Divider/>*/}
            <ListItemButton
                disableRipple
                onClick={handleNestedListClick}
                key={page}
            >
                <ListItemText
                    primary={page}
                    primaryTypographyProps={{textAlign: 'center', paddingLeft: '35px', fontSize: '1.2rem'}}
                />
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
            >
                <List component="div" disablePadding>
                    {subPages.map((subPage) => (
                        <Link
                            href={`/workshops#${subPage.link}`}
                            passHref
                            key={subPage.name}>
                            <ListItemButton
                                sx={{pl: 2}}
                                key={subPage.name}
                                className={`${router.asPath === `/workshops#${subPage.link}` && style.active}`}
                            >
                                <ListItemText
                                    primary={subPage.name}
                                    primaryTypographyProps={{sx:{ textAlign: 'center', fontSize: '1.2rem'}}}
                                />
                            </ListItemButton>
                        </Link>
                    ))}
                </List>
            </Collapse>
        </React.Fragment>
    )

}
