import React from 'react'
import NavBar from "../components/NavBar";
import SiBar from "../components/SidBar";
import Content from "../components/Content";

 function Home() {
  return (
   <>
   <div className="box-fundo">
   <NavBar/>
   <div className="conatiner-felx">
   <SiBar/>
   <Content/>
   </div>
   </div>
   </>
  )
}
export default Home;
