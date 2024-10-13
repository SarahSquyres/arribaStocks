import React from "react";
import logo from "../assets/logo.png"
import { Box, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link as RouterLink } from 'react-router-dom';

export default function NavBar() {
     return (
          <>
               <Grid container justifyContent='space-between'  sx={{ padding: 2 }}>
                    <Grid item xs={6}>
                         <Grid container alignItems='center'>
                              <Grid item>
                                   <img src={logo} alt="Arriba Stocks Logo" className="logo" />
                              </Grid>
                              <Grid item>
                                   <h1><span className="first-letter">A</span>rriba<span className="first-letter">S</span>tocks</h1>
                              </Grid>
                         </Grid>
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: 'right' }}>
                         <Link component={RouterLink} to="/">
                              Logout
                         </Link>
                    </Grid>
               </Grid>
          </>
     )
}