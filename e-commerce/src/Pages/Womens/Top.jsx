import "./Top.css";
import { Button } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar";

const top = [
    {
        id: 1,
        image: "https://rukminim1.flixcart.com/image/832/832/ktd9mkw0/t-shirt/q/h/j/l-necktop-red-base-41-original-imag6qdhgygmybkh.jpeg?q=70",
        price: 199,
        name: "Solid Women Round Neck Red T-Shirt"
    },
    {
        id: 2,
        image: "https://rukminim1.flixcart.com/image/832/832/xif0q/p/s/a/1-1-gr2870navy-harpa-s-original-imaea5eynznzmfw4-bb.jpeg?q=70",
        price: 373,
        name: "Casual Regular Sleeves Polka Print Women Dark Blue Top"
    },
    {
        id: 3,
        image: "https://rukminim1.flixcart.com/image/832/832/kvzkosw0/top/f/a/7/s-tttp005236-tokyo-talkies-original-imag8rmvmdtqjen6.jpeg?q=70",
        price: 244,
        name: "Casual Regular Sleeves Striped Women Multicolor Top"
    },
    {
        id: 4,
        image: "https://rukminim1.flixcart.com/image/832/832/kkfrjww0/top/3/f/x/xxl-slk-24-subh-laxmi-original-imafzs22gtjhaagm.jpeg?q=70",
        price: 379,
        name: "Casual Bell Sleeves Printed Women Orange Top"
    },
    {
        id: 5,
        image: "https://rukminim1.flixcart.com/image/832/832/kflftzk0/top/9/f/j/xl-gr5693-pink-harpa-original-imafwysgrnswdqk6.jpeg?q=70",
        price: 347,
        name: "Casual Roll Up Sleeves Solid Women Pink Top"
    },
    {
        id: 6,
        image: "https://rukminim1.flixcart.com/image/832/832/kcc9q4w0/t-shirt/s/z/q/s-2co-w-regular-must-blk-young-trendz-original-imafthf9brdq8cfj.jpeg?q=70",
        price: 443,
        name: "Pack of 2 Solid Women Round Neck Black, Pink T-Shirt"
    },
    {
        id: 7,
        image: "https://rukminim1.flixcart.com/image/832/832/l51d30w0/t-shirt/q/w/3/xs-238746501-only-original-imagfszef3qpttqg.jpeg?q=70",
        price: 1079,
        name: "Printed Women Round Neck Multicolor T-Shirt"
    },
    {
        id: 8,
        image: "https://rukminim1.flixcart.com/image/832/832/kxp0mfk0/t-shirt/k/g/e/-original-imaga3g7hd29qzpk.jpeg?q=70",
        price: 960,
        name: "Nike Icon ClashWomen's Running Top Printed Women Round Neck Black T-Shirt"
    },
    {
        id: 9,
        image: "https://rukminim1.flixcart.com/image/832/832/krayqa80/top/y/s/j/xs-16991-isu-original-imag54gywghjsqbq.jpeg?q=70",
        price: 876,
        name: "Casual Puff Sleeves Floral Print Women Green, White Top"
    },
    {
        id: 10,
        image: "https://rukminim1.flixcart.com/image/832/832/ky1vl3k0/t-shirt/l/p/j/m-women-high-neck-t-shirt-cartgraph-original-imagadj2zgastfpm.jpeg?q=70",
        price: 849,
        name: "Solid Women High Neck White T-Shirt"
    },
    {
        id: 11,
        image: "https://rukminim1.flixcart.com/image/832/832/km57hjk0/top/k/l/t/xs-58645201-puma-original-imagf3sgfpq2f4wa.jpeg?q=70",
        price: 689,
        name: "Casual Sleeveless Printed Women Black Top"
    },
    {
        id: 12,
        image: "https://rukminim1.flixcart.com/image/832/832/l01blow0/top/q/x/v/s-gr6245-mustard-harpa-original-imagbwnh7s5pzr29.jpeg?q=70",
        price: 401,
        name: "Casual Puff Sleeves Solid Women Yellow Top"
    },
]

function Top(){
    return (
        <div>
            <div style={{backgroundColor:"black", color:"#fff"}}>
                <Navbar />
            </div>
            <div className="top">
                {top.map((item) => {
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

export default Top;