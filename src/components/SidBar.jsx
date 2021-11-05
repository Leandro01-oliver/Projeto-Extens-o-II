import MenuFilter from  "../components/SubComponents/Sidbar/MenuFilter"
import LinkSad from  "../components/SubComponents/Sidbar/LinkSad"

function SidBar(){
    return(
        <>
        <section className="container-sadbar">
         <MenuFilter/>
         <LinkSad/>
        </section>
        </>
    )
    }
   
    export default SidBar;