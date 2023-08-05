import {motion} from "framer-motion"
import Hero from "./Hero"
import Features from "./Features"
import Footer from "./Footer"

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

export default function Landing() {
  return (
    <motion.div style={{width:"100vw"}} variants={createContainerVariants} initial="hidden" animate="visible" exit='exit'>
       <Hero />
       <Features />
       <Footer />
    </motion.div>
  )
}
