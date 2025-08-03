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
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';
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

  const  HandleDelete=(id)=>{
    //alert(id)
    const DeletedData=AllData.filter((data)=>{
      return(data.u_id!=id)
    })
    localStorage.setItem('User',JSON.stringify(DeletedData))
    console.log(DeletedData,'Deleted data')
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
    const filtered=AllData?.filter((data)=>
    data.petbreed?.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredData(filtered);
  },[AllData,searchTerm]);
  return (
    <>
 <div style={{
      backgroundImage: 'url(https://img.freepik.com/free-vector/pastel-watercolor-painted-background_23-2148959637.jpg)',
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

    <div style={{marginLeft:"300px",marginTop:'30px',display:'flex',gap:'30px' }}>
    <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {filteredData.map((value,index)=>{
      return(
           <Grid item>
         <Card sx={{ maxWidth: 345}}>
      
          <CardMedia
        component="img"
        height="200"
        image={value.Myimage}
        alt="Image error"
        sx={{padding:'2px' ,backgroundColor:'black'}}
      />
        <CardContent style={{backgroundColor:"#F9F7CF"}} >
        <Typography variant='body2' color="#3C0753" fontSize={'20px'} >
          {value.mycategory}
          </Typography>
        </CardContent>
        <CardActions style={{backgroundColor:"#F9F7CF"}}  disableSpacing>
        <IconButton aria-label="Edit"><Link to={`/Update/${index}`}>
          <EditTwoToneIcon  style={{color:'green'}}/></Link>
        </IconButton>
        <IconButton aria-label="delete"  onClick={()=>HandleDelete(value.u_id)}>
      
          <DeleteIcon style={{color:'red'}}/>
        </IconButton>
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
        <CardContent style={{backgroundColor:'beige'}}>
         <h3 style={{color:'rgb(175, 1, 113)'   ,fontSize: '30px',fontWeight:'bold', textDecorationLine:'underline'}}>PetDetails</h3>
         <Typography color='#DA0C81' fontWeight='bold' >Name:{value.mypetname}</Typography>
          <Typography  color='#DA0C81'  fontWeight='bold'>PetBreed:{value.petbreed}</Typography>
          <Typography color='#DA0C81'  fontWeight='bold'>Gender:{value.gender}</Typography>
          <Typography  color='#DA0C81'fontWeight='bold'>Aggressive:{value.aggressive}</Typography>
          <Typography  color='#DA0C81' fontWeight='bold' >Size:{value.sizepet}</Typography>
          <Typography  color='#DA0C81' fontWeight='bold'>Description:{value.mydescription}</Typography>
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
