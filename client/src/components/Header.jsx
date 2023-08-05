/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ButtonUtils from "../utils/ButtonUtils";
import MenuIcon from '@mui/icons-material/Menu';

const headerContainerVariant = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};



const navChildVariants = {
  hidden: {
    y: -100,

  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      
    },
  },
};


export default function Header({showNavs}) {
  const navigate = useNavigate()

  return (
   
    <motion.div
      variants={headerContainerVariant}
      initial="hidden"
      animate="visible"
      style={{
        position:"sticky",
        top:0,
        backdropFilter:"blur(100px)",
        zIndex:1000,
        background: "transparent",
        width: "100vw",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "30px",
      }}
    >
      <motion.div
       variants={navChildVariants}
       >
        <Typography style={{ color: "#eeeeee" }}>Course Selling App</Typography>
      </motion.div>
      <motion.div
      className="middle-nav"
        variants={navChildVariants}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "50px",
        }}
      >
        <Link to={'/'} style={{textDecoration:"none"}}>
          <Typography style={{ color: "#eeeeee" }}>Home</Typography>
        </Link>
        <Link to={'/addcourse'} style={{textDecoration:"none"}}>
          <Typography style={{ color: "#eeeeee" }}>Create Course</Typography>
        </Link>
        <Link to={'/courses'} style={{textDecoration:"none"}}>
          <Typography style={{ color: "#eeeeee" }}>Browse</Typography>
        </Link>
        <Link to={'/purchasedcourses'} style={{textDecoration:"none"}}>
          <Typography style={{ color: "#eeeeee" }}>Purchased Courses</Typography>
        </Link>
      </motion.div>
      <motion.div 
      variants={navChildVariants}
      className="nav-buttons"
      >
        <ButtonUtils onClick={()=> navigate('/signup')} UIstyle={{ background: "black", color: "#eeeeee" }}>
          Sign Up
        </ButtonUtils>
        <ButtonUtils onClick={()=> navigate('/signin')}  UIstyle={{ background: "black", color: "#eeeeee" }}>
          Sign In
        </ButtonUtils>
      </motion.div>
      <AnimatePresence>

</AnimatePresence>
      <motion.div style={{display:"none"}} variants={navChildVariants} className="hamburger-nav">
        <button onClick={()=>showNavs(true)} style={{background:"transparent",color:"white",border:"none"}}>
        <MenuIcon/>
          </button>
      </motion.div>
    </motion.div>
   
  );
}
