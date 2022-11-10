import Navbar from "./Navbar";
import axios from "axios";
import {useState, useEffect} from "react"; 
import {Button, Text, Radio, RadioGroup, Stack} from "@chakra-ui/react";
import "./Mens.css";

function Mens(){
    const [data, setData] = useState([]);
    const [order, setOrder] = useState("asc");
    const [val, setVal] = useState('');

    const fetchdata = (order, val) => {
        axios.get(`http://localhost:5000/Mens?_sort=offer_price&_order=${order}`)
        .then((res) => setData(res.data));
    }

    useEffect(() => {
        fetchdata(order, val);
    },[order, val]);

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
                                <Button>Add to Cart</Button>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default Mens;