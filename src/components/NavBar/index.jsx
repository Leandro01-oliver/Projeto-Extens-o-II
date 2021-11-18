import Logo from "../NavBar/SubComponenst/Logo"
import Link from "next/link"

function NavBar(){
  function NavScrool(){
    window.addEventListener('scroll', () =>{

      var scroll = this.scrollY;
  
      console.log(scroll)
 
       })
  }
 
 return(
     <>
    <nav className="container-navbar navbar navbar-expand-lg navbar-light " onScroll={NavScrool}>
  <div className="container-fluid p-0 mx-2">
  <Logo/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse px-" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      </ul>
      <li className="nav-item dropdown mx-2">
        
          <span className="nav-link dropdown-toggle btn-sign d-flex align-items-center justify-content-between "  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fas fa-sign-in-alt mx-2"></i> Sign In
          </span>

          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <Link href="#"><div className="d-flex align-items-center pointer btn"><i className="fab fa-facebook mx-2"></i><span className="text-btn" href="#">Faceboock</span></div></Link>
            <Link href="#"><div className="d-flex align-items-center pointer btn"><i className="fab fa-google-plus  mx-2"></i><span className="text-btn" href="#">Google</span></div></Link>
          </ul>
        </li>
    </div>
  </div>
</nav>
     </>
 )
}
export default NavBar;