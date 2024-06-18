import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Box, Flex, Heading ,Text } from "@chakra-ui/react";



export default function Home() {
  return (
    <>
      <Head>
        <title>Form nextJs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       <Flex 
          minHeight='100vh'
          width='100%'
          align='center'
          justifyContent='center'
          backgroundColor='hsl(148, 38%, 91%)'
          position='relative'
          
          >
        <Box>
          <Heading>
            <Text>
              
            </Text>
          </Heading>
        </Box>
       </Flex>
      </main>
    </>
  );
}
