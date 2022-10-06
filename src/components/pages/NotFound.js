import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    useEffect(() => {
        document.title = "ANAtOLIA | 404 Page Not Found"
    }, [])
    return (
        <div style={{ textAlign: "center", padding: 5 }}>
            <Typography component="h3" variant='h1' sx={{ textAlign: "center", mt: 25, mb: 10 }}>404 Page Not Found</Typography>
            <Typography component="h3" variant='h1' sx={{ textAlign: "center", mt: 25, mb: 10, color: 'black', textDecoration: 'none' }}><Link to="/">Go Back</Link></Typography>
        </div>
    )
}

export default NotFound;