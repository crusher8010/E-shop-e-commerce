import {Box,Drawer,DrawerBody,DrawerContent,DrawerHeader,DrawerOverlay,DrawerCloseButton, useDisclosure, Button, Flex, Text} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaStore } from "react-icons/fa";
import {useState} from "react";
import {Link} from "react-router-dom";

function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [md, setMd] = useState(true);
    const [wd, setWd] = useState(false);
    const [cd, setCd] = useState(false);

    const handlediaplay1 = () => {
        setMd(true);
        setCd(false);
        setWd(false);
    }

    const handlediaplay2 = () => {
        setMd(false);
        setCd(false);
        setWd(true);
    }
    
    const handlediaplay3 = () => {
        setMd(false);
        setCd(true);
        setWd(false);
    }

    const handledrawer =() => {
        setMd(true);
        setCd(false);
        setWd(false);
        onOpen();
    }

  return (
    <div>
        <Button backgroundColor={"transparent"} fontSize="25px" onClick={handledrawer}><HamburgerIcon /></Button>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size={"xs"}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader></DrawerHeader>
                <DrawerBody>
                    <Box>
                        <Flex justifyContent={"center"} alignItems={"center"} gap="4">
                            <FaStore color="orange" fontSize={"48px"}/>
                            <Text fontSize={"2xl"}><b>ESHOP</b></Text>
                        </Flex>
                        <Flex mt={8} justifyContent={"space-around"}>
                            <Text style={{borderBottom: md ? "1px": "0px"}} onClick={handlediaplay1} backgroundColor={"transparent"}>{md ? <b>Mens</b> : "Mens"}</Text>
                            <Text onClick={handlediaplay2} backgroundColor={"transparent"}>{wd ? <b>Womens</b> : "Womens"}</Text>
                            <Text onClick={handlediaplay3} backgroundColor={"transparent"}>{cd ? <b>Childrens</b> : "Childrens"}</Text>
                        </Flex>
                        <div style={{display:md ? "flex" : "none", flexDirection:"column", marginLeft:"16px", marginTop:"24px"}} >
                            <Link to="/mens">All</Link>
                            <Link to="/menshirts">Shirts</Link>
                            <Link to="/menpants">Pants</Link>
                            <Link to="/jeans">Jeans</Link>
                            <Text>Shoes</Text>
                            <Text>Watches</Text>
                            <Text>Sweatshirts | Hoddies</Text>
                            <Text>Sweaters | Cardigans</Text>
                            <Text>Jackets | Blazzers</Text>
                            <Text>Suits</Text>
                            <Text>T-Shirts</Text>
                            <Text>Co-ord Sets</Text>
                            <Text>Perfumes</Text>
                        </div>
                        <Box style={{display:wd ? "block" : "none"}}   ml={4} mt={6}>
                            <Link to="/womens">All</Link>
                            <Text>Sharee</Text>
                            <Text>Kurtas</Text>
                            <Text>Tops</Text>
                            <Text>Jeans</Text>
                            <Text>Footwear</Text>
                            <Text>Pants</Text>
                            <Text>Cosmetics</Text>
                            <Text>Bags</Text>
                            <Text>Jackets | Overshirts</Text>
                            <Text>Waistcoats | Gilets</Text>
                            <Text>Skirts | Shorts</Text>
                            <Text>Knitwear</Text>
                        </Box>
                        <Box style={{display:cd ? "block" : "none"}} ml={4} mt={6}>
                            <Link to="/childrens">All</Link>
                            <Text>Shirts</Text>
                            <Text>Pants</Text>
                            <Text>Jeans</Text>
                            <Text>Festival Specials</Text>
                            <Text>Footwears</Text>
                            <Text>Toys</Text>
                        </Box>
                    </Box>
                </DrawerBody>
            </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Sidebar;