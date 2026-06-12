import { Link, useNavigate } from "react-router-dom";

function Navbarpage(){

    const navigate = useNavigate("")
    const token = localStorage.getItem("token");

    const handlechange=()=>{
        localStorage.removeItem("token");
        navigate("/Loginpage", { replace: true });  //ProductPage history se replace ho jata hai.
    }

    return (
        <div className=" p-5 w-full h-15 bg-blue-400 text-white flex justify-between items-center">
           <h1 className="text-2xl font-bold">ShopKart</h1>
           <div className="flex justify-center items-center gap-20 mr-20">
            
            {token?
            (<button onClick={handlechange} >Logout</button>):
            (<> <Link to="/" >Home</Link>
            <Link to="/Loginpage" >Login</Link>
            <Link to="/Aboutpage" >About</Link>
            </>)
            }
           </div>
        </div>
    )
}
export default Navbarpage;
