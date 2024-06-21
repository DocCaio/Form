import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Box, Button, Flex, FormControl,FormLabel, Heading ,Input,Text, Textarea } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';


interface IUserFormData {
  firstName: string,
  lastName: string,
  email: string,
  address: string,
  phone: string,
  description: string,
  handleSubmit:() => void,
  OnSubmit : () => void,
}

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  address: yup.string().required(),
  phone: yup.string().required(),
  description: yup.string().required(),
}) 


const  Cadastro: FunctionComponent = () => {
 
    const { register , 
      handleSubmit, 
      formState: {errors}} = useForm<IUserFormData>( {
      resolver: yupResolver(schema)
    });
    function OnSubmit(data: IUserFormData) {
       console.log(data)
    }

    //function setErros(error: any){
      //console.log('erros', error)
    //}
    
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
            <form action='' autoComplete="off" onSubmit={handleSubmit(OnSubmit)}>

              <Flex justifyContent='space-between'>
            <FormControl isRequired marginTop='15px' width='49%'>
              <FormLabel textColor='gray.200'>First name</FormLabel>
              <Input
               type='text'               
               border='none'
               outline='none'
               bgColor='gray.900'
               focusBorderColor="gray.600"
               color='gray.200'
               placeholder="First name" 
               {...register('firstName')}           
               />    
              <p style={{ color: 'red' }}>{errors?.firstName?.message}</p>      
           </FormControl>

           <FormControl isRequired marginTop='15px' width='49%'>
              <FormLabel textColor='gray.200'>Last name</FormLabel>
              <Input
               type='text'               
               border='none'
               outline='none'
               bgColor='gray.900'
               focusBorderColor="gray.600"
               color='gray.200'
               placeholder="Last name"
               {...register('lastName')}            
               />
               <p style={{ color: 'red' }}>{errors?.lastName?.message}</p>               
           </FormControl>
           </Flex>

           <FormControl isRequired marginTop='15px'>
              <FormLabel textColor='gray.200'>Your e-mail</FormLabel>
              <Input
               type='text'               
               border='none'
               outline='none'
               bgColor='gray.900'
               focusBorderColor="gray.600"
               color='gray.200'
               placeholder="Your e-mail"
               {...register('email')}                
               />      
               <p style={{ color: 'red' }}>{errors?.email?.message}</p>        
           </FormControl>

           <Flex justifyContent='space-between'>
           <FormControl isRequired marginTop='15px' width='49%'>
              <FormLabel textColor='gray.200'>Your address</FormLabel>
              <Input
               type='text'               
               border='none'
               outline='none'
               bgColor='gray.900'
               focusBorderColor="gray.600"
               color='gray.200'
               placeholder="Your address"
               {...register('address')}               
               />  
               <p style={{ color: 'red' }}>{errors?.address?.message}</p>            
           </FormControl>

           <FormControl isRequired marginTop='15px' width='49%'>
              <FormLabel textColor='gray.200'>Your phone</FormLabel>
              <Input
               type='text'               
               border='none'
               outline='none'
               bgColor='gray.900'
               focusBorderColor="gray.600"
               color='gray.200'
               placeholder="Your phone"  
               {...register('phone')}              
               /> 
               <p style={{ color: 'red' }}>{errors?.phone?.message}</p>              
           </FormControl>
           </Flex>

           <FormControl isRequired marginTop='15px'>
              <FormLabel textColor='gray.200'>Your description message</FormLabel>
              <Textarea            
               border='none'
               outline='none'
               bgColor='gray.900'
               focusBorderColor="gray.600"
               color='gray.200'
               resize='none'
               placeholder="Your descript menssage"
               {...register('description')}              
               />   
               <p style={{ color: 'red' }}>{errors?.description?.message}</p>            
           </FormControl>
              <Button
              type="submit"              
              width='full'
              bgColor='hsl(169, 82%, 27%)'
              color= '#fff'              
              fontWeight= 'bold'
              border= '0'
              mt={4}           
              cursor= 'pointer'
              borderRadius= '5px'
              fontSize= 'clamp(0.875rem, 0.8315rem + 0.2174vi, 1rem)'         
              _hover={{
                color:'hsl(171, 83%, 14%)'
              }}
              >Register</Button>
              <fieldset className="checkbox">
            <div id="consent">
              <input   type="checkbox" name="consent" id="checkbox-input"/>
              <label style={{ display: 'none'}}  className="consent">I consent to being contacted by the team</label>
            </div>
            <p style={{ display: 'none'}} className="error-message hide">
              To submit form, please consent to being contacted
            </p>
          </fieldset>
              
            </form>
          </Box>
        </Box>
       </Flex>
      </main>
    </>
  );
}

export default Cadastro;