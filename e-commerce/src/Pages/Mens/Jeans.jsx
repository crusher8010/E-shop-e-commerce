import { Button } from "@chakra-ui/react";
import "./Jeans.css";
import Navbar from "../../Components/Navbar";

const jeans = [
  {
    id: 1,
    price: 1758,
    image:
      "https://rukminim1.flixcart.com/image/832/832/kkec4280/jean/c/y/y/38-udjeno0113-u-s-polo-assn-original-imafzr74zgmffb7h.jpeg?q=70",
    name: "Slim Men Blue Jeans",
  },
  {
    id: 2,
    price: 1799,
    name: "Slim Men Blue Jeans",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/jean/y/n/s/36-bhdi22041-being-human-original-imagjykutbq3gwgx.jpeg?q=70",
  },
  {
    id: 3,
    price: 359,
    name: "Regular Men Light Blue Jeans",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/jean/z/h/s/42-r1301-rasso-original-imagguqhp85bgbvy.jpeg?q=70",
  },
  {
    id: 4,
    price: 449,
    name: "Slim Men Dark Blue Jeans",
    image:
      "https://rukminim1.flixcart.com/image/832/832/krayqa80/jean/e/b/q/32-mss21jn744-metronaut-original-imag54fbyjsj6gvh.jpeg?q=70",
  },
  {
    id: 5,
    price: 659,
    name: "Tapered Fit Men Blue Jeans",
    image:
      "https://rukminim1.flixcart.com/image/832/832/kxnl6kw0/jean/h/5/u/32-kmjnrl410-blue-numero-uno-original-imaga2aswq9bxadg.jpeg?q=70",
  },
  {
    id: 6,
    price: 753,
    name: "Tapered Fit Men Grey Jeans",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/jean/h/b/u/30-hljn000882-highlander-original-imafw2gyyzf3fhf2-bb.jpeg?q=70",
  },
  {
    id: 7,
    price: 1565,
    name: "UU.S. POLO Blur Jeans",
    image:
      "https://rukminim1.flixcart.com/image/832/832/l37mtu80/jean/3/r/k/38-udjeno0466-u-s-polo-assn-original-imagedvphquyjtyj.jpeg?q=70",
  },
  {
    id: 8,
    price: 359,
    name: "Lzard Regular Men Black Jeans",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/jean/q/b/2/40-lj6412-lzard-original-imaggsp44w9mpn3z.jpeg?q=70",
  },
  {
    id: 9,
    price: 1241,
    name: "Skinny Men Blue Jeans",
    image:
      "https://rukminim1.flixcart.com/image/832/832/l1jmc280/jean/x/n/r/36-fmjno1596-flying-machine-original-imagd375esepfdez.jpeg?q=70",
  },
  {
    id: 10,
    price: 1726,
    name: "POLO ASSN. Slim Men Black Jeans",
    image:
      "https://rukminim1.flixcart.com/image/832/832/l37mtu80/jean/3/m/y/38-udjen0347-u-s-polo-assn-original-imagedvqggymzrfh.jpeg?q=70",
  },
];

function Jeans() {
  return (
    <div>
        <div style={{backgroundColor:"black", color:"#fff"}}>
          <Navbar />
        </div>
      <div className="jeans">
        {jeans.map((item) => {
          return (
            <div key={item.id}>
              <img
                style={{ width: "300px", height: "300px", margin: "auto" }}
                src={item.image}
                alt=""
              />
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

export default Jeans;
