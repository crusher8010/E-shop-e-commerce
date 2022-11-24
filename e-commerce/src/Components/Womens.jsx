import Navbar from "./Navbar";
import axios from "axios";
import {useState, useEffect, useContext} from "react"; 
import {Button, Text, Radio, RadioGroup, Grid, Alert, AlertDescription, AlertIcon, Container} from "@chakra-ui/react";
import "./Womens.css";
import { CartContext } from "../Context/CartContext/CartContext";
import { addToCart } from "../Context/CartContext/action";
import Pagination from "../Routes/Pagination";

const fetchdata = (order, val, page = 1) => {
    if (val != "") {
        return axios.get(
          `https://ani-mock-server-app.onrender.com/Womens?_sort=offer_price&_order=${order}&type=${val}&_page=${page}&_limit=6`
        );
      } else {
        return axios.get(
          `https://ani-mock-server-app.onrender.com/Womens?_sort=offer_price&_order=${order}&_page=${page}&_limit=6`
        );
    }
}

const itemalreadyexists = (id, cartitem) => {
    if(cartitem.find((item) => item.id === id)){
        return true;
    }else{
        return false;
    }
}

function Womens(){
    const [data, setData] = useState([]);
    const [order, setOrder] = useState("asc");
    const [val, setVal] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {state, dispatch} = useContext(CartContext);
    const [page, setPage] = useState(1)

    useEffect(() => {
        setLoading(true)
        fetchdata(order, val, page)
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
    },[order, val, page]);

    const handlepage = (val) => {
        setPage(page+val)
    }

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
            <div style={{backgroundColor:"black", color:"#fff"}}>
                <Navbar />
            </div>

            <div className="wholewomens">
                <div className="sort-part-womens">
                    <Text ml={"12px"} mt={"30px"} mb={4}><b>Sort By Price</b></Text>
                    <RadioGroup  value={order} onChange={setOrder} >
                        <Grid className="setcategories">
                            <Radio value="asc">Ascending</Radio>
                            <Radio value="desc">Descending</Radio>
                        </Grid>
                    </RadioGroup>

                    <Text ml={"12px"} mt={"30px"} mb={4}><b>Filter By Following Groups</b></Text>
                    <RadioGroup  value={val} onChange={setVal}>
                        <Grid className="setcategories">
                            <Radio value="">All</Radio>
                            <Radio value="top">Top</Radio>
                            <Radio value="jeans">Jeans</Radio>
                            <Radio value="pants">Pants</Radio>
                            <Radio value="kurta">Kurta Set</Radio>
                            <Radio value="dress">Dress</Radio>
                            <Radio value="tshirt">T-Shirt</Radio>
                            <Radio value="footwear">Shoes or Sandals</Radio>
                            <Radio value="palazzos">Palazzos</Radio>
                            <Radio value="sweatshirt">Sweat-Shirt</Radio>
                        </Grid>
                    </RadioGroup>

                </div>
                <div style={{width:"75%"}}>
                <div className="womens-data">
                    {data.map((item) => {
                        return (
                            <div>
                                <img style={{width:"250px", height:"250px", margin:"auto"}} src={item.image} alt="" />
                                <h1>{item.title}</h1>
                                <p>₹  {item.offer_price}</p>
                                <Button disabled={itemalreadyexists(item.id, state)} onClick={() => dispatch(addToCart(item))}>Add to Cart</Button>
                            </div>
                        )
                    })}
                </div>
                <div style={{display:"flex", justifyContent:"center", marginTop:"50px"}}>
                    <Pagination onChange={handlepage} current={page}/>
                </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Womens;