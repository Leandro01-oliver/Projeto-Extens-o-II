import React from 'react';
import "../../public/style.css";
import "../../public/functions";
// import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    // <ChakraProvider>
      <Component {...pageProps} />
    // </ChakraProvider>
  )
}

export default MyApp