import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import '../../App.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Helmet } from 'react-helmet-async';

export default function Contact() {

  return (
    <>
      <Helmet>
        <title>ANAtOLIA | Contact</title>
        <meta name="description" content="If you have any question about the project, contact us" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <Box style={{ textAlign: "center" }} sx={{ width: '100%' }}>
        <Typography sx={{ pt: 5, fontSize: { sm: '3em', xs: '2em' } }} component="h1" variant='h2'>Contact</Typography>
        <Grid container rowSpacing={4} columnSpacing={1}>
          <Grid item sm xs={12} sx={{ mt: 20 }}>
            <LocalPhoneIcon sx={{ height: 125, width: 125 }} />
            <Typography><a style={{ textDecoration: "none", color: "black", fontFamily: 'grifterbold' }} href='tel:+334489150381'>+33 4 89 15 03 81</a></Typography>
          </Grid>
          <div className="vertical"></div>
          <Grid item sm xs={12} sx={{ my: 20 }}>
            <EmailIcon sx={{ height: 125, width: 125 }} />
            <Typography ><a style={{ textDecoration: "none", color: "black", fontFamily: 'grifterbold' }} href='mailto:aziz.ziad@univ-cotedazur.fr'>aziz.ziad@univ-cotedazur.fr</a></Typography>
            <Typography ><a style={{ textDecoration: "none", color: "black", fontFamily: 'grifterbold' }} href='mailto:christophe.giordano@oca.eu'>christophe.giordano@oca.eu</a></Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}