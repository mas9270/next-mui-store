"use client"
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Menu } from '@mui/icons-material';
import { useMediaQuery, useTheme, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';



type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function SwipeableTemporaryDrawer() {

  const [state, setState] = useState<boolean>(false);
  const anchor = "left"
  const theme = useTheme();
  const pathname = usePathname(); // مسیر فعلی (بدون query string)
  const activeLinkStyle = "#90caf9"
  const currentList = [
    { path: "/", text: "خانه" },
    { path: "/products", text: "محصولات" },
    { path: "/about-us", text: "درباره ما" },
  ]

  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSmUp = useMediaQuery(theme.breakpoints.only('sm'));
  const isMdDown = useMediaQuery(theme.breakpoints.only('md'));

  const toggleDrawer = (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };


  const menuOnDrawer = () => {

    return (
      <>
        <Menu
          sx={{ fontSize: "24px", cursor: "pointer", display: "flex", alignItems: "center" }}
          onClick={(e: any) => {
            e.stopPropagation()
            setState(true)
          }}
        />
        <SwipeableDrawer
          anchor={anchor}
          open={state}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <List>
              {currentList.map((item, index) => {
                return (
                  <Link
                    href={item.path}
                    style={{
                      all: "unset",
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "inherit"
                    }} >
                    <ListItem
                      key={index}
                      disablePadding
                    >
                      <ListItemButton >
                        {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                        <ListItemText >
                          <Box sx={{ color: item.path === pathname ? activeLinkStyle : "" }}>{item.text}</Box>
                          {/* currentPath */}
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </Link>
                )
              })}
            </List>
            {/* <Divider /> */}
          </Box>
        </SwipeableDrawer>
      </>
    )
  }

  const menuOnList = () => {
    return (
      <Box display={"flex"}>
        {currentList.map((item, index) => {
          return (
            <Link
              href={item.path}
              style={{
                all: "unset",
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit"
              }} >
              <Box
                key={index}
                px={2}
                sx={{ cursor: "pointer", color: item.path === pathname ? activeLinkStyle : "" }}
              >
                <Typography >{item.text}</Typography>
              </Box>
            </Link>
          )
        })}
      </Box>
    )
  }

  return (
    <>
      {isXs || isSmUp || isMdDown ? menuOnDrawer() : menuOnList()}
    </>
  );
}