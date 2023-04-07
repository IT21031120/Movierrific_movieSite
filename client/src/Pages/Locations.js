import { Card, CardContent, Grid, Paper, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import plc1 from '../Images/filmHall1.jpg'
import plc2 from '../Images/filmhall2.jpg'
import plc3 from '../Images/filmhall3.jpg'

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}))

function Locations() {
    const classes = useStyle();
    return (
        <>
            <Container style={{ marginTop: '5px', marginBottom: '15px' }}>
                <h2>Locations</h2>
                <br />
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Card>
                                <img
                                    src={plc1}
                                    style={{ width: '100%', height: '350px' }}
                                />
                                {/* <CardContent> */}
                                <Typography gutterBottom variant="h5" component="h2" style={{ marginLeft: '10px' }}>
                                    Liberty by MovieTraffic Cinemas
                                </Typography>
                                {/* </CardContent> */}
                                <CardContent>
                                    <Button href='/LibertyMovieTraffic'>
                                        View Location
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card>
                                <img
                                    src={plc2}
                                    style={{ width: '100%', height: '350px' }}
                                />
                                {/* <CardContent> */}
                                <Typography gutterBottom variant="h5" component="h2" style={{ marginLeft: '10px' }}>
                                    New MovieTraffic Colombo
                                </Typography>
                                {/* </CardContent> */}
                                <CardContent>
                                    <Button>
                                        View Location
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card>
                                <img
                                    src={plc3}
                                    style={{ width: '100%', height: '350px' }}
                                />
                                {/* <CardContent> */}
                                <Typography gutterBottom variant="h5" component="h2" style={{ marginLeft: '10px' }}>
                                    The Movie House By MovieTraffic
                                </Typography>
                                {/* </CardContent> */}
                                <CardContent>
                                    <Button>
                                        View Location
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </div>


            </Container>
        </>
    )
}

export default Locations