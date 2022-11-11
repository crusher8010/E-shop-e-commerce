import { Flex, Text, Heading, FormControl, FormLabel, Select, RadioGroup, Radio, Input, Container, Button, useToast } from "@chakra-ui/react";
import { FaStore } from "react-icons/fa";
import {MdOutlineDashboard, MdDescription, MdLibraryAdd} from "react-icons/md"
import "./AdminPage.css";
import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom"

function AdminAddProduct(){
    const [brand, setBrand] = useState("");
    const [title, setTitle] = useState("");
    const [cat, setCat] = useState("shirt");
    const [gender, setGender] = useState("Mens");
    const [ori, setOri] = useState("")
    const [offerprice, setOfferPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [url, setUrl] = useState("");
    const toast = useToast();

    const addproduct = () => {
        let res = Number(offerprice)

        if(gender === "Mens"){
            axios.post('http://localhost:5000/Mens',{
                qty: 1,
                price: null,
                brand: brand,
                title: title,
                category: gender,
                original_price: `₹ ${ori}`,
                offer_price: res,
                discount: `(${discount}% off)`,
                image: url,
            })
        }else if(gender === "Womens"){
            axios.post('http://localhost:5000/Womens',{
                qty: 1,
                price: null,
                brand: brand,
                title: title,
                category: gender,
                original_price: `₹ ${ori}`,
                offer_price: res,
                discount: `(${discount}% off)`,
                image: url,
            })
        }else{
            axios.post('http://localhost:5000/Childrens',{
                qty: 1,
                price: null,
                brand: brand,
                title: title,
                category: gender,
                original_price: `₹ ${ori}`,
                offer_price: res,
                discount: `(${discount}% off)`,
                image: url,
            })
        }
 
        toast({
            position: "top",
            title: "Checkout Successful.",
            description: "Thank You for your Purchase.",
            status: "success",
            duration: 9000,
            isClosable: true,
        });

    }

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
                <div style={{width:"80%", margin:"auto"}}>
                    <Heading textAlign={"center"}>Add Product To Database</Heading>
                    <Container mt={6}>
                        <FormControl>
                            <FormLabel>Brand</FormLabel>
                            <Input type="text" name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                            <FormLabel>Title</FormLabel>
                            <Input type="text" name="brand" value={title} onChange={(e) => setTitle(e.target.value)}/>
                            <FormLabel>Category</FormLabel>
                            <RadioGroup value={gender} onChange={setGender}>
                                <Radio value="Mens">Male</Radio>
                                <Radio value="Womens">Female</Radio>
                                <Radio value="Boys & Girls">Childrens</Radio>
                            </RadioGroup>
                            <FormLabel>Type</FormLabel>
                            <Select value={cat} onChange={(e) => setCat(e.target.value)}>
                                <option value="shirt">Shirt</option>
                                <option value="pant">Pant</option>
                                <option value="jeans">Jeans</option>
                            </Select>
                            <FormLabel>Original Price</FormLabel>
                            <Input type="text" value={ori} onChange={(e) => setOri(e.target.value)}/>
                            <FormLabel>Offer Price</FormLabel>
                            <Input type="number" value={offerprice} onChange={(e) => setOfferPrice(e.target.value)}/>
                            <FormLabel>Discount Percentage</FormLabel>
                            <Input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)}/>
                            <FormLabel>Image URL</FormLabel>
                            <Input type="text" value={url} onChange={(e) => setUrl(e.target.value)}/>
                            <div style={{display:"flex", justifyContent:"center"}}>
                                <Button onClick={addproduct} mt={8} >Submit</Button>
                            </div>
                        </FormControl>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default AdminAddProduct;