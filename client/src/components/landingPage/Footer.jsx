import {Typography } from "@mui/material"
export default function Footer() {
  return (
    <div style={{height:"100vh",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"100px"}}>
      <Typography variant="h2">
        Want to Connect?
      </Typography>
      <input className="footer-input" type="email" placeholder="Enter your Email....." style={{maxWidth:"1000px",width:"80vw",padding:"30px",borderRadius:"100px",color:"white",border:"2px solid white", background:"black",fontSize:"2.5rem"}}/>
    </div>
  )
}
