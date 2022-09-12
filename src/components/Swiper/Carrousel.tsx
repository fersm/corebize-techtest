import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";

import img1 from '../../assets/images/swipe/online.jpg';


const Carrousel = () => {

    return (
        <Swiper 
                slidesPerView={1} 
                autoplay={{delay: 2500, disableOnInteraction: false}} 
                pagination={true} 
                modules={[Autoplay, Pagination]} 
                className="mySwiper" 
                style={{width:'100%', height:'100%'}}
                >
                <SwiperSlide>
                    <Box sx={{position:'relative', display:'flex', height:'100%', alignItems:'stretch'}}>
                        <Box style={{position:'absolute', width:'55%', height:'100%', right:'0%', backgroundColor:'red'}}>
                            <img src={img1} alt='' style={{position:'absolute', objectFit: 'none', width:'100%', height:'100%', right:'0%'}}/>
                        </Box>
                        
                        <Box style={{position:'absolute', width:'50%', height:'100%'}} >
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                                <path d="M559.53,-77.47 C358.07,79.43 628.95,87.33 373.30,259.03 L-2.54,154.43 L-5.35,-0.48 Z" style={{stroke: 'none', fill: '#000'}}></path>
                            </svg>
                                                            
                        </Box>
                        <Box style={{position:'absolute', width:'50%', height:'100%'}}>
                            <Box style={{position:'absolute', top:'30%', left:'40%'}}>
                                <Typography color={'white'} style={{marginBottom:20}} fontSize={24}>¡Hola! ¿Qué es lo que buscas?</Typography>
                                <Typography color={'white'} style={{lineHeight:'1'}} fontSize={40} fontWeight={800} maxWidth='450px'>Crear o migrar tu comercio electrónico?</Typography>
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{position:'relative', display:'flex', height:'100%', alignItems:'stretch'}}>
                        <Box style={{position:'absolute', width:'55%', height:'100%', right:'0%', backgroundColor:'red'}}>
                            <img src={img1} alt='' style={{position:'absolute', objectFit: 'none', width:'100%', height:'100%', right:'0%'}}/>
                        </Box>
                        
                        <Box style={{position:'absolute', width:'50%', height:'100%'}} >
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                                <path d="M559.53,-77.47 C358.07,79.43 628.95,87.33 373.30,259.03 L-2.54,154.43 L-5.35,-0.48 Z" style={{stroke: 'none', fill: '#000'}}></path>
                            </svg>
                                                            
                        </Box>
                        <Box style={{position:'absolute', width:'50%', height:'100%'}}>
                            <Box style={{position:'absolute', top:'30%', left:'40%'}}>
                                <Typography color={'white'} style={{marginBottom:20}} fontSize={24}>¡Hola! ¿Qué es lo que buscas?</Typography>
                                <Typography color={'white'} style={{lineHeight:'1'}} fontSize={40} fontWeight={800} maxWidth='450px'>Crear o migrar tu comercio electrónico?</Typography>
                            </Box>
                        </Box>
                    </Box>    
                </SwiperSlide>
            </Swiper>
    );
}

export default Carrousel;