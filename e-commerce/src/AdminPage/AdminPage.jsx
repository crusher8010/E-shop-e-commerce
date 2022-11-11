import { Flex, Text, Heading } from "@chakra-ui/react";
import { FaStore } from "react-icons/fa";
import "./AdminPage.css";
import {MdOutlineDashboard, MdDescription, MdLibraryAdd} from "react-icons/md";
import {Link} from "react-router-dom";

function AdminPage(){
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
                <div className="admin-home">
                    <div style={{width:"300px", margin:"auto"}}>
                        <img  src="https://www.desicomments.com/wp-content/uploads/2018/11/Pink-Glitter-Welcome-With-Pooh.gif" alt="" />
                    </div>

                    <div className="admin-group">
                        <div style={{height:"100%", border:"1px solid", backgroundColor:"#9932CC"}}>
                            <Text fontSize={"xl"} mt={"20px"}><b>Total Customers</b></Text>
                            <Text><b>25,431</b></Text>
                        </div>
                        <div style={{height:"100%", border:"1px solid", backgroundColor:"crimson"}}>
                            <Text fontSize={"xl"} mt={"20px"}><b>Today's Income</b></Text>
                            <Text><b>₹ 5,431</b></Text>
                        </div>
                        <div style={{height:"100%", border:"1px solid", backgroundColor:"skyblue"}}>
                            <Text fontSize={"xl"} mt={"20px"}><b>Order Canceled Today</b></Text>
                            <Text><b>0</b></Text>
                        </div>
                        <div style={{height:"100px", border:"1px solid", backgroundColor:"#7FFF00"}}>
                            <Text fontSize={"xl"} mt={"20px"}><b>Pending Order</b></Text>
                            <Text><b>3</b></Text>
                        </div>
                    </div>
                    <div style={{marginTop:"40px"}}>
                        <Heading>Customer Reviews</Heading>
                        <div className="admin-review">
                            <img style={{width:"80px", height:"80px", borderRadius:"50%"}} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                            <div>
                                <h1><b>Cassy keth</b></h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odio exercitationem quaerat maxime facilis, veritatis neque rerum debitis officiis tempora.</p>
                            </div>
                        </div>
                        <div className="admin-review">
                            <img style={{width:"80px", height:"80px", borderRadius:"50%"}} src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="" />
                            <div>
                                <h1><b>David Miller</b></h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odio exercitationem quaerat maxime facilis, veritatis neque rerum debitis officiis tempora.</p>
                            </div>
                        </div>
                        <div className="admin-review">
                            <img style={{width:"80px", height:"80px", borderRadius:"50%"}} src="https://previews.123rf.com/images/thefinalmiracle/thefinalmiracle1110/thefinalmiracle111000056/11065574-a-portrait-of-a-young-indian-man-.jpg" alt="" />
                            <div>
                                <h1><b>Rahul Sharma</b></h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odio exercitationem quaerat maxime facilis, veritatis neque rerum debitis officiis tempora.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AdminPage;