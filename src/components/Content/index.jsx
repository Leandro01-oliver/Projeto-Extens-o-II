import ImageCenter from "../Content/SubComponents/ImageCenter";
import BoxSearch from "../Content/SubComponents/Search"
import {Flex} from "@chakra-ui/react"

 function Content(){
    return(
        <>
  <Flex
  w="100%"
  className="container-content"
  h="100vh"
  align="center"
  justify="center"
  bgPosition="center"
  direction="column"
  bgRepeat="no-repeat"
  bgSize="101% 102%"
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