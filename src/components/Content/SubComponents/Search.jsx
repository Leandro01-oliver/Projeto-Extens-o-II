import Link from "next/link";
import {Input,InputGroup,InputRightElement,Box,Text,Flex} from "@chakra-ui/react"
import {useState} from "react"
function Search() {

const [openResult,setOpenResult] = useState(false);
const openClickResult= () => setOpenResult(!openResult)

const [openPorcen,setOpenPorcen] = useState(false);
const openClickPorcent= () => setOpenPorcen(!openPorcen)

const closePorcen = ()=>{
  let boxPorcen = document.querySelector("#box-porcen");

  boxPorcen.classList.toggle("active-close-porcen");
}
  return (
    <>
   <InputGroup
    w="100%"
    maxW="900px"
    mt="2rem"
   >
     <Input
      h="50px"
      borderRadius="40px"
      fontSize="20px"
      p="0 55px 0 20px"
      color="#fff"
      border="2px solid #fff!important"
      transition=".5s ease-in-out"
      placeholder="Digite o assunto de sua pesquisa"
      onKeyDown={openClickResult}
      _hover={{
        boxShadow:"0 0 5px 0 red!important",
        border:"2px solid transparent!important",
        color:"red"
      }}
     />
     <InputRightElement
     h="32.5px"
     w="32.5px"
     borderRadius="50%"
     mt=".6rem"
     mr="1rem"
     cursor="pointer"
     transition=".5s ease-in-out"
     _hover={{
       boxShadow:"0 0 5px 0 red",
       color:"red"
     }}
     >
     <i className="fas fa-search"></i>
     </InputRightElement>
   </InputGroup>

   <Flex
   id="box-porcen"
   border="2px solid #fff"
   w="100%"
   maxW="880px"
   mt="1rem"
   borderRadius="10px"
   p="20px"
   justify="center"
   align="center"
   position="relative"
   display={openPorcen ? 'flex' : 'none'}
   >
     <Flex 
     id="close-porcen"
     h="25px"
     w="25px"
     border="2px solid #fff"
     position="absolute"
     top="1rem"
     right="1rem"
     borderRadius="50%"
     align="center"
     justify="center"
     onClick={closePorcen}
     cursor="pointer"
     transition=".5s ease-in-out"
     _hover={{
      border:"2px solid transparent",
      boxShadow: "0 0 5px 0 red",
      color:"red"
     }}
     >
    <i class="fas fa-times"></i>
     </Flex>

     <Flex
      bg="red"
      h="80px"
      w="80px"
      borderRadius="50%"
      justify="center"
      align="center"
      cursor="pointer"
      border="2px solid transparent"
      transition=".5s ease-in-out"
      _hover={{
        border:"2px solid #fff"
      }}
     >
       <Text>
         30%
       </Text>
     </Flex>
   </Flex>

   <Box
   border="2px solid #fff"
   w="100%"
   maxW="880px"
   mt="1rem"
   display={openResult ? 'flex' : 'none'}
   onClick={openClickPorcent}
   borderRadius="10px"
   p="15px"
   >
    <Box
    w="100%"
    p="10px 2%"
    border="2px solid #fff"
    cursor="pointer"
    borderRadius="10px"
    transition=".5s ease-in-out"
    _hover={{
      boxShadow:"0 0 5px 0 red",
      border:"2px solid transparent",
      color:"red"
    }}
    >
     <Text>
       Notícia 1
     </Text>
    </Box>
   </Box>
    </>
  );
}
export default Search;
