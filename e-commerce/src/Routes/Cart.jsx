import { CartContext } from "../Context/CartContext/CartContext";
import { removeFromCart, checkout } from "../Context/CartContext/action";
import { useContext, useState, useRef } from "react";
import {
  TableContainer, Drawer, DrawerBody, Stack, DrawerOverlay, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerFooter, Box,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Tfoot,
  FormLabel,
  FormControl,
  Input,
  Container,
  Heading,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import axios from "axios";

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const [temp, setTemp] = useState(state);
  const [len, setLen] = useState(state.length);
  const toast = useToast();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  let total = 0;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  // console.log(state);

  const handledelete = (id) => {
    dispatch(removeFromCart(id));
    const dim = temp.filter((item) => {
      return item.id !== id;
    });
    setTemp(dim)
    const te = dim.reduce((a, c) => a + c.qty, 0);
    setLen(te);
    console.log(len);
  }
  

  const handleQty = (val, id) => {
    setTemp(
      temp.map((item) =>
        item.id === id ? { ...item, qty: item.qty + val } : item
      )
    );
    setLen(len+val)
    
  };

  

  const handlecheckout = () => {
    axios.post("http://localhost:5000/AdminData", {
      name: name,
      address: address,
      quantity: len,
      total: total,
    });
    setTemp([]);
    dispatch(checkout());
    setLen(0);
    toast({
      position: "top",
      title: "Checkout Successful.",
      description: "Thank You for your Purchase.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <div>
      <Navbar />
      {temp.length > 0 ? (
        <div>
          <TableContainer width={"80%"} m="auto">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Image</Th>
                  <Th>PRODUCT NAME</Th>
                  <Th>Quantity</Th>
                  <Th>PRICE (INR)</Th>
                  <Th>REMOVE FROM CART</Th>
                </Tr>
              </Thead>
              <Tbody>
                {temp.map((item) => {
                  total += Number(item.qty) * Number(item.offer_price);
                  return (
                    <Tr key={item.id}>
                      <Td>
                        <img
                          style={{ width: "80px", height: "80px" }}
                          src={item.image}
                          alt=""
                        />
                      </Td>
                      <Td>{item.title}</Td>
                      <Td>
                        <Button
                          disabled={item.qty === 1}
                          onClick={() => handleQty(-1, item.id)}
                          mr={"10px"}
                        >
                          {"-"}
                        </Button>
                        {item.qty}
                        <Button
                          disabled={item.qty === 4}
                          onClick={() => handleQty(1, item.id)}
                          ml={"10px"}
                        >
                          {"+"}
                        </Button>
                      </Td>
                      <Td>{Number(item.qty) * Number(item.offer_price)}</Td>
                      <Td>
                        <Button
                          onClick={() => handledelete(item.id)}
                        >
                          Remove From Cart
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th></Th>
                  <Th>Final Price</Th>
                  <Th>{Math.round(total)}</Th>
                  <Th>Total Items</Th>
                  <Th>{len}</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>

          <div>
            <div style={{display:"flex", justifyContent:"center", marginTop: "30px"}}>
              <Button colorScheme="teal" onClick={onOpen}>Proceed to Checkout</Button>
            </div>
            <Drawer
              isOpen={isOpen}
              placement="right"
              initialFocusRef={firstField}
              onClose={onClose}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth="1px">
                  Checkout
                </DrawerHeader>

                <DrawerBody>
                  <Stack spacing="24px">
                    <Box>
                      <FormLabel htmlFor="username">Name</FormLabel>
                      <Input
                        ref={firstField}
                        id="username"
                        placeholder="Please enter user name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Box>

                    <Box>
                      <FormLabel >Address</FormLabel>
                      <Input type="text" placeholder="Please enter your address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </Box>
                  </Stack>
                </DrawerBody>

                <DrawerFooter borderTopWidth="1px">
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button onClick={handlecheckout} colorScheme="blue">Submit</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: "16px" }}>
          <div style={{ width: "40%", margin: "auto" }}>
            <img
              style={{ width: "100%", margin: "auto" }}
              src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
