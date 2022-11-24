import { Flex, Text, Heading, Table, Thead, Tbody, Tfoot, Tr, Td, Th, TableContainer } from "@chakra-ui/react";
import { FaStore } from "react-icons/fa";
import {MdOutlineDashboard, MdDescription, MdLibraryAdd} from "react-icons/md"
import "./AdminPage.css";
import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom"

function AdminPurchase(){
    const [purchase, setPurchase] = useState([]);

    const fetchdata = () => {
        axios.get('https://ani-mock-server-app.onrender.com/AdminData')
        .then((res) => setPurchase(res.data));
    }

    useEffect(() => {
        fetchdata();
    },[]);
    

    return (
        <div>
            <div className="admin-navbar">
                <Flex justifyContent={"center"} alignItems={"center"} gap="4"  ml={10}>
                    <FaStore color="orange" fontSize={"48px"} />
                    <Text color={"white"} fontSize={"2xl"}><b>ESHOP</b></Text>
                </Flex>
                <Text color={"white"}  fontSize={"2xl"} mr={10}><b>Welcome Admin</b></Text>
            </div>
            <div className="admin-front">
                <div className="admin-sidebar">
                    <Flex justifyContent={"center"} alignItems={"center"} gap="4" mt={4}>
                        <MdOutlineDashboard color="white" fontSize={"24px"} />
                        <Link to="/adminpage"><Text color="white"><b>Dashboard</b></Text></Link>
                    </Flex>
                    <Flex justifyContent={"center"} alignItems={"center"} gap="4" mt={8}>
                        <MdDescription color="white" fontSize={"24px"} />
                        <Link to="/adminpurchase"><Text color="white"><b>Purchase History</b></Text></Link>
                    </Flex>
                    <Flex justifyContent={"center"} alignItems={"center"} gap="4" mt={8}>
                        <MdLibraryAdd color="white" fontSize={"24px"} />
                        <Link to="/adminaddproduct"><Text color="white"><b>Add Products</b></Text></Link>
                    </Flex>
                </div>
                <div style={{width:"100%"}}>
                <Heading textAlign={"center"}>Purchase History</Heading>
                <div style={{border:"1px solid",width:"80%", margin:"auto", marginTop:"30px"}}>
                    
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Address</Th>
                                    <Th>No. of Items</Th>
                                    <Th>Total Purchase</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {purchase.map((item) => (
                                    <Tr>
                                        <Td>{item.name}</Td>
                                        <Td>{item.address}</Td>
                                        <Td >{item.quantity}</Td>
                                        <Td>{item.total}</Td>
                                    </Tr>
                                ))}
                                
                            </Tbody>
                        </Table>
                    </TableContainer>
                </div>

                </div>
                
            </div>
        </div>
    )
}

export default AdminPurchase;