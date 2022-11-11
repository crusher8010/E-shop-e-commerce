import Navbar from "../../Components/Navbar";
import "./MensPants.css";
import {Button} from "@chakra-ui/react";

const pants = [
    {
        id: 1,
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/track-pant/h/j/1/m-av104stripe-navy-l-grey-avolt-original-imagjh95jffguzpe.jpeg?q=70",
        name: "AVOLT Pack of 2 Printed Men Blue, Grey Track Pants",
        price: 499,
    },
    {
        id: 2,
        img: "https://rukminim1.flixcart.com/image/832/832/l4iscy80/track-pant/m/x/g/l-aqua-nike-black-l32-aquaprime-original-imagfe7ymayaq4uk.jpeg?q=70",
        name: "AquaPrime Solid Men Black Track Pants",
        price: 500,
    },
    {
        id: 3,
        name: "fithub Solid Men Dark Green Track Pants",
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/track-pant/5/f/n/xxl-f214-fithub-original-imagg45gbbsufjjq.jpeg?q=70",
        price: 699,
    },
    {
        id: 4,
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/track-pant/n/u/4/xl-53641801-puma-original-imagg2xuuc8xnjur.jpeg?q=70",
        name: "PUMA Solid Men Black Track Pants",
        price: 3265,
    },
    {
        id: 5,
        img: "https://rukminim1.flixcart.com/image/832/832/l0fm07k0/track-pant/8/4/q/m-dd6216-010-nike-original-imagc84nuy2htn3f.jpeg?q=70",
        name: "NIKE Solid Men Black Track Pants",
        price: 2896,
    },
    {
        id: 6,
        img: "https://rukminim1.flixcart.com/image/832/832/kxqg2a80/trouser/5/d/x/30-ht-1019-hence-original-imaga4bjhemysxam.jpeg?q=70",
        name: "Slim Fit Men Cream Pure Cotton Trousers",
        price: 699
    },
    {
        id: 7,
        name: "CYPHUS Regular Fit Men Blue Cotton Blend Trousers",
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/r/e/m/28-cyfor-a-cyphus-original-imag66aucwaygyqq-bb.jpeg?q=70",
        price: 399
    },
    {
        id: 8,
        name: "Slim Fit Men Blue Cotton Blend Trousers",
        price: 479,
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/2/l/6/34-kctr-5555-nb-fubar-original-imagh3h2zvtdfzzs.jpeg?q=70",
    },
    {
        id: 9,
        name: "Slim Fit Men Grey Pure Cotton Trousers",
        img: "https://rukminim1.flixcart.com/image/832/832/kxqg2a80/trouser/g/z/e/34-ht-1018-hence-original-imaga4bjwmaghvrh.jpeg?q=70",
        price: 629
    },
    {
        id: 10,
        name: "HIGHLANDER Slim Fit Men Grey Cotton Blend Trousers",
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/h/i/e/36-hltr004407-highlander-original-imafzys5rscqzt7v-bb.jpeg?q=70",
        price: 751
    },
    {
        id: 11,
        name: "Raymond Slim Fit Men Black Polycotton Trousers",
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/trouser/g/e/m/32-rmts04373-k8-raymond-original-imagjgf44c32e6hv.jpeg?q=70",
        price: 1199
    },
    {
        id: 12,
        name: "Men Cargos",
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/cargo/k/z/d/42-shi-bgn1403-men-oishee-original-imaggvhvhdhtfc56.jpeg?q=70",
        price: 499,
    },
    {
        id: 13,
        name: "Plus91 Men Cargos",
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/cargo/k/n/t/30-dplaindori-blackl1-plus91-original-imafwyxhuyptrc4x-bb.jpeg?q=70",
        price: 489
    },
    {
        id: 14,
        name: "Dennis Lingo Men Cargos",
        img: "https://rukminim1.flixcart.com/image/832/832/l3uhvgw0/trouser/t/d/1/36-b501-g-grey-dennis-lingo-original-imagevq2ehw4gf8t.jpeg?q=70",
        price: 949,
    },
    {
        id: 15,
        name: "FastColors Men Cargos",
        img: "https://rukminim1.flixcart.com/image/832/832/xif0q/cargo/j/a/h/xxl-fc2055-fastcolors-original-imagbhwtyehkar3j-bb.jpeg?q=70",
        price: 399,
    }
]

function MensPants(){

    return (
        <div>
            <div style={{backgroundColor:"black", color:"#fff"}}>
                <Navbar />
            </div>
            <div className="menspants">
                {pants.map((item) => {
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
    )
}

export default MensPants