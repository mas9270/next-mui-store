"use client"
import React, { } from 'react';
import Badge from '@mui/material/Badge';
import { ShoppingCart  } from "@mui/icons-material"


export default function Shopping() {
    return (
        <Badge badgeContent={4} color="primary">
            <ShoppingCart  color="action" />
        </Badge>
    );
}