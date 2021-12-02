import Image from "next/image"
import ImageLogo from "../../../../public/cor.png"
import {Flex} from "@chakra-ui/react"

function Logo(){
return (
    <>
        <Flex
        justify="center"
        align="center"
        ml="1rem"
        cursor="pointer"
        >
            <Image
            src= {ImageLogo}
            height="50px"
            width="50px"
            alt="logo do portal de Fakes News"
            title="logo do portal de Fakes News"
            />
        </Flex>
    </>
)
}

export default Logo;