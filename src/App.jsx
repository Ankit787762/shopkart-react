import Aboutpage from "./pages/About";
import Cartpage from "./pages/Cart";
import HomePage from "./pages/Home"; 
import { Route,Routes } from "react-router-dom";
import Productpage from "./pages/Product";
import Productdetailspage from "./pages/Productdetail";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App(){
 return(
  <div>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/Cartpage/" element={<Cartpage/>} />
    <Route path="/Aboutpage" element={<Aboutpage/>} />
    <Route path="/Productpage" element={<Productpage/>} />
    <Route path="/Productdetailpage/:id" element={<Productdetailspage/>} />
     <Route path="/Loginpage" element={<Login/>} />
     <Route path="/Signuppage" element={<Signup/>} />
    </Routes>
  </div>
 )
}
export default App;