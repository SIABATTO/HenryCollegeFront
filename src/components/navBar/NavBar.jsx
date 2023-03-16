import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import imageLogo from '../../assets/images/ISOLOGO_HENRY_BLACK.png'
import React from 'react';


const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          {/* <MenuIcon /> */}
          <img style={{ width : '45px'}} src={imageLogo} alt="logo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            College
          </Typography>
          <Button sx={{ mr: 2 }} color="warning">Henry</Button>
          {/* <Link to={"/courses"}>
            <Button sx={{ mr: 2 }} color="inherit">Cursos</Button>
          </Link> */}
          <Button sx={{ mr: 2 }} color="inherit">FAQs</Button>
          <Button sx={{ mr: 2 }} color="inherit">Nosotros</Button>
          <Button sx={{ mr: 2 ,bgcolor:'#ffff00',color:'#212121'}} variant="contained">Crear Cuenta</Button>
          <Button sx={{ mr: 2 ,bgcolor:'#212121',color:'#fffde7'}} variant="contained">Iniciar sesión</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar