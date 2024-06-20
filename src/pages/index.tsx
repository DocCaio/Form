import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Box, Button, Flex, FormControl,FormLabel, Heading ,Input,Text, Textarea } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";

interface IHomeProps {
  fistName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
}



const  Home: FunctionComponent<IHomeProps> = () => {
 const [fistName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
 const [address, setAddress] = useState('');
 const [phone, setPhone] = useState('');
 const [description, setDescription] = useState('');

 const handleSubmit = (e : FocusEvent) => {
       e.preventDefault();

       const data = {
        fistName,
        lastName,
        email,
        address,
        phone,
        description
       }

       console.log(data)
 }

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
          width='full'
          align='center'
          justifyContent='center'
          backgroundColor='hsl(148, 38%, 91%)'
          position='relative'
          
          >
        <Box
         px={12}
         py={12}
         width='full'
         maxWidth='450px'
         textAlign='center'
         boxShadow='lg'
         background='gray.700'
         borderRadius='6px'
        
        >
          <Heading>
            <Text textColor='gray.200' fontSize='2xl'>Registragion form</Text>
          </Heading>
          <Box>
            <form action='' autoComplete="off" onSubmit={handleSubmit}>

              <Flex justifyContent='space-between'>
            <FormControl isRequired marginTop='15px' width='49%'>
              <FormLabel textColor='gray.200'>First name</FormLabel>
              <Input
               type='text'
               name="firstName"
               border='none'
               outline='none'
               bgColor='gray.900'
               focusBorderColor="gray.600"
               color='gray.200'
               placeholder="First name" 
               onChange={(e) => setFirstName(e.target.value)}              
               />              
           </FormControl>

           <FormControl isRequired marginTop='15px' width='49%'>
              <FormLabel textColor='gray.200'>Last name</FormLabel>
              <Input
               type='text'
               name="lastName"
               border='none'
               outline='none'
               bgColor='gray.900'
               focusBorderColor="gray.600"
               color='gray.200'
               placeholder="Last name"
               onChange={(e) => setLastName(e.target.value)}                 
               />               
           </FormControl>
           </Flex>

           <FormControl isRequired marginTop='15px'>
              <FormLabel textColor='gray.200'>Your e-mail</FormLabel>
              <Input
               type='text'
               name="email<"
               border='none'
               outline='none'
               bgColor='gray.900'
               focusBorderColor="gray.600"
               color='gray.200'
               placeholder="Your e-mail"
               onChange={(e) => setEmail(e.target.value)}                
               />              
           </FormControl>

           <Flex justifyContent='space-between'>
           <FormControl isRequired marginTop='15px' width='49%'>
              <FormLabel textColor='gray.200'>Your address</FormLabel>
              <Input
               type='text'
               name="address"
               border='none'
               outline='none'
               bgColor='gray.900'
               focusBorderColor="gray.600"
               color='gray.200'
               placeholder="Your address"
               onChange={(e) => setAddress(e.target.value)}                 
               />              
           </FormControl>

           <FormControl isRequired marginTop='15px' width='49%'>
              <FormLabel textColor='gray.200'>Your phone</FormLabel>
              <Input
               type='text'
               name="name"
               border='none'
               outline='none'
               bgColor='gray.900'
               focusBorderColor="gray.600"
               color='gray.200'
               placeholder="Your phone"  
               onChange={(e) => setPhone(e.target.value)}               
               />               
           </FormControl>
           </Flex>

           <FormControl isRequired marginTop='15px'>
              <FormLabel textColor='gray.200'>Your description message</FormLabel>
              <Textarea               
               name="name"
               border='description'
               outline='none'
               bgColor='gray.900'
               focusBorderColor="gray.600"
               color='gray.200'
               resize='none'
               placeholder="Your descript menssage"
               onChange={(e) => setDescription(e.target.value)}                
               />               
           </FormControl>
              <Button
              type="submit"
              width='full'
              bgColor='green.400'
              mt={4}
              color='gray.200'
              _hover={{
                color:'black'
              }}
              >Register</Button>
              
            </form>
          </Box>
        </Box>
       </Flex>
      </main>
    </>
  );
}

export default Home;