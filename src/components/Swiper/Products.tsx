import React from 'react';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";

const Product = () => {
    return (
        <Box sx={{position:'absolute', display:'flex', justifyContent:'space-between', top:'36vh', left:'50vw', margin:'-32vh 0 0 -38vw', minWidth:'400px', width:'75vw', height:'300px'}}>
            <Box sx={{marginTop:15, marginBottom:15}}>
                <IconButton ><ArrowBackIosIcon/></IconButton>
            </Box>
            <Box sx={{width:'85%'}}>
                <Swiper
                    slidesPerView={2}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 45,
                        }
                    }}
                    
                    spaceBetween={50}
                    >
                    <SwiperSlide>
                        <Card sx={{maxWidth:180, minWidth:180}}>
                            <CardMedia component='img' src='https://corebiz-test.herokuapp.com/images/product-1.png'/>
                            <CardContent sx={{backgroundColor:'#e6e8ea', textAlign:'center', padding:'0 0 0 0'}}>
                                <Typography fontSize={12} color='#959596'>ZAPATO FLOTADOR NEGRO</Typography>
                                <Rating value={4} />
                                <Typography fontSize={10} color='#959596'>de $ 400.00</Typography>
                                <Typography fontSize={16}>por $ 259.90</Typography>
                                <Typography fontSize={10} color='#959596'>o en 9x de R $28.87</Typography>
                            </CardContent>
                            <CardActions sx={{backgroundColor:'#e6e8ea', paddingBottom:2}}>
                                <Button style={{margin: '0 auto'}} variant='contained' color='secondary' >COMPRAR</Button>
                            </CardActions>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card sx={{maxWidth:180, minWidth:180}}>
                            <CardMedia component='img'  src='https://corebiz-test.herokuapp.com/images/product-2.png'/>
                            <CardContent sx={{backgroundColor:'#e6e8ea', textAlign:'center', padding:0}}>
                                <Typography fontSize={12} color='#959596'>ZAPATO FLOTADOR NEGRO</Typography>
                                <Rating value={4} />
                                <Typography fontSize={10} color='#959596'>de $ 400.00</Typography>
                                <Typography fontSize={16}>por $ 259.90</Typography>
                                <Typography fontSize={10} color='#959596'>o en 9x de R $28.87</Typography>
                            </CardContent>
                            <CardActions sx={{backgroundColor:'#e6e8ea', paddingBottom:2}}>
                                <Button style={{margin: '0 auto'}} variant='contained' color='secondary' >COMPRAR</Button>
                            </CardActions>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card sx={{maxWidth:180, minWidth:180}}>
                            <CardMedia component='img'  src='https://corebiz-test.herokuapp.com/images/product-3.png'/>
                            <CardContent sx={{backgroundColor:'#e6e8ea', textAlign:'center', padding:0}}>
                                <Typography fontSize={12} color='#959596'>ZAPATO FLOTADOR NEGRO</Typography>
                                <Rating value={4} />
                                <Typography fontSize={10} color='#959596'>de $ 400.00</Typography>
                                <Typography fontSize={16}>por $ 259.90</Typography>
                                <Typography fontSize={10} color='#959596'>o en 9x de R $28.87</Typography>
                            </CardContent>
                            <CardActions sx={{backgroundColor:'#e6e8ea', paddingBottom:2}}>
                                <Button style={{margin: '0 auto'}} variant='contained' color='secondary' >COMPRAR</Button>
                            </CardActions>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card sx={{maxWidth:180, minWidth:180}}>
                            <CardMedia component='img' src='https://corebiz-test.herokuapp.com/images/product-4.png'/>
                            <CardContent sx={{backgroundColor:'#e6e8ea', textAlign:'center', padding:0}}>
                                <Typography fontSize={12} color='#959596'>ZAPATO FLOTADOR NEGRO</Typography>
                                <Rating value={4} />
                                <Typography fontSize={10} color='#959596'>de $ 400.00</Typography>
                                <Typography fontSize={16}>por $ 259.90</Typography>
                                <Typography fontSize={10} color='#959596'>o en 9x de R $28.87</Typography>
                            </CardContent>
                            <CardActions sx={{backgroundColor:'#e6e8ea', paddingBottom:2}}>
                                <Button style={{margin: '0 auto'}} variant='contained' color='secondary' >COMPRAR</Button>
                            </CardActions>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card sx={{maxWidth:180, minWidth:180}}>
                            <CardMedia component='img' src='https://corebiz-test.herokuapp.com/images/product-1.png'/>
                            <CardContent sx={{backgroundColor:'#e6e8ea', textAlign:'center', padding:0}}>
                                <Typography fontSize={12} color='#959596'>ZAPATO FLOTADOR NEGRO</Typography>
                                <Rating value={4} />
                                <Typography fontSize={10} color='#959596'>de $ 400.00</Typography>
                                <Typography fontSize={16}>por $ 259.90</Typography>
                                <Typography fontSize={10} color='#959596'>o en 9x de R $28.87</Typography>
                            </CardContent>
                            <CardActions sx={{backgroundColor:'#e6e8ea', paddingBottom:2}}>
                                <Button style={{margin: '0 auto'}} variant='contained' color='secondary' >COMPRAR</Button>
                            </CardActions>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </Box>
            <Box sx={{marginTop:15, marginBottom:15}}>
                <IconButton ><ArrowForwardIosIcon/></IconButton>
            </Box>
        </Box>
    );
}

export default Product;