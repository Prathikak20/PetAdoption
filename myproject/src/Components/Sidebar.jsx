import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Link,  useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
 const navigate=useNavigate();
 const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handlelogout=()=>{
   // alert("logout")
    localStorage.removeItem('Admin')
    navigate('/Login')
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          {text:'AddPet',route:'/Addpet',icon:<InboxIcon/>},
          {text:'ViewPet',route:'/Viewpet',icon:<MailIcon/>},
          {text:'Home',route:'/Sidebar',icon:<HomeIcon/>},
          
        ].map((item)=>(
   <ListItem key={item.text} disablePadding>
            <Link to={item.route} style={{textDecoration:'none',color:'inherit'}}>
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}/>
              </ListItemButton>

            </Link>
           </ListItem>
        ))}
      </List>
      <Divider />
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:'pink'
       
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar alt="Dog logo"  sx={{ width: 56, height: 56 }}src="https://i.pinimg.com/originals/d6/c1/28/d6c128f9989729710291b50b90772126.jpg" />
          <Typography style={{color:'black',fontSize:'30px',fontVariantCaps:'petite-caps'}}>
            Pet Adoption Center
          </Typography>
          <Button onClick={handlelogout} variant='outlined' color="inherit" sx={{marginLeft:'auto',color:'black',backgroundColor:'rgb(205, 245, 253)',border:'2px solid black'}}>LOGOUT</Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth ,backgroundColor:'#FFE5E5'},
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  
  window: PropTypes.func,
};

export default ResponsiveDrawer;
