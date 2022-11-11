import React from "react";
import { loginFailureAction, loginSuccessAction, loginLoadingAction, adminLogin } from "../Context/Auth/action";
import { AuthContext } from "../Context/Auth/AuthContext";
import {useContext, useState} from "react";
import {Button, Flex, Input, Text, Container, AlertIcon, Alert, AlertDescription, FormControl, FormLabel, FormHelperText, Radio, Heading, useToast} from "@chakra-ui/react";
import { FaStore } from "react-icons/fa";
import axios from "axios";
import {Navigate, Link} from "react-router-dom";

const Login = () => {
  const {state, dispatch} = useContext(AuthContext);
  const [logindetails, setLoginDetails] = useState({email:"", password:""})
  const toast = useToast()
  
  const handlechange = (e) => {
    const {name, value} = e.target;
    setLoginDetails({...logindetails, [name]:value})
  }

  const handlelogin = () => {
    let mail = "anirudhamandal8010@gmail.com"
    let code = "12345678";
    dispatch(loginLoadingAction())
    if(logindetails.email === mail && logindetails.password === code){
      dispatch(adminLogin());
    }else {
      axios.post('https://reqres.in/api/login',{
        email: logindetails.email,
        password: logindetails.password,
      })
      .then((res) => {
        dispatch(loginSuccessAction(res.data.token));
      })
      .catch(() => {
        dispatch(loginFailureAction());
      });
    }

    toast({
      position: 'top',
      title: 'Login Successful.',
      description: "You Have Successfully Logged in.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  if(state.isAuth){
    return <Navigate to="/" />
  }

  if(state.isAdmin){
    return <Navigate to="/adminpage" />
  }

  if(state.isError){
    return(
        <Container width={{base:"full", sm:"full", xm:"container.xl", lg:"container.lg"}} centerContent={true}>
            <Alert status={"error"} 
             py={{base: 4, sm: 4, md: 4, lg: 6}} my={{base: 24, sm: 24, md: 28, lg: 40}} px={{base: 1, sm: 1, md: 4, lg: 6}}
            >
                <AlertIcon />
                <AlertDescription>
                  Something Went Wrong. Please Refresh
                </AlertDescription>
                
            </Alert>
        </Container>
    )
  }

  return (
    <Container>
        <Flex justifyContent={"center"} alignItems={"center"} gap="4" mt={20}>
            <FaStore color="orange" fontSize={"48px"}/>
            <Text fontSize={"2xl"}><b>ESHOP</b></Text>
        </Flex>
        <FormControl border='1px' borderColor='gray.200' p={4} mt={8}>
            <Heading textAlign={"center"}>Login</Heading>
            <FormLabel mt={4}>Email Address</FormLabel>
            <Input type="email" name="email" value={logindetails.email} onChange={handlechange}/>
            
            <FormLabel mt={8}>Password</FormLabel>
            <Input type="password" name="password" value={logindetails.password} onChange={handlechange}/>
            <FormHelperText>We'll never share your Details</FormHelperText>
            
            <div style={{display:"flex", justifyContent:"center"}}>
                <Button mt={8} onClick={handlelogin} isLoading={state.isLoading}>Submit</Button>
            </div>
            <div style={{marginTop:"10px", textAlign:"center"}}>
                <p>Don't have a account. <Link to="/signup" style={{color:"blue"}}>Click Here</Link></p>
            </div>
        </FormControl>
    </Container>
  )
};



export default Login;
