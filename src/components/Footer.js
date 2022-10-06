import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

function Footer() {
  return (
    <div className='footer-container'>
      <Grid sx={{ color: 'white', textAlign: 'center', py: '2em', px: { md: '35%', xs: '1em' } }} container rowSpacing={4} columnSpacing={1}>
        <Grid item sm xs={12} sx={{ display: 'flex', flexDirection: 'column' }} >
          <h2 style={{ marginBottom: '16px' }}>About</h2>
          <Link className="link" to='/presentation'>Presentation</Link>
          <Link className="link" to='/instruments'>Instruments</Link>
          <Link className="link" to='/consortium'>Consortium</Link>
          {/* <Link className="link" to='/team'>Team</Link> */}
        </Grid>
        <Grid item sm xs={12} sx={{ display: 'flex', flexDirection: 'column' }} >
          <h2 style={{ marginBottom: '16px' }}>More</h2>
          <Link className="link" to='/data'>Data</Link>
          <Link className="link" to='/calendar'>Calendar</Link>
          <Link className="link" to='/contact'>Contact</Link>
        </Grid>
      </Grid>
      <Grid sx={{ color: 'white', textAlign: 'center', py: '2em' }} container rowSpacing={4} columnSpacing={1}>
        <Grid item sm xs={12} >
          <a href='https://www.cnrs.fr/en' target='_blank' rel="noreferrer">
            <img src="/images/cnrs.png" alt='cnrs' height="100px" loading="lazy" title='cnrs' />
          </a>
        </Grid>
        <Grid item sm xs={12} >
          <small >ANAtOLIA © {new Date().getFullYear()} - All rights reserved</small>
        </Grid>
        <Grid item sm xs={12} >
          <a href='https://www.esa.int/' target='_blank' rel="noreferrer">
            <img src="/images/esa.png" alt='esa' height="100px" loading="lazy" title='esa' />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
