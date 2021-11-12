import Logo from "../NavBar/SubComponenst/Logo"
 
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
          <span class="nav-link dropdown-toggle btn-sign "  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sign In
          </span>
          <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Faceboock</a></li>
            <li><a class="dropdown-item" href="#">Google</a></li>
          </ul>
        </li>
    </div>
  </div>
</nav>
     </>
 )
}
export default NavBar;