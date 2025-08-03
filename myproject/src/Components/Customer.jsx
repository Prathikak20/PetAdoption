import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { useState,useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import  Grid from '@mui/material/Grid';


const SearchInput = styled('input')({
  marginLeft: '10px', // Adjust the margin as needed
  height: '100%', // Make the input height 100% to fill the container
  width: '60%', // Make the input width 100% to fill the container
  padding: '6px', // Add padding as needed
  boxSizing: 'border-box', // Include padding and border in the total width/height
  fontSize: '20px',
  fontWeight:'bold',
  marginTop:'25px'
});




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [newExpand, setNewExpand] = useState(-1);
const [searchTerm, setSearchTerm] = useState('');
const [filteredData, setFilteredData] = useState([]);

  const handleExpandClick = (i) => {
    
    if(newExpand===i){
      setNewExpand(-1)
    }else{
      setNewExpand(i)
    }
   
  };
console.log(newExpand,'new')
  const handleSearchChange=(event)=>{
    setSearchTerm(event.target.value);
  }

 
  const[AllData,setAllData]=useState([])
  useEffect(()=>{
    const Data=JSON.parse(localStorage.getItem('User'))||[]
    setAllData(Data)
    setFilteredData(Data);
  },[AllData])
  console.log(AllData)



  useEffect(()=>{
    //to update the filtereddata whenever searchterm changes
    const filtered=AllData.filter((data)=>
    data.mycategory?.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredData(filtered);
  },[AllData,searchTerm]);
  return (
    <>
    <div style={{
      backgroundImage: 'url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902025.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', // Make sure the container covers the entire viewport height
    }}>
 <div>
  <IconButton>
    <SearchIcon style={{color:'blue'}}/>
  </IconButton>
        <SearchInput
          type="text"
          placeholder="Search here.."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

    <div style={{marginLeft:"300px",marginTop:'30px',display:'flex',gap:'30px'}}>
    <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {filteredData.map((value,index)=>{
      return( 
       <Grid item  >
         <Card sx={{ maxWidth: 345}}>
    
          <CardMedia
        component="img"
        height="200"
        image={value.Myimage}
        alt="Image error"
        sx={{padding:'2px' ,backgroundColor:'black'}}
      />
        <CardContent style={{backgroundColor:"#E1F0DA"}}>
        <Typography variant='body2' color="Black"fontSize={'25px'} >
          {value.mycategory}
          </Typography>
        </CardContent>
        <CardActions style={{backgroundColor:"#E1F0DA"}} disableSpacing>
      
          <ExpandMore
        
            expand={expanded}
            onClick={()=>handleExpandClick(index)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={newExpand===index} timeout="auto" unmountOnExit>
        <CardContent style={{backgroundColor:'#E1F0DA'}}>
      
        <h3 style={{color:'#C21292',textDecorationLine:"underline",textDecorationStyle:"double",textDecorationThickness:"2px" ,textDecorationColor:'#9E4784'}}>PET DETAILS</h3>
         <Typography  color='#3652AD' fontFamily={'cursive'} >Name:{value.mypetname}</Typography>
          <Typography color='#3652AD' fontFamily={'cursive'}>PetBreed:{value.petbreed}</Typography>
          <Typography color='#3652AD' fontFamily={'cursive'}>Gender:{value.gender}</Typography>
          <Typography  color='#3652AD' fontFamily={'cursive'}>Aggressive:{value.aggressive}</Typography>
          <Typography  color='#3652AD' fontFamily={'cursive'}>Size:{value.sizepet}</Typography>
          <Typography color='#3652AD' fontFamily={'cursive'}>Description:{value.mydescription}</Typography>
       
          <h3 style={{color:'#C21292',textDecorationLine:"underline" ,textDecorationStyle:"double",textDecorationThickness:"2px",textDecorationColor:'#9E4784'}}>OWNERS DETAILS</h3>
          <Typography  color='#3652AD' fontFamily={'cursive'}>Name:{value.myusername}</Typography>
          <Typography  color='#3652AD' fontFamily={'cursive'}>Phone:{value.myphone}</Typography>
          <Typography  color='#3652AD' fontFamily={'cursive'}>Email:{value.myemail}</Typography>
          <Typography  color='#3652AD' fontFamily={'cursive'}>Address:{value.myaddress}</Typography>
          
          <Typography  color='#3652AD' fontFamily={'cursive'}>Pincode:{value.mypincode}</Typography>
          <Typography color='#3652AD' fontFamily={'cursive'} >Country:{value.mycountry}</Typography>
         </CardContent>
        </Collapse>
      </Card>
       </Grid >
  );
      })}
   </Grid>
    </div>
    </div>
   
      </>
  );
}
