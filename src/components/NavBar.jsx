import LogoNav from "./SubComponents/Navbar/LogoNav"
import LinkNav from "./SubComponents/Navbar/LinkNav"
import Search from "./SubComponents/Navbar/Search"
import DarkMode from "./SubComponents/Navbar/DarkMode"
import Menu from "./SubComponents/Navbar/Menu"

function NavBar(){
    return(
        <>
        <section className="container-navbar">
            <LogoNav/>
            <div className="hidden-mobile-link">
            <LinkNav/>
            </div>
            <div className="drop-menu">
            <Search/>
            <LinkNav/>
            </div>
            <div className="box-user">
                <div className="hidden-mobile-search">
        <Search/>
        </div>
        <DarkMode/>
        <Menu/>
        </div>
     
        </section>
        </>
    )
    }
   
    export default NavBar;