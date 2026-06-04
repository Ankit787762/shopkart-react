import { Link } from "react-router-dom";

function Navbarpage(){
    return (
        <div className=" p-5 w-full h-15 bg-blue-500 text-white flex justify-between items-center">
           <h1 className="text-2xl font-bold">ShopKart</h1>
           <div className="flex justify-center items-center gap-20 mr-20">
            <Link to="/" >Home</Link>
            <Link to="/Cartpage" >cart(0)</Link>
            <Link to="/Aboutpage" >About</Link>
           </div>
        </div>
    )
}
export default Navbarpage;
