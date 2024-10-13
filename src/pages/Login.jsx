import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Link, Paper, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export default function Login() {
     const navigate = useNavigate();
     const handleSubmit = () => {
          event.preventDefault();
          console.log("Login")
          navigate('/Home')

     }
     return (
          <>
               <Container maxWidth="xs">
                    <Paper elevation={10} sx={{ marginTop: 2, padding: 2 }}>
                         <Avatar
                              sx={{
                                   mx: "auto",
                                   textAlign: "center",
                                   mb: 1,
                              }}
                         >
                              <LockOutlinedIcon />
                         </Avatar>
                         <Typography component='h1' variant='h5' sx={{ textAlign: "center" }}>
                              Sign In
                         </Typography>
                         <Box
                              component="form"
                              onSubmit={handleSubmit}
                              noValidate
                              sx={{ mt: 1 }}>
                              <TextField
                                   placeholder='Enter username'
                                   fullWidth
                                   required
                                   autoFocus
                                   sx={{ mb: 2 }}
                              />
                              <TextField
                                   placeholder='Enter password'
                                   fullWidth
                                   required
                                   type='password'
                              />
                              <FormControlLabel
                                   control={<Checkbox value='remember' color='primary' />}
                                   label='Remember me'
                              />
                              <Button type='submit'
                                   variant='contained'
                                   fullWidth
                                   sx={{ mt: 1 }}
                              >
                                   Sign In
                              </Button>
                         </Box>
                         <Grid container justifyContent='space-between' sx={{ mt: 1 }}>
                              <Grid item='true'>
                                   <Link component={RouterLink} to="/forgot">
                                        Forgot password?
                                   </Link>
                              </Grid>
                              <Grid item='true'>
                                   <Link component={RouterLink} to="/register">
                                        Sign Up
                                   </Link>
                              </Grid>
                         </Grid>
                    </Paper>
               </Container>
          </>
     )
}