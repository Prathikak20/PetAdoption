import React ,{useState}from 'react'
import { TextField,Button,Box} from '@mui/material'
import { Link } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

export default function Addpet() {

    let navigate=useNavigate()
    let initialvalue;
if(localStorage.getItem('User')==null){
    initialvalue=[]
}
else{
    initialvalue=JSON.parse(localStorage.getItem('User')) 
}

    const[value,setValue]=useState(initialvalue)  
    const[data,setData]=useState({
      mypetname:'',
      mycategory:'',
      petbreed:'',
      gender:'',
      aggressive:'',
      sizepet:'',
      Myimage:'',
      mydescription:'',
      myusername:'',
      myemail:'',
      myphone:'',
      myaddress:'',
      mycountry:'',
      mypincode:'',
    }) 
const HandleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value}) 
    }
console.log(data,'data')

const HandleClick=()=>{
   

    const userId=value.length==0?1:value[value.length-1].u_id+1  
    const details={ 
     u_id:userId,
     ...data 
    }
    const FinalData=[...value,details]
    console.log(FinalData,'final')
     setValue(FinalData)   
  
    localStorage.setItem('User',JSON.stringify(FinalData))  
    navigate('/Viewpet')
  
}
console.log(value,'value')
 return (
    <div>

          <h2 style={{color:'#4C0033',backgroundColor:'#FFC5C5',textDecorationLine:'underline',textDecorationStyle:'dashed'}} > Pet Details</h2>
          <Box
        style={{
            display:"flex",
            alignItems:"center",
            flexDirection:"column",
            justifyContent:"center",
            backgroundImage: 'url(https://img.freepik.com/free-vector/frame-with-dogs-vector-white-background_53876-127700.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',

        
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
                backgroundImage: 'url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsb2ZmaWNlMjFfYWVzdGhldGljX2NhdF9jbGVhbl9taW5pbWFsX3dhbGxwYXBlcl80OTkxMGJjMy1kZWMwLTRiMTgtYmY5Yi1iNjQyYWNmOTI4YzZfMS5qcGc.jpg)',
                backgroundRepeat: 'no-repeat',
             
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }}
            >
              <TextField variant='outlined' label="Pet  Name" style={{width:'50ch'}} onChange={HandleChange}name="mypetname" value={data.mypetname}/>
        <TextField variant='outlined' label="Category" style={{width:'50ch'}} onChange={HandleChange}name="mycategory" value={data.mycategory}/>
        <TextField variant='outlined' label="Breed of Pet" style={{width:'50ch'}}onChange={HandleChange} name="petbreed"  value={data.petbreed}/>
        <FormControl style={{width:'50ch',margin:6}}>
  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Gender"
    name="gender"
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
  onChange={HandleChange}
  >
    <MenuItem value={"low"}>Low</MenuItem>
    <MenuItem value={"medium"}>Medium</MenuItem>
    <MenuItem value={"High"}>High</MenuItem>
  </Select>
</FormControl>
<FormControl  style={{width:'50ch',margin:6}}>
  <InputLabel id="demo-simple-select-label">Size of the pet </InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Size of the pet "
    name="sizepet"
    onChange={HandleChange}
  >
    <MenuItem value={"small"}>Small</MenuItem>
    <MenuItem value={"medium"}>Medium</MenuItem>
    <MenuItem value={"large"}>Large</MenuItem>
  </Select>
</FormControl>
        <TextField variant='outlined' label="Image"  style={{width:'50ch'}} onChange={HandleChange} name="Myimage" value={data.Myimage}/>
        <TextField variant='outlined' label="Description" style={{width:'50ch'}} multiline rows={4} onChange={HandleChange}name="mydescription"  value={data.mydescription}/>
      </Box>
     </Box>


<h2 style={{color:'#4C0033',backgroundColor:'#FFC5C5',textDecorationLine:'underline',textDecorationStyle:'dashed'}}> Owners Details</h2>
<Box
style={{
  display:"flex",
  alignItems:"center",
  flexDirection:"column",
  justifyContent:"center",
  backgroundImage: 'url(https://img.freepik.com/free-vector/frame-with-dogs-vector-white-background_53876-127700.jpg)',
  backgroundRepeat: 'no-repeat',

  backgroundSize: 'cover',
  backgroundPosition: 'center',

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
      backgroundImage: 'url(https://img.freepik.com/free-photo/view-adorable-chihuahua-dog-coming-out-torn-paper_23-2149880132.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1707177600&semt=ais)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',


  }}
  >
<TextField variant='outlined' label="Username" style={{width:'50ch'}} onChange={HandleChange}name="myusername" value={data.myusername}/>
<TextField variant='outlined' label="Email Address" style={{width:'50ch'}}onChange={HandleChange} name="myemail"  value={data.myemail}/>
<TextField variant='outlined' label="Phone" style={{width:'50ch'}}onChange={HandleChange} name="myphone"  value={data.myphone}/>
<TextField variant='outlined' label="Address" style={{width:'50ch'}}onChange={HandleChange} multiline rows={4}  name="myaddress"  value={data.myaddress}/>
<TextField variant='outlined' label="Country" style={{width:'50ch'}}onChange={HandleChange} name="mycountry"  value={data.mycountry}/>
<TextField variant='outlined' label="Pincode" style={{width:'50ch'}}onChange={HandleChange} name="mypincode"  value={data.mypincode}/>
<Button variant='contained' onClick={HandleClick}>SUBMIT</Button>
</Box>
</Box>
</div>

  
  )
}
