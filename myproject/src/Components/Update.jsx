import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom' 
import { useNavigate } from 'react-router-dom'
import { TextField,Button ,Box} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';

export default function Update() {
const[single,setSingle]=useState('') 
const[data,setData]=useState([])  

useEffect(()=>{
    const AllData=JSON.parse(localStorage.getItem('User'))
    //console.log(AllData)
    const SingleData=AllData.filter((User,index)=>{
        return(index==param_id.id)
    })
    console.log(SingleData,'singledata') 
    setData(AllData) 
    setSingle(...SingleData)   

},[])
console.log(data,'data')
console.log(single,'single')

 //  console.log(param_id.id,'param_id');
const param_id=useParams()

const HandleChange=(e)=>{
    setSingle({...single,[e.target.name]:e.target.value})

  }
const navigate= useNavigate();
  const HandleUpdate=()=>{
    const UpdateData=[...data]
UpdateData.splice(param_id.id,1,single)
localStorage.setItem('User',JSON.stringify(UpdateData))
console.log(UpdateData,'Updated')
navigate('/Viewpet')
}


return (
   
    <div>
    <div style={{
      backgroundImage: 'url(https://e0.pxfuel.com/wallpapers/148/480/desktop-wallpaper-%D8%BC-pinterest-minimalist.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', // Make sure the container covers the entire viewport height
    }}>
    <h2 style={{color:'#B42B51'}}>
  Update Pet Details  </h2>
    
   
   <Box
   style={{
       display:"flex",
       justifyContent:"center",
       alignItems:'center',
       flexDirection:"column",
   }}
   >
    
  <Box component={Paper}
            sx={{
                '& .MuiTextField-root':{m:1,width:'50ch'},
                display:'flex',
                width:'600px',
                padding:'30px',
                borderRadius:'30px',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                backgroundImage: 'url(https://img.freepik.com/free-vector/dog-background-with-cute-pets-illustration_53876-111990.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }}
            >
              <TextField variant='outlined' label="Pet  Name" style={{width:'50ch'}} onChange={HandleChange}name="mypetname" value={single.mypetname}/>
        <TextField variant='outlined' label="Category" style={{width:'50ch'}} onChange={HandleChange}name="mycategory" value={single.mycategory}/>
        <TextField variant='outlined' label="Breed of Pet" style={{width:'50ch'}}onChange={HandleChange} name="petbreed"  value={single.petbreed}/>
        <FormControl style={{width:'50ch',margin:6}}>
  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Gender"
    name="gender"
 
    value={single.gender || ''}
    onChange={HandleChange}
 
  >
   <MenuItem value={"male"}>Male</MenuItem>
    <MenuItem value={"female"}> Female</MenuItem>
    
  </Select>
</FormControl>
<FormControl  style={{width:'50ch',margin:6}}>
  <InputLabel id="demo-simple-select-label">Aggressive</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Aggressive"
    name='aggressive'
      value={single.aggressive || ''}
  onChange={HandleChange}
  >

    <MenuItem value={"low"}>Low</MenuItem>
    <MenuItem value={"medium"}>Medium</MenuItem>
    <MenuItem value={'High'}>High</MenuItem>
  </Select>
</FormControl>
<FormControl  style={{width:'50ch',margin:6}}>
  <InputLabel id="demo-simple-select-label">Size of the pet </InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Size of the pet "
    name="sizepet"
    value={single.sizepet || ''}
  
    onChange={HandleChange}
  >
    <MenuItem value={"small"}>Small</MenuItem>
    <MenuItem value={"medium"}>Medium</MenuItem>
    <MenuItem value={"large"}>Large</MenuItem>
  </Select>
</FormControl>
        <TextField variant='outlined' label="Image"  style={{width:'50ch'}} onChange={HandleChange} name="Myimage" value={single.Myimage}/>
        <TextField variant='outlined' label="Description" style={{width:'50ch'}} multiline rows={4} onChange={HandleChange}name="mydescription"  value={single.mydescription}/>
     </Box>
     </Box>


<h2 style={{color:'#B42B51'}}>Update Owners Details</h2>
<Box
style={{
  display:"flex",
  alignItems:"center",
  flexDirection:"column",
  justifyContent:"center",
}}
>
  <Box component={Paper}
  sx={{
      '& .MuiTextField-root':{m:1,width:'50ch'},
      display:'flex',
      width:'600px',
      padding:'30px',
      borderRadius:'30px',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      backgroundImage: 'url(https://png.pngtree.com/background/20210716/original/pngtree-simple-cute-pet-dog-background-picture-image_1375478.jpg)',
      backgroundRepeat: 'no-repeat',
   
      backgroundSize: 'cover',
      backgroundPosition: 'center',

  }}
  >
<TextField variant='outlined' label="Username" style={{width:'50ch'}} onChange={HandleChange}name="myusername" value={single.myusername}/>
<TextField variant='outlined' label="Email Address" style={{width:'50ch'}}onChange={HandleChange} name="myemail"  value={single.myemail}/>
<TextField variant='outlined' label="Phone" style={{width:'50ch'}}onChange={HandleChange} name="myphone"  value={single.myphone}/>
<TextField variant='outlined' label="Address" style={{width:'50ch'}}onChange={HandleChange} multiline rows={4}  name="myaddress"  value={single.myaddress}/>
<TextField variant='outlined' label="Country" style={{width:'50ch'}}onChange={HandleChange} name="mycountry"  value={single.mycountry}/>
<TextField variant='outlined' label="Pincode" style={{width:'50ch'}}onChange={HandleChange} name="mypincode"  value={single.mypincode}/>
<Button variant='contained' onClick={HandleUpdate}>Update</Button>
</Box>
</Box>
</div>
</div>
  )
}

    