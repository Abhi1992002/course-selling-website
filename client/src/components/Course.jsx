import { Button, TextField, Typography } from "@mui/material";
import background from "../assets/hero/background.png";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

import CourseBoxSingle from "./CourseBoxSingle";

export default function Course() {
  const createContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

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
  };

  // const navigate = useNavigate()

  const [title , setTitle] = useState('')
  const [description , setDescription] = useState('')
  const [imageLink , setImageLink] = useState('')
  const [price , setPrice] = useState('')

  let {courseId} = useParams()

  useEffect(()=>{
    console.log(courseId)
    const getValues = async() => {

      try {
       const response =  await axios.get(`http://localhost:3000/admin/course/${courseId}`,
       {
        headers:{
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      })

      const data = response.data.course

      console.log(data)

      setTitle(data.title)
      setDescription(data.description)
      setImageLink(data.imageLink)
      setPrice(data.price)


      } catch (error) {
        alert(error)
      }

     
    }
    getValues()

  },[courseId])

  const submitHandler = async()=>{

    try {

       const response = await axios.put(`http://localhost:3000/admin/courses/${courseId}`,{
        title:title,
        description:description,
        price:price,
        imageLink:imageLink,
        published:true
       },{
        headers:{
          'Content-Type':'application/json',
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
       })

       const data = response.data
 
       alert(data.message)


    } catch (error) {
      alert(error)
    }
  }

  return (
    <motion.div
      variants={createContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ width: "100vw" }}
    >

      {/* Title Box */}
      <motion.div
        variants={divVariant}
        style={{
          width: "100vw",
          height: "40vh",
          overflow: "hidden",
          position: "relative",
          marginBottom:"100px"
        }}
      >
        <motion.img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 1,
          }}
          src={background}
          alt=""
        />

        <div
        className="edit-upper-title"
          style={{
            position: "absolute",
            zIndex: 1,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            backdropFilter: "blur(100px)",
            background: "transparent",
            padding: "20px 50px",
            borderRadius: "30px",
          }}
        >
          <Typography style={{ color: "white" }} variant="h1">
            {title}
          </Typography>
        </div>
      </motion.div>

{/* Below Container */}
      <div
      className="full-container-edit"
        style={{
          display: "flex",
          width: "100vw",
          // height:"100vh",
          justifyContent: "space-between",
          padding: "0 80px", 
          alignItems:'center'
        }}
      >


   {/* Edit container */}      
        <div
        className="edit-container"
          style={{width:"50vw"}}
        >
 

    <motion.div
      variants={createContainerVariants}
      
      style={{
        background: "black",
        width: "100%",
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
      <Typography variant="h3">
        Edit Your Course
      </Typography>
      <motion.div
        style={{
          width:"90%",
          padding: "40px",

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

        </div>

    {/* course Box */}
         <div
         style={{width:"50vw",display:"flex",alignItems:"center",justifyContent:"center",maxWidth:'400px',flexDirection:'column',gap:"50px"}}
         className="box-container"
 >
  <Typography variant="h3">
        How It Looks ?
      </Typography>
<CourseBoxSingle title={title} description={description} imageLink={imageLink} price={price} />
         </div>
      </div>

    </motion.div>
  );
}
