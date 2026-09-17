import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../services/Api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handlechange = async () => {
    if (email === "" || password === "") {
      alert("enter input fields");
      return;
    }

    setLoading(true);
    try {
      const res = await Api.post("/users/login", {
        email,
        password,
      });

      const { user } = res.data;

      alert("login successful");

      if (user.isAdmin) {
        navigate("/admin", { replace: true });
      } else {
        navigate("/Productpage", { replace: true });
      }
    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-6 sm:px-10 md:px-16 py-10 md:py-0">
        <h1 className="text-blue-600 text-4xl sm:text-5xl font-bold mb-4">
          ShopKart
        </h1>

        <h2 className="text-2xl font-semibold mb-4">
          Shop smarter with confidence
        </h2>

        <p className="text-lg max-w-md">
          Discover premium electronics, trusted brands, and exclusive deals.
          Sign in to manage orders and continue your shopping journey.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100 px-4 py-10">
        <div className="flex flex-col items-center gap-4 bg-white p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md">
          
          <div>
            <h1 className="text-2xl font-bold text-blue-500">
              Welcome back
            </h1>

            <p>Sign in to continue</p>
          </div>

          <div className="w-full">
            <h2 className="text-gray-700 font-medium mb-1">
              Email:
            </h2>

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Enter your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full">
            <h2 className="text-gray-700 font-medium mb-1">
              Password:
            </h2>

            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter your Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={handlechange}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg transition duration-300"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p className="text-gray-600">
            Not Registered?{" "}
            <Link
              to="/Signuppage"
              className="text-blue-600 hover:underline"
            >
              Create an account
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;