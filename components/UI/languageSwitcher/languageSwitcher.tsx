"use client"
import React from 'react';
import { Menu, MenuItem, IconButton, Tooltip } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { switchLanguage } from '@/store/slices/appLanguage';

const languages = [
    { code: 'en', label: 'English', rtl: false },
    { code: 'fa', label: 'فارسی', rtl: true },
];

export default function LanguageSwitcher() {

    const languageInfo = useAppSelector(state => state.appLanguage)
    const dispatch = useAppDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleLanguageChange = (lang: any) => {
        dispatch(switchLanguage({ lang: { name: lang.code, rtl: lang.rtl } }))
        handleClose();
    };

    return (
        <>
            <Tooltip title="تغییر زبان">
                <IconButton
                    onClick={handleClick}
                    size="large"
                    color="inherit"
                >
                    <LanguageIcon />
                </IconButton>
            </Tooltip>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {languages.map((lang) => (
                    <MenuItem
                        key={lang.code}
                        selected={lang.code === languageInfo.lang?.name}
                        onClick={() => handleLanguageChange(lang)}
                    >
                        {lang.label}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}