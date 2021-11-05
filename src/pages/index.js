import React from 'react'
import NavBar from "../components/NavBar";
import SiBar from "../components/SidBar";
import Content from "../components/Content";

 function Home() {
  return (
   <>
   <NavBar/>
   <div className="conatiner-felx">
   <SiBar/>
   <Content/>
   </div>
   </>
  )
}
export default Home;
