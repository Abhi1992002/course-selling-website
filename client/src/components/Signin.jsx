import {motion} from "framer-motion"
import mountainImage from '../assets/hero/mountain.webp'
import { Button, InputLabel, MenuItem, Select, TextField, ThemeProvider, Typography, createTheme } from "@mui/material"
import { useState } from "react"
import axios from 'axios'
import {useNavigate } from "react-router-dom";

const createContainerVariants = {
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
    transition:{
      duration:0.5,
      when:"beforeChildren"
    }
  },
  exit:{
    opacity:0,
    transition:{
      duration:0.5
    }
  }
}

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border:'none',
          },
        },
      },
    },
  },
});

const childVariants = {
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
    transition:{
      duration:1
    }
  }
}

export default function Signin() {

  const navigate = useNavigate()

  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')

  const submitHandler = async()=>{

    if(age === 10){
      try {
        const res =  await axios.post('http://localhost:3000/admin/login',{
          username:username,
          password:password
         },
         {
          headers:{
            'content-type': 'application/json'
          }
         }
         )
         
         const response = res.data 
    
         localStorage.setItem('token',response.token)
         localStorage.setItem('role','admin')
    
         navigate('/addcourse')
      } catch (error) {
        alert("No such user present")
      }
    }
    if(age===20){
      try {
        const res =  await axios.post('http://localhost:3000/user/login',{
          username:username,
          password:password
         },
         {
          headers:{
            'content-type': 'application/json'
          }
         }
         )
         
         const response = res.data 
    
         localStorage.setItem('token',response.token)
         localStorage.setItem('role','user')
    
         navigate('/courses')
      } catch (error) {
        alert("No such user present")
      }
    }




     

  }

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
    <motion.div variants={createContainerVariants}  initial="hidden" animate="visible" exit='exit' style={{display:'flex',width:"100vw",height:"calc(100vh - 80px)",overflow:"hidden"}}>
      <motion.div variants={childVariants} className="signin-container" style={{display:"flex",flexDirection:'column',width:"50%",height:"100%",alignItems:'center',justifyContent:"flex-start",gap:"30px",paddingTop:"100px"}}>
      <Typography variant="h4">
       Login to Your Account
      </Typography>
        <div style={{width:"80%",borderRadius:'10px',display:'flex',flexDirection:"column",gap:"30px"}}>
        <TextField
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          variant="outlined"
          InputProps={{
            style: {color:"white",borderBottom:"2px solid white",paddingBottom:"2px"},
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          type="text"
       />
        <TextField
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
          InputProps={{
            style: {color:"white",borderBottom:"2px solid white",paddingBottom:"2px"},
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          type="text"
       />

<InputLabel style={{color:'#757575',zIndex:1,}} id="role" name="role">
        Select Role
      </InputLabel>
<Select
id="role" name="role"
    value={age}
    label='Role'
    onChange={handleChange}
    style={{color:"white",borderBottom:"2px solid white",paddingBottom:"2px"}}
  >
    <MenuItem value={10}>Admin</MenuItem>
    <MenuItem value={20}>User</MenuItem>
  </Select>

      <Button onClick={submitHandler} fullWidth style={{padding:'10px',marginTop:"30px"}} variant="contained">Login In</Button>

        </div>
      </motion.div>
      <motion.div className="image-signin" variants={childVariants} style={{overflow:"hidden",width:"50%"}}> <img style={{width:"100%",height:"100%",objectFit:"cover"}} src={mountainImage} alt="" /> </motion.div>
    </motion.div>
    </ThemeProvider>
  )
}

