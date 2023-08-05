import { Route, Routes, useLocation } from "react-router-dom"
import Header from "./components/Header"
import AddCourse from "./components/AddCourse"
import Course from "./components/Course"
import Courses from "./components/Browse/Courses"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Landing from "./components/landingPage/Landing"
import './App.css'
import { AnimatePresence } from "framer-motion"
import PurchasedCourses from "./components/PurchasedCourses"
import { useState } from "react"
import Hamburger from "./components/Hamburger"

function App() {

  const location = useLocation()

  const [show , setShow] = useState(false)

  function showNav(value){
      setShow(value)
  }

  return (
    <>
      {
        show ?
        <Hamburger  showNavs = {showNav}/>
        :
       <>
        <Header showNavs = {showNav} />
        <AnimatePresence>
        <Routes location={location} key={location.key}>
        <Route path="/" element={<Landing />} />
        <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/course/:courseId" element={<Course />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/purchasedcourses" element={<PurchasedCourses />} />
      </Routes>
      </AnimatePresence>
    </>
      }
     
    </>
    
  )
}

export default App
