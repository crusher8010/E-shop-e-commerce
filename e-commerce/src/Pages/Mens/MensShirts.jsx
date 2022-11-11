import { Button } from "@chakra-ui/react";
import "./Jeans.css";
import Navbar from "../../Components/Navbar";
import "./MensShirts.css"

const shirts = [
    {
        id: 1,
        name: "TIGERSNAKE Men Regular Fit Solid Formal Shirt",
        price: 699,
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/q/b/l/xl-um0019-tigersnake-original-imaggvudhhp6eyub.jpeg?q=70",
    },
    {
        id: 2,
        name: "Men Regular Fit Solid Button Down Collar Formal Shirt",
        price: 359,
        img: "https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/z/e/c/l-frml-st2-vebnor-original-imag6apmrww553re.jpeg?q=70"
    },
    {
        id: 3,
        name: "MILDIN Men Slim Fit Solid Spread Collar Formal Shirt",
        price: 399,
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/x/m/n/40-men-regular-slim-fit-solid-button-down-collar-formal-shirt-original-imagf4mn9zg7qrmf-bb.jpeg?q=70",
    },
    {
        id: 4,
        name: "Men Slim Fit Checkered Spread Collar Casual Shirt",
        price: 329,
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/j/a/6/m-ts-shirt1041-tanip-original-imag6e72yjsehaj9-bb.jpeg?q=70",
    },
    {
        id: 5,
        name: "Men Regular Fit Checkered Formal Shirt",
        price: 699,
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/q/0/u/m-502-sheikh-enterprises-original-imagjjatzzmusy56.jpeg?q=70",
    },
    {
        id: 6,
        name: "Men Regular Fit Solid Spread Collar Formal Shirt",
        price: 439,
        img: "https://rukminim1.flixcart.com/image/832/832/l02r1jk0/shirt/l/t/u/s-fbrml-r-fibermill-original-imagbxyu5wbw27eg.jpeg?q=70"
    },
    {
        id: 7,
        name: "Men Regular Fit Printed Cut Away Collar Casual Shirt",
        price: 419,
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/f/3/1/m-colourfull-striped-shirt-seventeenstitch-original-imaghgfr2xjawzgx.jpeg?q=70",
    },
    {
        id: 8,
        name: "CHENECLOTH Men Regular Fit Printed Cut Away Collar Casual Shirt",
        price: 699,
        img: "https://rukminim1.flixcart.com/image/832/832/kiqbma80-0/fabric/d/i/0/no-unstitched-h1-hari-trendz-clothing-original-imafygpnuuscsfyq.jpeg?q=70"
    },
    {
        id: 9,
        name: "Men Regular Fit Striped Spread Collar Casual Shirt",
        price: 398,
        img: "https://rukminim1.flixcart.com/image/832/832/kflftzk0-0/shirt/h/b/2/s-rs19stpw08-p-rope-original-imafwyfyffrcpxd2.jpeg?q=70",
    },
    {
        id: 10,
        name: "Dennis Lingo Men Slim Fit Solid Spread Collar Casual Shirt",
        price: 649,
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/2/n/x/xxl-c301-black-dennis-lingo-original-imafw2gg2n7ygpwv-bb.jpeg?q=70"
    },
    {
        id: 11,
        name: "Men Slim Fit Self Design, Striped Slim Collar Casual Shirt",
        price: 779,
        img: "https://rukminim1.flixcart.com/image/832/832/kydb3ww0/shirt/m/d/q/xl-ba-waffle-shirts-white-xl-bluearrow-original-imagahh2heq3rhkh.jpeg?q=70",
    },
    {
        id: 12,
        name: "Men Slim Fit Checkered Cut Away Collar Casual Shirt",
        price: 2849,
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/w/h/e/46-araesh0295-arrow-original-imagg4a9ewvbzefg.jpeg?q=70"
    },
    {
        id: 13,
        img: "https://rukminim1.flixcart.com/image/832/832/ktd9mkw0/shirt/i/a/r/l-denim-shirt-royal-enfield-original-imag6qec7jhgpnvf.jpeg?q=70",
        name: "ROYAL ENFIELD Men Regular Fit Solid Spread Collar Casual Shirt",
        price: 2800,
    },
    {
        id: 14,
        name: "Men Regular Fit Checkered Button Down Collar Casual Shirt",
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/z/9/u/xxl-lmsh002251-lee-original-imaggwus65vwnnzb.jpeg?q=70",
        price: 2799,
    }
]

function MensShirts(){
    return (
        <div>
            <div style={{backgroundColor:"black", color:"#fff"}}>
                <Navbar />
            </div>
            <div className="mensShirts">
                {shirts.map((item) => {
                    return (
                    <div key={item.id}>
                        <img style={{ width: "250px", height: "300px", margin: "auto" }} src={item.img} alt=""/>
                        <h1>{item.name}</h1>
                        <p>₹ {item.price}</p>
                        <Button>Add to Cart</Button>
                    </div>
                );
            })}
          </div>
        </div>
    );
}

export default MensShirts;