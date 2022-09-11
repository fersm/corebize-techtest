import React from 'react';

import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const MainLayout = () => {

    return(
        <Box sx={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
            <Header/>
            <Container maxWidth={false} sx={{marginTop:8, flex: '1 0 auto'}}>
                <Outlet/>
            </Container>
            <Footer/>
        </Box>
    )
}

export default MainLayout;