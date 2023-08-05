/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import {motion} from 'framer-motion'
import CancelIcon from '@mui/icons-material/Cancel';

import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import ButtonUtils from '../utils/ButtonUtils';

const hamburgerVariants = {
    hidden: {
      x: '100vw',
  
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        
      },
    },
    exit:{
      x:'100vw',
      transition:{
        duration:0.3
      }
    }
  }

  const Typo = motion(Typography)

export default function Hamburger({showNavs}) {

  const navigate = useNavigate()

  return (
    <div>
        <motion.div variants={hamburgerVariants} animate='visible' initial='hidden' exit='exit' style={{width:"100vw",height:"100vh",background:"black",position:'absolute',inset:0,paddingTop:'50px',display:"flex",flexDirection:'column',gap:"50px",paddingLeft:"50px",overflow:"hidden"}}> 
   <button onClick={()=>showNavs(false)} style={{position:'absolute',top:'30px',right:"30px",background:'transparent',color:"white",border:"none"}}>
        <CancelIcon/>
          </button>

          <Link onClick={()=>showNavs(false)} to={'/'} style={{textDecoration:"none"}}>
          <Typo whileHover={{color:'yellow'}} variant="h3"   style={{ color: "#eeeeee" }}>Home</Typo>
        </Link>
        <Link  onClick={()=>showNavs(false)} to={'/addcourse'} style={{textDecoration:"none"}}>
          <Typo whileHover={{color:'yellow'}} variant="h3"  style={{ color: "#eeeeee" }}>Create Course</Typo>
        </Link>
        <Link onClick={()=>showNavs(false)} to={'/courses'} style={{textDecoration:"none"}}>
          <Typo whileHover={{color:'yellow'}} variant="h3" style={{ color: "#eeeeee" }}>Browse</Typo>
        </Link>
        <Link onClick={()=>showNavs(false)} to={'/purchasedcourses'} style={{textDecoration:"none"}}>
          <Typo whileHover={{color:'yellow'}} variant="h3"  style={{ color: "#eeeeee" }}>Purchased Courses</Typo>
        </Link>
        <Link onClick={()=>showNavs(false)} to={'/courses'} style={{textDecoration:"none"}}>
          <Typo whileHover={{color:'yellow'}} variant="h3" style={{ color: "#eeeeee" }}>SignIn</Typo>
        </Link>
        <Link onClick={()=>showNavs(false)} to={'/purchasedcourses'} style={{textDecoration:"none"}}>
          <Typo whileHover={{color:'yellow'}} variant="h3"  style={{ color: "#eeeeee" }}>SignUP</Typo>
        </Link>

  </motion.div>
    </div>
  )
}
