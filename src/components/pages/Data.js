import { Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../../App.css';

export default function Data() {

    return (
        <>
            <Helmet>
                <title>ANAtOLIA</title>
                <meta name="description" content="Atmospheric moNitoring to Assess the availability of Optical LInks through the Atmosphere" />
                <link rel="canonical" href="/" />
            </Helmet>
            <div className='content'>
                <Typography sx={{ pt: 5, fontSize: { sm: '3em', xs: '2em' } }} component="h1" variant='h2'>Data</Typography>
                <Typography component="h2" variant='h1' sx={{ textAlign: "center", py: 25 }}>Data are not yet available but will be soon</Typography>
            </div>
        </>
    );
}