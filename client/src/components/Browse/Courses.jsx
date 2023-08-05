import {Typography } from "@mui/material"
import {motion} from "framer-motion"
import CourseBox from "./CourseBox"
import { useEffect, useState } from "react"
import axios from "axios"

const createContainerVariants = {
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
    transition:{
      duration:0.5
    }
  },
  exit:{
    opacity:0,
    transition:{
      duration:0.5
    }
  }
}

export default function Courses() {

  const buyCourse = async(id)=>{
    
    try {
      const response = await axios.post(`http://localhost:3000/user/courses/${id}`,{},{
      headers:{
        'Authorization':'bearer '+localStorage.getItem('token')
      }
    })

    const data = response.data

    alert(data.message)

    }
    catch (error) {
      alert(error)
    }
    
  }

  const [courses,setCourses] = useState([])

useEffect(()=>{
  
  const getAll = async() => {

    try {
      const response = await axios.get('http://localhost:3000/user/courses',{
        headers:{
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      })
      const data = response.data.courses

      console.log(data)

      setCourses(data)
      
    } catch (error) {
      alert(error)
    }
  
  }

  getAll()
 
},[])

  return (
    <motion.div variants={createContainerVariants}  initial="hidden" animate="visible" exit='exit'
    >

<div style={{height:"200px",width:"100vw",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
<Typography className="browse-heading" variant="h1">All Courses</Typography> 
</div>
    

<div style={{width:"100%",padding:"100px",display:"flex",flexWrap:"wrap",gap:"40px",justifyContent:'space-evenly'}}>
  {courses.map((course)=>{
      return   <CourseBox showButton={true} courseId={course._id} key={course._id} buyCourse={buyCourse} title={course.title} description={course.description} imageLink={course.imageLink} price={course.price} />
  })}

  

</div>

  </motion.div>
  )
}
