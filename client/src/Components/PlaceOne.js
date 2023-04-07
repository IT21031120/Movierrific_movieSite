import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import plc1 from '../Images/filmHall1.jpg'
import { Card, CardContent, Grid, Typography, makeStyles } from '@material-ui/core';
import Button from 'react-bootstrap/esm/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExploreIcon from '@material-ui/icons/Explore';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import GoogleMaps from './GoogleMaps';

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}))
function PlaceOne() {
    const classes = useStyle();
    return (
        <>
            <Container style={{ marginTop: '40px', marginBottom: '40px' }}>
                <h2>Liberty by MovieTraffic Cinemas</h2>
                <img src={plc1} />
                <br />
                <p style={{ fontWeight: 'bold' }}>3D Hall / Air Condition / Cafetaria / Car park / Luxurious seats / Snack Bar</p>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={3} style={{ display: 'flex', justifyContent: 'center' }}>
                            <LocationOnIcon />
                            <div style={{ marginLeft: '10px' }}>
                                137
                                Sir James Pieris Mawatha,
                                Colombo 2
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3} style={{ display: 'flex', }}>
                            <ExploreIcon />
                            <div style={{ marginLeft: '10px' }} >
                                View map
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3} style={{ display: 'flex' }}>
                            <PhoneIcon />
                            <div style={{ marginLeft: '10px' }}>
                                +94 112 325 266
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3} style={{ display: 'flex' }}>
                            <EmailIcon />
                            <div style={{ marginLeft: '10px' }}>
                                movietrafficNew@gmail.com
                            </div>
                        </Grid>
                        <Button>
                            But Tickets
                        </Button>
                    </Grid>
                </div>
                <br />
                <br />
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <h2 style={{ fontFamily: 'Calisto MT' }}>About The Liberty by MovieTraffic Cinema.</h2>
                            <p style={{ fontFamily: 'Century Gothic' }}>A MovieTraffic cinema is a venue dedicated to the exhibition of films, typically featuring multiple movie screens and comfortable seating arrangements. These halls are designed to provide moviegoers with an immersive cinematic experience, with high-quality picture and sound systems, and a darkened environment that allows viewers to fully immerse themselves in the film. Some MovieTraffic cinemas offer additional amenities,
                                such as refreshments and snacks, while others may have a more minimalist approach. The MovieTraffic cinema is an important part of the film industry, providing a communal space for audiences to come together and enjoy the latest movies, whether alone or with friends and family. With the advent of streaming services, the future of MovieTraffic cinemas may be uncertain, but for now, they remain a beloved and essential aspect of the movie-going experience.In addition to high-quality audio and visual systems and comfortable seating,
                                MovieTraffic cinemas often have a variety of other features designed to enhance the movie-watching experience. For example, many MovieTraffic cinemas have large screens that can display films in a wide aspect ratio, allowing for a more immersive viewing experience. They may also have specialized sound systems, such as Dolby Atmos, which can provide a 3D audio experience that further immerses the viewer in the film.
                                MovieTraffic cinemas typically have a range of seating options to cater to different preferences, including standard seating, VIP seats with more legroom, and even recliner seats that allow viewers to fully recline and relax during the movie. Many MovieTraffic cinemas also have temperature-controlled environments, ensuring that viewers remain comfortable throughout the duration of the film.
                                Another important feature of MovieTraffic cinemas is their concession stands, which offer a range of snacks and beverages to enhance the movie-watching experience. These may include classic movie theater snacks like popcorn, candy, and soda, as well as more upscale offerings like gourmet popcorn and craft beer.
                                Overall, the features of MovieTraffic cinemas are designed to create a high-quality movie-watching experience that cannot be replicated at home. From the specialized audio and visual systems to the comfortable seating and delicious snacks, film halls provide an immersive and enjoyable movie-watching experience that keeps audiences coming back for more.</p>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <GoogleMaps />
                            <center>
                                <p>Map view for the MovieTraffic Cinema</p>
                            </center>

                        </Grid>
                    </Grid>
                </div>

            </Container>
        </>
    )
}

export default PlaceOne