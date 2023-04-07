import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../Images/mt.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Container } from '@material-ui/core';


function Footer() {
    return (

        <div >
            <Grid
                container
                style={{ height: '300px', backgroundColor: '#0B2447', display: 'flex', justifyContent: 'center' }}
            >
                <Grid item xs={12} md={6} style={{ height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', paddingTop: '5px' }}>
                    <img src={logo} style={{ width: '150px', height: '150px' }} />
                    <p style={{ color: 'white' }}>MovieTraffic Cinema</p>
                    <Container style={{ display: 'flex', justifyContent: 'center' }}>
                        <p><InstagramIcon style={{ color: 'white', marginRight: '15px', cursor: 'pointer' }} /></p>
                        <p><FacebookIcon style={{ color: 'white', marginRight: '15px', cursor: 'pointer' }} /></p>
                        <p><LinkedInIcon style={{ color: 'white', marginRight: '15px', cursor: 'pointer' }} /></p>
                    </Container>

                    <Paper style={{ color: 'white', fontSize: '13px', backgroundColor: 'transparent', padding: '5px', fontWeight: 'bold' }}>Designed and Developed by Vimukthi Maduwantha | 2023</Paper>
                </Grid>

            </Grid>
        </div >
    );
}

export default Footer