import React from 'react';
import { Badge, Typography } from '@mui/material';

const Category = ({ children, styleInfo }) => {
    const colorKey = {
        News: "info",
        Explication: "success",
        Information: "warning"
    }
    return (
        <Typography component='h5' sx={styleInfo}>
            <Badge sx={{ py: 2 }} badgeContent={children} color={colorKey[children]} />
        </Typography>
    )
}

export default Category;