import { Navigate, Link } from "react-router-dom";
import { useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  FormHelperText,
  AlertIcon,
  Alert,
  AlertDescription,
  Checkbox,
  Heading,
  Input,
  Button,
  Text,
  Flex, useToast
} from "@chakra-ui/react";
import "./SignUp.css";
import { FaStore } from "react-icons/fa";

function SignUp() {
  const [error, SetError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [v1, setV1] = useState("")
  const [v2, setV2] = useState("")
  const [v3, setV3] = useState("")
  const toast = useToast();

  const handlesignup = () => {
    if((v1.trim().length && v2.trim().length && v3.trim().length) > 0 ){
        setSuccess(true);
    }else{
        SetError(true);
    }

    toast({
      position: 'top',
      title: 'Account Created.',
      description: "We've created your account Successfully.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  };

  if(success){
    return <Navigate to="/login" />
  }

  if(error){
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
    <div className="sign_struct">
      <Flex justifyContent={"center"} alignItems={"center"} gap="4" mt={20}>
        <FaStore color="orange" fontSize={"80px"} />
        <Text fontSize={"3xl"}>
          <b>ESHOP</b>
        </Text>
      </Flex>
      <Flex className="signup" mt={10} gap={4}>
        <div>
          <img
            style={{ width: "280px", height: "300px" }}
            src="https://image.shutterstock.com/image-vector/new-user-online-registration-sign-260nw-1982734163.jpg"
            alt=""
          />
        </div>
        <div>
          <Container border='1px' borderColor='gray.300' borderRadius={"2xl"} p={3}>
            <Heading textAlign={"center"}>Sign up to ESHOP</Heading>
            <FormControl >
                <FormLabel>Full Name</FormLabel>
                <Input type="text" value={v1} onChange={(e) => setV1(e.target.value)}/>
              <FormLabel mt={4}>Email Address</FormLabel>
              <Input type="email" name="email" value={v2} onChange={(e) => setV2(e.target.value)} />

              <FormLabel mt={4}>Password</FormLabel>
              <Input type="password" name="password" value={v3} onChange={(e) => setV3(e.target.value)} />
              <FormHelperText>We'll never share your Details</FormHelperText>
              <Checkbox colorScheme='blue' mt={4}>
                By Clicking on this you are agreeing to our terms and conditions
              </Checkbox>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button colorScheme={"blue"} mt={4} onClick={handlesignup}>
                  Submit
                </Button>
              </div>
            </FormControl>
          </Container>
        </div>
      </Flex>
    </div>
  );
}

export default SignUp;
