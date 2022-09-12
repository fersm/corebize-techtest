import React, {Suspense, useState} from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


import Product from '../../components/Swiper/Products';
import Carrousel from '../../components/Swiper/Carrousel';


const MainPage = () => {
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#B2B2B2',
            borderBottom: 0,
          },
        '& .MuiFilledInput-root:after': {
            borderBottom: 0,
        },
        '& .MuiFilledInput-root:before': {
            borderBottom: 0,
        },
        '& .MuiFilledInput-root': {
            '& fieldset': {
              borderColor: 'red',
            },
            '&:hover fieldset': {
              borderColor: 'yellow',
              borderBottom: 0,
            }
        },
        '& .MuiInputBase-input': {
            backgroundColor: '#ffffff',
            border: 0,
            borderBottom: 0,
        }
    });


    return (
        <>
            <Box sx={{height: '30vh', maxHeight:'400px', minHeight:'320px'}}>
                <Carrousel></Carrousel>
            </Box>
            <Box sx={{position:'relative', width:'100%', height:'36vh', minHeight:'350px'}}>
                <Box sx={{position:'absolute', marginTop:'10px', left:'18vw'}}>
                    <Box >
                        <Typography>Más vendidos</Typography>
                        <Box sx={{border: 0, height:'4px', width:'40px', margin:'6px 0', backgroundColor:'primary.dark'}}></Box>
                    </Box>
                </Box>
                <Product/>                
            </Box>
            <Box sx={{width:'100%', height:'10vh', minHeight:'120px', backgroundColor:'#f2f2f2'}}>
                <Grid container direction={'column'} alignItems='center' alignContent={'center'}>
                    <Grid item xs={12}>
                        <Typography sx={{marginTop:2, color:'#333333'}} fontFamily='Circular Std-Medium' fontWeight={700} fontSize={20}>¡Únete a nuestras novedades y promociones!</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container columnSpacing={2}>
                            <Grid item xs={5}>
                                <CssTextField fullWidth sx={{borderBottom:0}} variant='filled' label='Ingresa tu nombre'></CssTextField>
                            </Grid>
                            <Grid item xs={6}>
                                <CssTextField fullWidth variant='filled' label='Ingresa tu mail'></CssTextField>
                            </Grid>
                            <Grid item xs={1}>
                                <Button sx={{height:'50px', textTransform:'none'}} variant='contained' color='secondary'>Suscribirme</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default MainPage;