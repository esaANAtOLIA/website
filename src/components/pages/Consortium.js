import { Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../../App.css';

export default function Consortium() {

    return (
        <>
            <Helmet>
                <title>ANAtOLIA | Consortium</title>
                <meta name="description" content="The consortium leading this ANAtOLIA project is composed of the followinf european partners" />
                <link rel="canonical" href="/consortium" />
            </Helmet>
            <div className='content'>
                <Typography sx={{ pt: 5, fontSize: { sm: '3em', xs: '2em' } }} component="h1" variant='h2' >Consortium</Typography>
                <Typography sx={{ mt: 5 }}>The consortium leading this ANAtOLIA project is composed of the following european partners (see figure below):</Typography>
                <ul className='css-ahj2mt-MuiTypography-root' style={{ marginBottom: "5%" }}>
                    <li>CNRS-OCA-Lagrange Laboratory</li>
                    <li>CNRS-LatmosAirbus DS FR (ADS-FR)</li>
                    <li>Thales Alenia Space (TAS)</li>
                    <li>Norway University (NTNU)</li>
                    <li>CNRS-ICARE/AERIS</li>
                    <li>OCA-Lagrange Technical Direction</li>
                    <li>Reuniwatt</li>
                    <li>Cimel</li>
                </ul>
                <img className='presentation' src='/images/Organigramme.png' alt='Organigramme' title='organigramme'></img>
            </div>
        </>
    );
}