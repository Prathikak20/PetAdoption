import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'; 
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { pink } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    </Typography>
  );
}



const defaultTheme = createTheme();

export default function Registration() {
const[data,setData]=React.useState({
  Myname:'',
  Myphone:'',
  Myemail:'',
  Mypassword:'',

});
const handleChange=(e)=>{
  setData({...data,[e.target.name]:e.target.value});
};

const handleClick=()=>{
  localStorage.setItem('data',JSON.stringify(data));
}

const navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      Myname: data.get('Myname'),
      Myphone: data.get('Myphone'),
      Myemail: data.get('Myemail'),
      Mypassword: data.get('Mypassword'),

    });
    navigate('/Login')
    alert("Registration successful")
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      < Grid container component="main" maxWidth="xs">
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://i0.wp.com/unityk9.com/wp-content/uploads/2023/06/Dog2Band2Bcats2B.jpg)',
            backgroundRepeat: 'no-repeat',
         
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
         <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 20,
              mx: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          <Avatar sx={{ m: 1,  bgcolor: pink[500]  }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
       Signup
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Myname"
              label="Name"
              name="Myname"
              autoComplete="Myname"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Myphone"
              label="Phone"
              id="Myphone"
              autoComplete="Myphone"
               autoFocus
               onChange={handleChange}

            />
               <TextField
              margin="normal"
              required
              fullWidth
              name="Myemail"
              label="Email Address"
              id="Myemail"
              autoComplete="Myemail"
              autoFocus
              onChange={handleChange}

            />
               <TextField
              margin="normal"
              required
              fullWidth
              name="Mypassword"
              label="Password"
            type="password"
              id="Mypassword"
              autoComplete="Mypassword"
              onChange={handleChange}

            />

          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              Register
            </Button>
          
          </Box>
        </Box>
        </Grid>
        </Grid>
       
 
    </ThemeProvider>
  );
}