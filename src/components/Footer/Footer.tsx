import React, {Suspense, useState} from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';

import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';

import poweredvtex from '../../assets/images/poweredvtex.svg';

const Footer = () => {
    return (
        <BottomNavigation sx={{height:'180px'}}>
            <Box sx={{backgroundColor: 'secondary.main', width:'100%'}}>
                <Box sx={{backgroundColor: 'secondary.main', margin:'auto', width:'80%', padding: '20px 0'}}>
                    <Grid container margin={'auto'} direction='row' justifyContent={'space-evenly'} alignItems={'center'}>
                        <Grid item>
                            <Grid container direction='column' rowSpacing={0.6} justifyContent={'space-around'} alignItems={'flex-start'}>
                                <Grid item xs={12}>
                                    <Typography color={'primary.main'} fontSize={18}>Ubicación</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{border: 0, height:'4px', width:'40px', margin:'6px 0', backgroundColor:'primary.main'}}></Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography color={'primary.dark'} fontFamily='Circular Std-Medium' fontSize={12}>Avenida andrómeda, 2000, bloco 6 e 8</Typography>        
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography color={'primary.dark'} fontFamily='Circular Std-Medium' fontSize={12}>Alphavile SP</Typography>        
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography color={'primary.dark'} fontFamily='Circular Std-Medium' fontSize={12}>brasil@corebiz.ag</Typography>        
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography color={'primary.dark'} fontFamily='Circular Std-Medium' fontSize={12}>+55 11 3090 1039</Typography>        
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container rowSpacing={2} direction='column' alignItems='center'>
                                <Grid item sx={{width:'100%'}}>
                                    <Button fullWidth variant={"contained"} startIcon={<MailOutlineOutlinedIcon/>}>
                                        <Typography fontFamily='Circular Std-Medium' fontSize={10}>Contáctanos</Typography>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button sx={{fontFamily:'Circular Std-Medium'}} fullWidth variant={"contained"} startIcon={<HeadsetMicOutlinedIcon/>}>
                                        <Typography fontFamily='Circular Std-Medium' fontSize={10}>Habla con un consultor</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item >
                            <Grid container columnSpacing={2} direction='row' alignItems='center' alignContent={'space-around'}>
                                <Grid item>
                                    <Typography color={'white'} fontSize={10}>Desarrollado por</Typography>
                                    <img 
                                        style={{filter:'invert(0%) sepia(0%) saturate(2%) hue-rotate(72deg) brightness(113%) contrast(101%)', height:'22px' }} 
                                        src="https://www.corebiz.ag/wp-content/uploads/2020/06/logo-corebiz-global.svg" 
                                        alt='Corebiz Global'/>
                                </Grid>
                                <Grid item>
                                    <img 
                                        style={{filter:'invert(90%) sepia(92%) saturate(26%) hue-rotate(197deg) brightness(106%) contrast(100%)', height:'32px' }} 
                                        src={poweredvtex} 
                                        alt="Powered by VTEX"/>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </BottomNavigation>
    );
}

export default Footer;