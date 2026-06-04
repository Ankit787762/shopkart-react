import Aboutpage from "./pages/About";
import Cartpage from "./pages/Cart";
import HomePage from "./pages/Home"; 
import { Route,Routes } from "react-router-dom";

function App(){
 return(
  <div>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/Cartpage" element={<Cartpage/>} />
    <Route path="/Aboutpage" element={<Aboutpage/>} />
    </Routes>
  </div>
 )
}
export default App;