import {  Button, TextField, ThemeProvider, Typography as typo, createTheme } from "@mui/material";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from 'axios'

const createContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when:'beforeChildren'
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      
    },
  },
};

const Typography = motion(typo)

const divVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
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




export default function AddCourse() {

  const navigate = useNavigate()

  const [title , setTitle] = useState('')
  const [description , setDescription] = useState('')
  const [imageLink , setImageLink] = useState('')
  const [price , setPrice] = useState('')

  const submitHandler = async()=>{
    try {
    if(localStorage.getItem('role') === 'admin'){
    
        const res = await axios.post('http://localhost:3000/admin/courses',{
          title,
          description,
          imageLink,
          price,
          published:true
         },{
          headers:{
            'content-Type':'application/json',
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
         })
  
         const data = res.data
        
  
         const id = data.courseId
  
         navigate(`/course/${id}`)
    }

    else{
           alert('you are a user , please signup as an admin first')
           navigate('/signup')
    }

   

     } catch (error) {
      alert('please create an user account')
      navigate('signup')
     }
  }


  return (
   <ThemeProvider theme={theme}>
    <motion.div
      variants={createContainerVariants}
      style={{
        background: "black",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection:'column',
        gap:"50px",
        alignItems: "center",
        justifyContent: "center",
        paddingTop:"60px"
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Typography variants={divVariant} variant="h2" >
       Create a New Course
      </Typography>
      <motion.div
        style={{
          maxWidth: "800px",
          padding: "40px",
          width: "80vw",
          border: "2px solid white",
          display:"flex",
          flexDirection:"column",
          gap:"50px",
          alignItems:"center",
          borderRadius: "30px",
        }}
        variants={divVariant}
      >
        {/* Title */}
        <TextField
          fullWidth
          label="Title"
          variant="outlined"
          InputProps={{
            style: {color:"white",borderBottom:"2px solid white",paddingBottom:"2px"},
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
          type="text"
       />

       {/* description */}
        <TextField
          fullWidth
        
          label="Description"
          variant="outlined"
          InputProps={{
            style: {color:"white",borderBottom:"2px solid white",paddingBottom:"2px"},
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          value={description}
          onChange={(e)=> setDescription(e.target.value)}
          type="text"
       />

       {/* Image link */}

       <TextField
          fullWidth
        
          label="Image link"
          variant="outlined"
          InputProps={{
            style: {color:"white",borderBottom:"2px solid white",paddingBottom:"2px"},
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          value={imageLink}
          onChange={(e)=> setImageLink(e.target.value)}
          type="text"
       />

       {/* Price */}

       <TextField
          fullWidth
         
          label="Price"
          variant="outlined"
          type="number"
          InputProps={{
            style: {color:"white",borderBottom:"2px solid white",paddingBottom:"2px"},
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          value={price}
          onChange={(e)=> setPrice(e.target.value)}
       />

       {/* Button */}

       <Button onClick={submitHandler} fullWidth style={{padding:'10px'}} variant="contained">Create Course</Button>

      </motion.div>
    </motion.div>
    </ThemeProvider> 
  );
}
