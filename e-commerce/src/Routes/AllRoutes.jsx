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
import AdminAddProduct from "../AdminPage/AdminAddProduct";
import AdminPurchase from "../AdminPage/AdminPurchase";
import AdminPage from "../AdminPage/AdminPage";
import Sharee from "../Pages/Womens/Sharee";
import Kurta from "../Pages/Womens/Kurta";
import Top from "../Pages/Womens/Top"

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/mens" element={<Mens />}></Route>
            <Route path="/womens" element={<Womens />}></Route>
            <Route path="/childrens" element={<Childrens />}></Route>
            <Route path="/jeans" element={<Jeans />}></Route>
            <Route path="/menshirts" element={<MensShirts />}></Route>
            <Route path="/menpants" element={<MensPants />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>}></Route>
            <Route path="/adminpage" element={<PrivateRoute><AdminPage /></PrivateRoute>}></Route>
            <Route path="/adminaddproduct" element={<PrivateRoute><AdminAddProduct /></PrivateRoute>}></Route>
            <Route path="/adminpurchase" element={<PrivateRoute><AdminPurchase /></PrivateRoute>}></Route>
            <Route path="/saree" element={<Sharee />}></Route>
            <Route path="/kurta" element={<Kurta />}></Route>
            <Route path="/top" element={<Top />}></Route>
            <Route></Route>
            <Route></Route>
        </Routes>
    )
}

export default AllRoutes;