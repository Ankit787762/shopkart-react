import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../services/Api";

function Navbarpage() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const res = await Api.get("/users/me");
                console.log("logged user:", res.data.user);
                setUser(res.data.user);
            } catch (error) {
                console.log("not logged in");
                setUser(null);
            }
        };

        checkUser();
    }, []);

    const handlechange = async () => {
        try {
            await Api.post("/users/logout");
            setUser(null);
            navigate("/", { replace: true });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="px-4 py-4 sm:px-6 w-full bg-blue-400 text-white flex justify-between items-center">
            <h1 className="text-2xl font-bold">ShopKart</h1>

          <div className="flex items-center gap-4 sm:gap-8">
                {user ? (
                    <button onClick={handlechange}>
                        Logout
                    </button>
                ) : (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/Aboutpage">About</Link>
                        <Link to="/Loginpage">Login</Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbarpage;