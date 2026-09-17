import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Navbarpage() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        navigate("/", { replace: true });
    };

    return (
        <div className="px-4 py-4 sm:px-6 w-full bg-blue-400 text-white flex justify-between items-center">
            
            <h1 className="text-2xl font-bold">
                ShopKart
            </h1>

            <div className="flex items-center gap-4 sm:gap-8">
                <Link to="/">Home</Link>

                <Link to="/Aboutpage">
                    About
                </Link>

                {user ? (
                    <button onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <Link to="/Loginpage">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Navbarpage;