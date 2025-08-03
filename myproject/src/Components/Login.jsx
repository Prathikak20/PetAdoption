import  React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
     
    </Typography>
  );
}



const defaultTheme = createTheme();

export default function Login({setCount,count}) {
let nav=useNavigate()
const[logindata,setLoginData]=useState({

});

const handleChange=(e)=>{
  setLoginData({...logindata,[e.target.name]:e.target.value})
};

const handleLogin=()=>{
  const storedData=JSON.parse(localStorage.getItem('data'));
  if(logindata.Myemail==storedData.Myemail&& logindata.Mypassword==storedData.Mypassword){
    localStorage.setItem("Admin",JSON.stringify("Admin"))
    setCount(!count)
    nav('/addPet')
    alert("Login Successful")
  }else{
    alert("Incorrect Crendentials")
  }
};


  return (
    <ThemeProvider  theme={defaultTheme}>
      < Grid  container  component="main" maxWidth="xs">
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg)',
            backgroundRepeat: 'no-repeat',
         
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
         <Grid item xs={12} sm={6} md={5} component={Paper} elevation={10} square>


        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
      
            
      
            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Sigin
          </Typography>
          <Box component="form"  onSubmit={handleLogin} noValidate sx={{ mt: 25}} >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="Myemail"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Mypassword"
              label="Password"
              type='password'
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
          
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              LOGIN
            </Button>
           
              
          </Box>
         </Box>
        </Grid>
    
        </Grid>
        
      
    
    </ThemeProvider>
  );
}