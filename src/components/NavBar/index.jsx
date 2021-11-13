import Logo from "../NavBar/SubComponenst/Logo"
import Link from "next/link"

function NavBar(){
 return(
     <>
  <nav class="container-navbar navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid p-0 mx-2">
  <Logo/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse px-" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
      </ul>
      <li class="nav-item dropdown mx-2">
        
          <span class="nav-link dropdown-toggle btn-sign d-flex align-items-center justify-content-between "  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fas fa-sign-in-alt mx-2"></i> Sign In
          </span>

          <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
            <Link href="#"><div className="d-flex align-items-center pointer btn"><i class="fab fa-facebook mx-2"></i><span class="text-btn" href="#">Faceboock</span></div></Link>
            <Link href="#"><div className="d-flex align-items-center pointer btn"><i class="fab fa-google-plus  mx-2"></i><span class="text-btn" href="#">Google</span></div></Link>
          </ul>
        </li>
    </div>
  </div>
</nav>
     </>
 )
}
export default NavBar;