import "./Kurta.css";
import { Button } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar";

const kurta = [
    {
        id: 1,
        image: "https://rukminim1.flixcart.com/image/832/832/xif0q/ethnic-set/t/d/0/s-ksdredberry-stylum-original-imagh4kcrzhwz2uh.jpeg?q=70",
        price: 1339,
        name: "Women Kurta and Sharara Set Viscose Rayon, Chiffon",
    },
    {
        id: 2,
        image: "https://rukminim1.flixcart.com/image/832/832/xif0q/ethnic-set/4/q/s/m-teal-ghanti-gvs-shoppe-original-imag9wzqb4zgr58h-bb.jpeg?q=70",
        price: 765,
        name: "Women Kurta and Pant Set Viscose Rayon",
    },
    {
        id: 3,
        image: "https://rukminim1.flixcart.com/image/832/832/l2w7b0w0/ethnic-set/9/7/9/xxl-5048-v-tradition-original-image5fpzydceh83.jpeg?q=70",
        price: 639,
        name: "Women Kurta and Palazzo Set Art Silk",
    },
    {
        id: 4,
        image: "https://rukminim1.flixcart.com/image/832/832/l1qrjbk0/shopsy-ethnic-set/j/m/7/xs-redzikzak-upasana-traders-original-imagd8vsrb6a5mkf.jpeg?q=70",
        price: 479,
        name: "Women Kurta and Sharara Set Viscose Rayon",
    },
    {
        id: 5,
        image: "https://rukminim1.flixcart.com/image/832/832/kyvvtzk0/ethnic-set/u/u/s/xxl-sequence-shrines-original-imagbyq4yn88ne7s.jpeg?q=70",
        price: 795,
        name: "Women Kurta and Pant Set Viscose Rayon",
    },
    {
        id: 6,
        image: "https://rukminim1.flixcart.com/image/832/832/l1fc0i80/ethnic-set/i/r/5/m-33309o-libas-original-imagczrmcz44hdeh.jpeg?q=70",
        price: 2499,
        name: "Women Kurta and Palazzo Set Cotton Blend",
    },
    {
        id: 7,
        image: "https://rukminim1.flixcart.com/image/832/832/l55nekw0/ethnic-set/l/3/n/3xl-vv-9081-purpul-3xl-vredevogel-original-imagfvyga2zge4yz.jpeg?q=70",
        price: 674,
        name: "Women Kurta, Pant And Dupatta Set Cotton Blend",
    },
    {
        id: 8,
        image: "https://rukminim1.flixcart.com/image/832/832/xif0q/ethnic-set/t/t/b/xl-sheks737-strt-shewill-original-imaggcryp2z9gfzz.jpeg?q=70",
        price: 999,
        name: "Women Kurta, Pant And Dupatta Set Cotton Blend",
    },
    {
        id: 9,
        image: "https://rukminim1.flixcart.com/image/832/832/xif0q/ethnic-set/h/f/r/m-bluezoomskirtoset-stylum-original-imafwfyqsqnwhfeu-bb.jpeg?q=70",
        price: 711,
        name: "Women Top and Skirt Set Viscose Rayon",
    },
    {
        id: 10,
        image: "https://rukminim1.flixcart.com/image/832/832/ktq4l8w0/ethnic-set/b/0/4/xs-5046-v-tradition-original-imag7y8bvhedjhmb.jpeg?q=70",
        price: 539,
        name: "Women Kurta and Pant Set Art Silk",
    },
    {
        id: 11,
        image: "https://rukminim1.flixcart.com/image/832/832/xif0q/ethnic-set/x/i/p/xxl-kpdorangelurex-stylum-original-imaggmxcyq3ezggp.jpeg?q=70",
        price: 1399,
        name: "Women Kurta and Palazzo Set Pure Cotton",
    },
    {
        id: 12,
        image: "https://rukminim1.flixcart.com/image/832/832/xif0q/ethnic-set/c/c/p/l-yel2p-5090-s-boutiqo-original-imag2yadmfaxwhhr-bb.jpeg?q=70",
        price: 614,
        name: "Women Kurta and Palazzo Set Cotton Rayon",
    }
]

function Kurta(){
    return (
        <div>
            <div style={{backgroundColor:"black", color:"#fff"}}>
                <Navbar />
            </div>
            <div className="kurta">
                {kurta.map((item) => {
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

export default Kurta;