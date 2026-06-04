import Aboutpage from "./pages/About";
import Cartpage from "./pages/Cart";
import HomePage from "./pages/Home"; 
import { Route,Routes } from "react-router-dom";
import Productpage from "./pages/Product";
import Productdetailspage from "./pages/Productdetail";

function App(){
 return(
  <div>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/Cartpage" element={<Cartpage/>} />
    <Route path="/Aboutpage" element={<Aboutpage/>} />
    <Route path="/Productpage" element={<Productpage/>} />
    <Route path="/Productdetailpage" element={<Productdetailspage/>} />
    
    </Routes>
  </div>
 )
}
export default App;