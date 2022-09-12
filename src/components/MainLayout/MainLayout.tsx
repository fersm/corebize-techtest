import React from 'react';

import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const MainLayout = () => {

    return(
        <Box sx={{display:'flex', flexDirection:'column', minHeight:'300px'}}>
            <Header/>
            <Container maxWidth={false} sx={{minWidth:'300px', marginTop:8, flex: '1 0 auto', paddingLeft:'0 !important', paddingRight:'0 !important' }}>
                <Outlet/>
            </Container>
            <Footer/>
        </Box>
    )
}

export default MainLayout;