import {Input,InputGroup,InputRightElement,Box,Text,Flex} from "@chakra-ui/react"

function Search() {


const closePorcen = ()=>{
  let boxPorcen = document.querySelector("#box-porcen");

  boxPorcen.classList.toggle("active-close-porcen");
}

const openClickResult = () => {

  let BoxNews = document.getElementById('box-news');
  let OcultMenu = document.getElementById('ocult-menu');


  const api = '003e34ed52604c799d583ba845492545'
  const search = 'Rondônia'
  const xhr = new XMLHttpRequest()
  xhr.open('GET', `https://newsapi.org/v2/everything?qInTitle=${search}&apiKey=${api}`, true)
  xhr.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
        content = JSON.parse(this.response)['articles']
        for (let index = 0; index < content.length; index++) {
          News += `
                    <div style="display="flex"; 
                                border="2px solid #fff";
                                ">
                        <img src="${content[index]['urlToImage']} heigth= "30px" width="30px" " />
                        <h1>${content[index]['title']}</h1>
                    </div>
                  `
      }
      BoxNews.innerHTML = News
    }
  }
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
     color="#fff"
     onClick={openClickResult}
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
 id="ocult-menu"
 display="none"
 w="100%"
 direction="column"
 maxW="880px"
 >
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
   display="none"
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
     color="#fff"
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
   id="box-news"
   border="2px solid #fff"
   w="100%"
   maxW="880px"
   mt="1rem"
   borderRadius="10px"
   p="15px"
   >

   </Box>
   
   </Flex>
    </>
  );
}
export default Search;
