import React from 'react';

import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import { styled } from '@mui/material/styles';

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const Header = () => {

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#B2B2B2',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#B2B2B2',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#B2B2B2',
            },
            '&:hover fieldset': {
              borderColor: '#B2B2B2',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#B2B2B2',
            },
          },
    });

    return (
        <AppBar color='primary'>
            <Toolbar>
                <Grid container direction='row' justifyContent={'space-evenly'} alignItems={'flex-end'}>
                    <Grid item xs={1}>
                        <img 
                            style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(72deg) brightness(113%) contrast(101%)', height:'35px' }} 
                            src="https://www.corebiz.ag/wp-content/uploads/2020/06/logo-corebiz-global.svg" 
                            alt='Corebiz Global'/>
                    </Grid>
                    <Grid item xs={4}>
                        <CssTextField
                            id="input-with-icon-textfield"
                            label="¿Qué estás buscando?"
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <SearchOutlinedIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )}}
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Grid container columnSpacing={2}>
                            <Grid item>
                                <Button 
                                    variant='text' 
                                    sx={{color:'#979797', textTransform:'none', fontFamily:'Circular Std-Medium'}} 
                                    startIcon={<PersonOutlineOutlinedIcon/>}>Mi Cuenta</Button>        
                            </Grid>
                            <Grid item>
                                <Badge badgeContent={4} color='warning'>
                                    <ShoppingCartOutlinedIcon/>
                                </Badge>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;