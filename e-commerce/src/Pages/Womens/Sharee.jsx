import "./Sharee.css";
import { Button } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar";

const saree = [
    {
        id: 1,
        image: "https://rukminim1.flixcart.com/image/832/832/l4iscy80/sari/c/f/d/free-mdh-anju-sarees-unstitched-original-imagfeudd6ytgfqx.jpeg?q=70",
        price: 539,
        name: "Striped Jamdani Cotton Blend, Cotton Linen Saree ",
    },
    {
        id: 2,
        image: "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/y/z/b/free-1902-red-jhilmil-fashion-unstitched-original-imagaz6ts8v7zqa9-bb.jpeg?q=70",
        price: 700,
        name: "Embellished Bandhani Georgette, Art Silk Saree",
    },
    {
        id: 3,
        image: "https://rukminim1.flixcart.com/image/832/832/xif0q/sari/x/u/s/free-banarasi-saree-kalapushpi-unstitched-original-imaggm7gjp5ftzca.jpeg?q=70",
        price: 497,
        name: "Self Design Banarasi Cotton Blend, Pure Silk Saree",
    },
    {
        id: 4,
        image: "https://rukminim1.flixcart.com/image/832/832/l09w8sw0/sari/k/p/7/free-rifa-gajari-navy-blue-finewear-unstitched-original-imagc3hfbgs9vqja.jpeg?q=70",
        price: 764,
        name: "Self Design Banarasi Cotton Silk Saree",
    },
    {
        id: 5,
        image: "https://rukminim1.flixcart.com/image/832/832/l111lzk0/sari/p/s/3/free-lg-1397-hsfashionhub-unstitched-original-imagczxygwpnte5f.jpeg?q=70",
        price: 619,
        name: "Digital Print, Striped Bollywood Georgette Saree",
    },
    {
        id: 6,
        image: "https://rukminim1.flixcart.com/image/832/832/l52sivk0/sari/l/c/7/free-bsp001-banaras-silk-palace-unstitched-original-imagftbj4rpyypzz.jpeg?q=70",
        price: 999,
        name: "Woven Banarasi Silk Blend, Satin Saree",
    },
    {
        id: 7,
        image: "https://rukminim1.flixcart.com/image/832/832/ku79vgw0/sari/c/h/t/free-28562-mirchi-fashion-unstitched-original-imag7dtfjrtmgbth.jpeg?q=70",
        price: 379,
        name: "Printed, Floral Print Daily Wear Chiffon Saree",
    },
    {
        id: 8,
        image: "https://rukminim1.flixcart.com/image/832/832/l4x2rgw0/sari/7/e/s/free-abha-swannah-unstitched-original-imagfpgbg6gruzcg.jpeg?q=70",
        price: 543,
        name: "Floral Print Kanjivaram Pure Silk Saree",
    },
    {
        id: 9,
        image: "https://rukminim1.flixcart.com/image/832/832/ke1pnrk0-0/sari/q/n/d/free-s1002-lensta-creation-unstitched-original-imafutfcypdqerjp.jpeg?q=70",
        price: 1349,
        name: "Woven Banarasi Jacquard, Art Silk Saree",
    },
    {
        id: 10,
        image: "https://rukminim1.flixcart.com/image/832/832/kkvhea80/sari/l/2/o/free-pankhudi-2-trijal-fab-unstitched-original-imagy484p6wg4aec.jpeg?q=70",
        price: 608,
        name: "Embroidered Bollywood Silk Blend Saree",
    },
    {
        id: 11,
        image: "https://rukminim1.flixcart.com/image/832/832/kiw1dow0-0/sari/w/6/h/free-2d-trijal-fab-unstitched-original-imafykt8zv5gyxpv.jpeg?q=70",
        price: 719,
        name: "Embroidered Bollywood Silk Blend Saree",
    },
    {
        id: 12,
        image: "https://rukminim1.flixcart.com/image/832/832/k55n0y80/sari/r/j/c/free-yellow-floral-saree-wear-affair-original-imafnwg7rnfb76me.jpeg?q=70",
        price: 339,
        name: "Embellished Ikkat Art Silk Saree",
    }
];

function Sharee(){
    return (
        <div>
            <div style={{backgroundColor:"black", color:"#fff"}}>
                <Navbar />
            </div>
            <div className="saree">
                {saree.map((item) => {
                    return (
                        <div key={item.id}>
                            <img style={{ width: "300px", height: "300px", margin: "auto" }} src={item.image} alt="" />
                            <h1>{item.name}</h1>
                            <p>₹ {item.price}</p>
                            <Button>Add to Cart</Button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Sharee;