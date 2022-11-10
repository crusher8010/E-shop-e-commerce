import { CartContext } from "../Context/CartContext/CartContext";
import { removeFromCart } from "../Context/CartContext/action";
import { useContext, useState } from "react";
import {
  TableContainer,
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

  const handleQty = (val, id) => {
    setTemp(
      temp.map((item) =>
        item.id === id ? { ...item, qty: item.qty + val } : item
      )
    );
    setLen(len + val);
  };

  const handlecheckout = () => {
    axios.post("http://localhost:5000/AdminData", {
      name: name,
      address: address,
      quantity: len,
      total: total,
    });
    setTemp([]);
    setLen(0);
    toast({
      position: "top",
      title: "Checking Done Successful.",
      description: "Thank You for your Purchase.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
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
                          onClick={() => dispatch(removeFromCart(item.id))}
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

          <Container
            border="1px"
            borderColor="gray.300"
            borderRadius={"2xl"}
            p={4}
            mt={20}
          >
            <Heading textAlign={"center"}>Checkout Address</Heading>
            <FormControl>
              <FormLabel mt={4}>Name</FormLabel>
              <Input type="text" value={name} onClick={(e) => setName(e.target.value)}/>
              <FormLabel mt={4}>Address</FormLabel>
              <Input type="text" value={address} onClick={(e) => setAddress(e.target.value)} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  mt={8}
                  onClick={handlecheckout}
                  isLoading={state.isLoading}
                >
                  Submit
                </Button>
              </div>
            </FormControl>
          </Container>
        </div>
      ) : (
        <div style={{marginTop:"16px"}}>
          <div style={{width:"40%", margin:"auto"}}>
            <img style={{width:"100%", margin:"auto"}} src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png" alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
