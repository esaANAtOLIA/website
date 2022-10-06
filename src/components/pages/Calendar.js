import { Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../../App.css';

export default function Calendar() {
  
  return (
    <>
      <Helmet>
        <title>ANAtOLIA | Calendar</title>
        <meta name="description" content="This is the calendar of the project. You can see the progress here" />
        <link rel="canonical" href="/calendar" />
      </Helmet>
      <div className='content'>
        <Typography sx={{ pt: 5, fontSize: { sm: '3em', xs: '2em' } }} component="h1" variant='h2' >Calendar</Typography>
        <Typography sx={{ mt: 5 }}>The ANAtOLIA project is divided in 27 work packages spread over 4 years and including 8 different milestones. The Gantt diagram shown
          below present the calendar of the project with all work packages.</Typography>
        <Typography>The 2 first years are dedicated to the preliminary study of useful parameters, databases, and the monitor able to measure them.
          In this period, we will also be focused on the selection of location to monitor and on the design and manufacture of the CATM-GSE station.</Typography>
        <Typography id='last'>The last 2 years will be dedicated to the monitoring campaign, to the data analysis and to the correlation with other sources of data.</Typography>
        <img className='calendar' src='/images/calendar.png' alt='calendar' title='calendar'></img>
      </div>
    </>
  );
}
