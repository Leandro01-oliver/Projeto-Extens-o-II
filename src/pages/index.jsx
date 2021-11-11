import NavBar from "../components/NavBar/index";
import SadBar from "../components/SadBar/index";
import Content from "../components/Content/index";

 function Home() {
  return (
   <>
<NavBar/>
<div className="flex">
  <SadBar/>
  <Content/>
</div>
   </>
  )
}
export default Home;
