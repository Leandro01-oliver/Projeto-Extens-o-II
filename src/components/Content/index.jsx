import ImageCenter from "../Content/SubComponents/ImageCenter";
import BoxSearch from "../Content/SubComponents/Search"
import {Flex} from "@chakra-ui/react"

 function Content(){

  const closeMenu = () => {

    let boxMobileLogin = document.querySelector("#box-mobile-login");
   
    boxMobileLogin.classList.remove("active-menu");
   
   }
   
    return(
        <>
  <Flex
  w="100%"
  className="container-content"
  onClick={closeMenu}
  h="100vh"
  align="center"
  justify="center"
  bgPosition="center"
  direction="column"
  bgRepeat="no-repeat"
  bgSize="105% 105%"
  p="250px 4%"
  filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25))"
  >
    <ImageCenter/>
    <BoxSearch/>
  </Flex>
        </>
    )
   }
   export default Content;