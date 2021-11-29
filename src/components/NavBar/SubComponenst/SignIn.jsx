import {Button,Box} from "@chakra-ui/react"
function SignIn(){

    return(
        <>

        <Button
        id="btn-login"
        display="flex"
        justifyContent="start"
        p="8px 1.25rem 8px 0"
        border="2px solid #fff"
        borderRadius="40px"
        _hover={{
            border:"2px solid red!important",
            color:"red"
        }}
        _focus={{
            border:"2px solid transparent!important",
            boxShadow:"0 0 5px 0 red",
            color:"red",
            bg:"transparent"
        }}
        >
            <Box
            mx="1rem"
            >
            <i className="fas fa-sign-in-alt" ></i>
            </Box>
            Sign In
            
        </Button>
        </>
    )
}
export default SignIn;