/* eslint-disable react/prop-types */
import classNames from 'classnames'
import { useEffect, useState } from 'react';

export default function FeatureCard({id,children,bgColor,sendId}) {
 
    const [isInView, setIsInView] = useState(null);
    
    useEffect(()=>{
      setIsInView(sendId)
    },[sendId])

console.log(isInView)

  return (
  <div id={id} style={{position:"relative"}} className={classNames(isInView === id ? 'opacity-1' : 'opacity-0' )}>
    <div style={{background:`${bgColor}`,width:'400px',height:'400px',position:"absolute",inset:'0',borderRadius:"20px",display:'flex',alignItems:"center",justifyContent:'center'}}>
      {children}
    </div>
  </div>
  )
}
