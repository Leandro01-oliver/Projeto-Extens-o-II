import Logo from "../NavBar/SubComponenst/Logo"
import SignIn from "./SubComponenst/SignIn";
import {Flex,Box} from "@chakra-ui/react"


function NavBar(){
 
const activeMenu = ()=>{
 let boxMobileLogin = document.querySelector("#box-mobile-login");

 boxMobileLogin.classList.toggle("active-menu");

}

 return(
    <>
  <Flex
   w="100%"
   h="70px"
   position="fixed"
   zIndex="1000"
   justify="space-between"
   align="center"
   borderBottom="2px solid #fff"
  >
    <Logo/>
    <Box 
        mr={{sm:"0",md:"1rem",lg:"1rem",xl:"1rem"}}
        id="box-login"
    >
    <SignIn/>
    </Box>

 <Box
 display={{sm:"flex",md:"none",lg:"none"}}
 >
    <Flex
    w="45px"
    h="45px"
    mr="1rem"
    cursor="pointer"
    justify="center"
    align="center"
    transition=".5s ease-in-out"
    borderRadius="50%"
    border="2px solid #fff"
    onClick={activeMenu}
    _hover={{
      border:"2px solid transparent",
      boxShadow:"0 0 5px 0 red"
    }}
    >
      <i className="fas fa-bars"> </i>
    </Flex>
    <Flex
    id="box-mobile-login"
    p="20px"
    position="absolute"
    top="75px"
    right="1rem"
    display="none"
    borderBottom="2px solid #fff"
    >
    <SignIn/>
    </Flex>
    </Box>

  </Flex>

     </>
 )
}
export default NavBar;