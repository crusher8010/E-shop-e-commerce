import { Route, Routes } from "react-router-dom";
import Mens from "../Components/Mens";
import HomePage from "../Components/HomePage"
import Womens from "../Components/Womens";
import Childrens from "../Components/Childrens";
import Jeans from "../Pages/Mens/Jeans";
import MensShirts from "../Pages/Mens/MensShirts";
import MensPants from "../Pages/Mens/MensPants";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import SignUp from "./SignUp";
import Cart from "./Cart";

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<PrivateRoute><HomePage/></PrivateRoute>}></Route>
            <Route path="/mens" element={<Mens />}></Route>
            <Route path="/womens" element={<Womens />}></Route>
            <Route path="/childrens" element={<Childrens />}></Route>
            <Route path="/jeans" element={<Jeans />}></Route>
            <Route path="/menshirts" element={<MensShirts />}></Route>
            <Route path="/menpants" element={<MensPants />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
        </Routes>
    )
}

export default AllRoutes;