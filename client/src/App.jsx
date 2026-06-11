import Aboutpage from "./pages/user/Aboutpage";
import Cartpage from "./pages/user/Cart";
import HomePage from "./pages/user/Home"; 
import { Route,Routes } from "react-router-dom";
import Productpage from "./pages/user/Product";
import Productdetailspage from "./pages/user/Productdetail";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import Adminhome from "./pages/admin/Home";
import Addproduct from "./pages/admin/Addproduct";
import Manageproducts from "./pages/admin/Manageproduct";


function App(){
 return(
  <div>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/Cartpage" element={<Cartpage/>} />
    <Route path="/Aboutpage" element={<Aboutpage/>} />
    <Route path="/Productpage" element={<Productpage/>} />
    <Route path="/Productdetailpage/:id" element={<Productdetailspage/>} />
    <Route path="/Loginpage" element={<Login/>} />
    <Route path="/Signuppage" element={<Signup/>} />

     
    <Route path="/admin" element={<Adminhome/>} />
    <Route path="/admin/Addproduct" element={<Addproduct/>} />
     <Route path="/admin/Manageproduct" element={<Manageproducts/>} />
    </Routes>
  </div>
 )
}
export default App;