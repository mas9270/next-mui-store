"use client"
import React, { useEffect, useState } from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { createTheme } from '@mui/material/styles';
import { prefixer } from 'stylis';
import rtlPlugin from '@mui/stylis-plugin-rtl';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { changeTheme } from '@/store/slices/appTheme';
import { switchLanguage } from '@/store/slices/appLanguage';
import { Box } from '@mui/material';
import { LoadingSpinner } from '@/components/UI';

export default function Muiprovider(props: { children: React.ReactNode }) {
    const { children } = props

    const dispatch = useAppDispatch()
    const appLanguage = useAppSelector(state => state.appLanguage.lang)
    const appTheme = useAppSelector(state => state.appTheme.theme)
    const [theme, setTheme] = useState<any>(null)


    useEffect(() => {

        if (appLanguage) {
            localStorage.setItem("lang", `${appLanguage.name}-${appLanguage.rtl ? "true" : "false"}`)
            document.dir = appLanguage.rtl ? "rtl" : "ltr"

            if (appTheme) {
                localStorage.setItem("theme", appTheme)
                themeConfig(appTheme, appLanguage.rtl ? "rtl" : "ltr", (currentTheme) => {
                    setTheme(currentTheme)
                })
            }
            else {
                const localtheme = localStorage.getItem("theme")
                if (localtheme === "dark" || localtheme === "light") {
                    dispatch(changeTheme(localtheme))
                }
                else {
                    dispatch(changeTheme("dark"))
                }
            }

        }
        else {
            const localLang = localStorage.getItem("lang")
            const currentLang = localLang ? localLang.split("-")[0] : null
            const currentDir = localLang ? localLang.split("-")[1] : null

            if (
                (currentLang === "fa" && (currentDir === "true")) ||
                (currentLang === "en" && (currentDir === "false"))
            ) {
                dispatch(switchLanguage({ lang: { name: currentLang, rtl: currentDir === "true" } }))
            }
            else {
                dispatch(switchLanguage({ lang: { name: "fa", rtl: true } }))
            }
        }
    }, [appLanguage, appTheme])


    if (appLanguage && theme) {

        const rtlCache = createCache({
            key: appLanguage.rtl ? 'muirtl' : 'muiltr',
            stylisPlugins: appLanguage.rtl ? [prefixer, rtlPlugin] : [prefixer],
        });

        return (
            <AppRouterCacheProvider options={{ key: 'mui' }}>
                <CacheProvider value={rtlCache}>
                    <ThemeProvider theme={theme}>
                        {children}
                    </ThemeProvider>
                </CacheProvider>
            </AppRouterCacheProvider>
        )
    }

    return <LoadingSpinner />
}

function themeConfig(theme: string, appDir: "rtl" | "ltr", callback: (theme: any) => void) {

    switch (theme) {
        case "dark":
            const dark = createTheme({
                direction: appDir,
                palette: {
                    mode: 'dark',
                    // primary: {
                    //     main: '#90caf9', // آبی روشن
                    // },
                    // secondary: {
                    //     main: '#f48fb1', // صورتی کم‌رنگ
                    // },
                    // background: {
                    //     default: '#121212',
                    //     paper: '#1e1e1e',
                    // },
                    // text: {
                    //     primary: '#ffffff',
                    //     secondary: '#b0bec5',
                    // },
                },
                typography: {
                    fontFamily: [
                        'IRANSansX'
                    ].join(','),
                },
            });
            callback(dark)
            break;
        case "light":
            const light = createTheme({
                direction: appDir,
                palette: {
                    mode: 'light',
                    // primary: {
                    //     main: '#1976d2', // آبی اصلی MUI
                    // },
                    // secondary: {
                    //     main: '#ff4081', // صورتی زنده
                    // },
                    // background: {
                    //     default: '#f5f5f5',
                    //     paper: '#ffffff',
                    // },
                },
                typography: {
                    fontFamily: [
                        'IRANSansX'
                    ].join(','),
                },
            });
            callback(light)
            break;
        default:
            break;
    }
}