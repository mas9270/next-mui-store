import React from 'react'
import { Box, AppBar, Toolbar, Typography } from '@mui/material'

import { ThemeSwitch, LanguageSwitcher, LoginRegister, SwipeableTemporaryDrawer, Shopping } from '@/components/UI'


export default function Header() {


    return (
        <Box component={"header"} width={"100%"}>
            <AppBar position="static" >
                <Toolbar >
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',

                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: "start",
                            alignItems: 'center',
                            width: '100%',
                        }}>
                            <Box sx={{ paddingRight: "5px", paddingLeft: "5px" }}>
                                <SwipeableTemporaryDrawer />
                            </Box>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: 'center',
                            width: '100%',
                        }}>
                            <Box sx={{ paddingRight: "5px", paddingLeft: "5px" }}>
                                <Typography variant='h4'>لوگو</Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: "end",
                            alignItems: 'center',
                            width: '100%',
                        }}>
                            <Box sx={{ paddingRight: "10px", paddingLeft: "10px" }}>
                                <Shopping />
                            </Box>
                            <Box sx={{ paddingRight: "10px", paddingLeft: "10px" }}>
                                <LoginRegister />
                            </Box>
                            <Box sx={{ paddingRight: "5px", paddingLeft: "5px" }}>
                                <ThemeSwitch />
                            </Box>
                            <Box sx={{ paddingRight: "5px", paddingLeft: "5px" }}>
                                <LanguageSwitcher />
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}