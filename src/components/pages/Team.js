import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';


function Team() {

  return (
    <>
      <Helmet>
        <title>ANAtOLIA | Team</title>
        <meta name="description" content="Details of the ANAtOLIA project team" />
        <link rel="canonical" href="/team" />
      </Helmet>
      <Typography sx={{ pt: 5, fontSize: { sm: '3em', xs: '2em' } }} component="h1" variant='h2'>Team</Typography>
      <Box display="flex" textAlign="center">
        <Grid sx={{ textAlign: 'center', py: '3em', justifyContent: 'center' }} container rowSpacing={4} columnSpacing={4}>
          <Grid item md sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: 350 }}>
              <CardMedia
                component="img"
                position='top'
                sx={{ maxWidth: "100%", height: "200px" }}
                image="https://mairiesportive972.fr/wp-content/uploads/2020/11/default-avatar-1000.jpg"
                alt="Avatar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Aziz Ziad
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Principal Investigator
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: 350 }}>
              <CardMedia
                component="img"
                position='top'
                sx={{ maxWidth: "100%", height: "200px" }}
                image="https://mairiesportive972.fr/wp-content/uploads/2020/11/default-avatar-1000.jpg"
                alt="Avatar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Christophe Giordano
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Project Manager
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: 350 }}>
              <CardMedia
                component="img"
                position='top'
                sx={{ maxWidth: "100%", height: "200px" }}
                image="https://mairiesportive972.fr/wp-content/uploads/2020/11/default-avatar-1000.jpg"
                alt="Avatar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Yan Fantei Caujolle
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Software Developper
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: 350 }}>
              <CardMedia
                component="img"
                position='top'
                sx={{ maxWidth: "100%", height: "200px" }}
                image="https://mairiesportive972.fr/wp-content/uploads/2020/11/default-avatar-1000.jpg"
                alt="Avatar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Thibaud Charbonnel
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Software Developper
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: 350 }}>
              <CardMedia
                component="img"
                position='top'
                sx={{ maxWidth: "100%", height: "200px" }}
                image="https://mairiesportive972.fr/wp-content/uploads/2020/11/default-avatar-1000.jpg"
                alt="Avatar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Adrien Gillioën
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: 350 }}>
              <CardMedia
                component="img"
                position='top'
                sx={{ maxWidth: "100%", height: "200px" }}
                image="https://mairiesportive972.fr/wp-content/uploads/2020/11/default-avatar-1000.jpg"
                alt="Avatar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Damien Vedani
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: 350 }}>
              <CardMedia
                component="img"
                position='top'
                sx={{ maxWidth: "100%", height: "200px" }}
                image="https://mairiesportive972.fr/wp-content/uploads/2020/11/default-avatar-1000.jpg"
                alt="Avatar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Christophe Bailet
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: 350 }}>
              <CardMedia
                component="img"
                position='top'
                sx={{ maxWidth: "100%", height: "200px" }}
                image="https://mairiesportive972.fr/wp-content/uploads/2020/11/default-avatar-1000.jpg"
                alt="Avatar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Eric Aristidi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: 350 }}>
              <CardMedia
                component="img"
                position='top'
                sx={{ maxWidth: "100%", height: "200px" }}
                image="https://mairiesportive972.fr/wp-content/uploads/2020/11/default-avatar-1000.jpg"
                alt="Avatar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Marcel Carbillet
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Team;