import { Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../../App.css';

export default function Presentation() {

  return (
    <>
      <Helmet>
        <title>ANAtOLIA | Presentation</title>
        <meta name="description" content="In 2019, the European Space Agency (ESA) has published a Call for Tender (CfT) for a 4-year project." />
        <link rel="canonical" href="/presentation" />
      </Helmet>
      <div className='content'>
        <Typography sx={{ pt: 5, fontSize: { sm: '3em', xs: '2em' } }} component="h1" variant='h2'>Presentation</Typography>
        <Typography sx={{ mt: 5 }}>In 2019, the European Space Agency (ESA) has published a Call for Tender (CfT) for a 4-year project.
          The purpose is the measurements of atmospheric conditions above different site around the world thanks to a measurement station called
          CATM-GSE (Clouds Aerosols and Turbulence Monitoring – Ground Support Equipment) to assess the optical telecommunication links availability.
          This campaign should late at least for two years. These measurements will be then correlated to long-term satellite databases to assess the
          possibility of using these later for a long-term site characterization without using in-situ measurements.</Typography>
        <Typography>In this context, the CNRS/OCA/Lagrange Lab. has gathered a consortium called ANAtOLIA (Atmospheric moNitoring to Assess the availability of
          Optical LInks through the Atmosphere), and composed of European research laboratories, industrials and companies has shown on the organigram
          below. The partners of the consortium are:</Typography>
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
        <img className='content' src='/images/Organigramme.png' alt='Organigramme' title='organigramme' />
        <Typography>The main missions of the ANAtOLIA consortium are:</Typography>
        <ul className='css-ahj2mt-MuiTypography-root'>
          <li>To design, manufacture, procure and assembly a self-standing and autonomous ground support equipment precisely measuring the clouds,
            aerosols and turbulence conditions for atmospheric transmission characterization.</li>
          <li>To install and commission this equipment on selected ground location in ESA member states or in their vicinity.</li>
          <li>To monitor continuously local atmospheric conditions for a sufficiently long period (³24 months).</li>
          <li>To correlate these local ground measurements with long-terms satellites database. The purpose is to validate these databases in order
            to use them for longer term site characterizations.</li>
        </ul>
        <Typography>Initially, ESA planned to have a monitoring campaign above 8-10 sites around the world for a 2M€ budget.
          Considering the instruments needed to measure atmospheric parameters with the best possible precision, and the work to be delivered to
          achieve the ESA goals, the ANAtOLIA consortium has considered this budget too low for such a number of sites.</Typography>
        <Typography>Therefore, the consortium and ESA agreed to reduce the number of sites to monitor to 4 and to limit their location in Europe.
          To monitor this site, the consortium will build 2 portable CATM-GSE station to yvisits 3 sites as follow:</Typography>
        <ul className='css-ahj2mt-MuiTypography-root'>
          <li>1 site for a 2-year campaign</li>
          <li>2 sites for a 1-year campaign successively</li>
        </ul>
        <Typography>The 4th monitored site will be the Calern Observatory, already hosting the Calern Atmospheric Turbulence Station (CATS) since 2015.</Typography>
        <Typography>The CATM-GSE station is then composed of the following set of complementary instruments:</Typography>
        <ul className='css-ahj2mt-MuiTypography-root' style={{ marginBottom: "5%" }}>
          <li>The Generalized Monitor of Turbulence, dedicated to the optical turbulence monitoring will be design and manufacture by the Lagrange
            laboratory (CNRS/UCA/OCA) and will be able to measure during both daytime and nighttime the turbulence conditions.The Reuniwatt SkyInsight
            InfraRed Camera is a wide field sky imager which monitors, 24h/day the cloud conditions (coverage, thickness, …) of the entire sky.</li>
          <li>The SkyInsight is an off the shelf instrument already validated and confirmed.</li>
          <li>The Cimel CE318-T multispectral photometer is dedicated to the monitoring of aerosols conditions during both daytime and nighttime.
            As for the SkyInsight, the CE318-T is an off the shelf instrument worldwide validated and confirmed.</li>
        </ul>
        <img className='content' src='/images/Anatolia.jpg' alt='Anatolia' title='Anatolia'/>
      </div>
    </>
  );
}
