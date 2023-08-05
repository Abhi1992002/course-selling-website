
import {Typography } from "@mui/material"
import {motion} from "framer-motion"
import CourseBox from "./Browse/CourseBox"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

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
  

export default function PurchasedCourses() {
    const [courses,setCourses] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
  
        const getAll = async() => {
      
          try {

            if(localStorage.getItem('role') === 'admin' || null){
              alert('You are a admin , Please signup as a user first')
              navigate('/signup')
            }

            else{
              const response = await axios.get('http://localhost:3000/user/purchasedCourses',{
                headers:{
                  "Authorization": "Bearer " + localStorage.getItem("token")
                }
              })
              const data = response.data.purchasedCourses
        
              console.log(data)
        
              setCourses(data)
            }
         
            
          } catch (error) {
            alert('no such user exist , Please signup as a user')
            navigate('/signup')
          }
        
        }
      
        getAll()
       
      },[navigate])
  return (
    <div>
      <motion.div variants={createContainerVariants}  initial="hidden" animate="visible" exit='exit'
    >

<div style={{height:"200px",width:"100vw",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
<Typography variant="h1">All Courses</Typography> 
</div>
    

<div style={{width:"100%",padding:"100px",display:"flex",flexWrap:"wrap",gap:"40px",justifyContent:'space-evenly'}}>
  {courses ? courses.map((course)=>{
      return   <CourseBox showButton={false} courseId={course._id} key={course._id} title={course.title} description={course.description} imageLink={course.imageLink} price={course.price} />
  }) : ''}

  

</div>

  </motion.div>
    </div>
  )
}
