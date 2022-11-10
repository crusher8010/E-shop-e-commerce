import Navbar from "./Navbar";
import axios from "axios";
import {useState, useEffect, useContext} from "react"; 
import {Button, Text, Radio, RadioGroup, Stack, Container, Alert, AlertDescription, AlertIcon} from "@chakra-ui/react";
import "./Mens.css";
import { CartContext } from "../Context/CartContext/CartContext";
import { addToCart } from "../Context/CartContext/action";

const fetchdata = (order, val) => {
    return axios.get(`http://localhost:5000/Mens?_sort=offer_price&_order=${order}`)
}

const itemalreadyexists = (id, cartitem) => {
    if(cartitem.find((item) => item.id === id)){
        return true;
    }else{
        return false;
    }
}

function Mens(){
    const [data, setData] = useState([]);
    const [order, setOrder] = useState("asc");
    const [val, setVal] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {state, dispatch} = useContext(CartContext);


    useEffect(() => {
        setLoading(true)
        fetchdata(order, val)
        .then((res) => {
            setLoading(false);
            setData(res.data);
            setError(false);
        })
        .catch((err) => {
            setLoading(false);
            setError(true);
            setData([]);
        })
    },[order, val]);

    if(loading){
        return (
          <h1>...Loading</h1>
        )
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
        <div>
            <Navbar />

            <div className="wholemens">
                <div className="sort-part">
                    <Text ml={"50px"}>Sort By Price</Text>
                    <RadioGroup  value={order} onChange={setOrder} >
                        <Stack spacing={4} ml={"50px"}>
                            <Radio value="asc">Ascending</Radio>
                            <Radio value="desc">Descending</Radio>
                        </Stack>
                    </RadioGroup>

                    <Text ml={"50px"} mt={"30px"}>Filter By Following Groups</Text>
                    <RadioGroup  value={val} onChange={setVal}>
                        <Stack spacing={4} ml={"50px"}>
                            <Radio value="">All</Radio>
                            <Radio value="DENNISLINGO PREMIUM ATTIRE">DENNISLINGO PREMIUM ATTIRE</Radio>
                            <Radio value="The Indian Garage Co">The Indian Garage Co</Radio>
                            <Radio value="GLITO">GLITO</Radio>
                            <Radio value="THE BEAR HOUSE">THE BEAR HOUSE</Radio>
                            <Radio value="Bullmer">Bullmer</Radio>
                            <Radio value="AUSK">AUSK</Radio>
                            <Radio value="DENNISLINGO PREMIUM ATTIRE">DENNISLINGO PREMIUM ATTIRE</Radio>
                            <Radio value="GESPO">GESPO</Radio>
                        </Stack>
                    </RadioGroup>

                </div>
                <div className="mens-data">
                    {data.map((item) => {
                        return (
                            <div key={item.id}>
                                <img style={{width:"250px", height:"250px", margin:"auto"}} src={item.image} alt="" />
                                <h1>{item.title}</h1>
                                <p>₹  {item.offer_price}</p>
                                <Button disabled={itemalreadyexists(item.id, state)} onClick={() => dispatch(addToCart(item))}>Add to Cart</Button>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default Mens;