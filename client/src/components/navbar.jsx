import { Link, useNavigate } from "react-router-dom";
import Api from "../services/Api";

function Navbarpage() {
    const navigate = useNavigate();

    const handlechange = async () => {
        try {
            await Api.post("/users/logout");
            navigate("/", { replace: true });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-5 w-full h-15 bg-blue-400 text-white flex justify-between items-center">
            <h1 className="text-2xl font-bold">ShopKart</h1>

            <div className="flex justify-center items-center gap-20 mr-20">
                <Link to="/">Home</Link>
                <Link to="/Aboutpage">About</Link>

                <button onClick={handlechange}>
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Navbarpage;