/* eslint-disable react/no-unescaped-entities */
import { Typography as typo, Button as btn } from "@mui/material";
import { motion } from "framer-motion";
import computerImage from "../../assets/hero/computer.png";
import Avatar from '@mui/material/Avatar';
import ai1 from '../../assets/hero/ai1.jpg'
import ai2 from '../../assets/hero/ai2.jpg'
import ai3 from '../../assets/hero/ai3.jpg'

const imageVariants = {
  hidden: {
    opacity: 0,
    filter: "contrast(100%) brightness(100%) hue-rotate(0deg)",
  },
  visible: {
    opacity: 1,
    filter: "contrast(120%) brightness(100%) hue-rotate(180deg)",
    transition: { delay: 0.5, duration: 1 ,filter:{
      repeat:Infinity,
      repeatType:'reverse',
      duration:2
    }},
  }
};

const Typography = motion(typo);
const Button = motion(btn);

const HeadingVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 1,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 1 },
  },
};

export default function Hero() {
  return (
    <div
    className="hero"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
      className="hero-content"
        style={{
          width: "40vw",
          background: "transparent",
          borderRadius: "40px",
          padding: "20px",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variants={HeadingVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontWeight: "400",
            zIndex: "1",
            backdropFilter: "blur(100px)",
            opacity: 0.3,
          }}
          variant="h3"
        >
          Discover world-class courses tailored just for you.
        </Typography>

        <Typography
          variants={HeadingVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontWeight: "400",
            zIndex: "1",
            backdropFilter: "blur(100px)",
            opacity: 0.3,
            color:"#eeeeee"
          }}
        >
          Embark on a journey of knowledge with courses crafted by industry
          experts.
        </Typography>

        <Button
          
          variants={HeadingVariants}
          initial="hidden"
          animate="visible"
          variant="contained"
          whileHover={{
           background:"white",
           color:"black"            
          }}
          style={{
            background: "black",
            width: "50%",
            padding: "10px",
            border:"1px solid white",
            borderRadius:"12px"
          }}
        >
          Explore the Courses
        </Button>

       <motion.div style={{display:"flex",flexDirection:"column",gap:"20px"}} variants={HeadingVariants}>
        <motion.div className="avatar" style={{display:"flex"}} variants={imageVariants}>
            <Avatar className="avatar-hero" style={{width:"80px",height:"80px",zIndex:4,}} alt="Remy Sharp" src={ai1} />
             <Avatar className="avatar-hero"  style={{width:"80px",height:"80px",zIndex:3,position:"relative",right:'15px'}} alt="Travis Howard" src={ai2} />
             <Avatar className="avatar-hero"  style={{width:"80px",height:"80px",zIndex:2,position:"relative",right:'30px'}} alt="Agnes Walker" src={ai3} />
             <div className="avatar-hero"  style={{width:"80px",height:"80px",zIndex:1,position:"relative",right:'45px',background:"#7a7b7d",borderRadius:'50%',display:"flex",alignItems:"center",justifyContent:"center",fontSize:"23px"}}>997+</div>
        </motion.div>
           
       <Typography style={{color:"#eeeeee"}}>Number of Users...........</Typography>
       </motion.div>

      </div>

      <div className="hero-image-container">
        <motion.img
          className="hero-image"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          style={{ width: "700px" }}
          src={computerImage}
          alt=""
        />
      </div>
    </div>
  );
}
