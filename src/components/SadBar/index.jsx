import Link from "next/link"
function SadBar(){
    return(
        <>
           <section className="container-sadbar">
            <ul className="menu">
            <Link href="#">
               <li className="nav-link">
               <i class="fas fa-home "></i>
                   <span className="hidden-text">
                       Olá
                   </span>
                  <div className="mr-2"></div>
               </li>
               </Link>
            </ul>
           </section>
        </>
    )
   }
   export default SadBar;