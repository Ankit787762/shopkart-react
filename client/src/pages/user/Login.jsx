import { useState } from "react";
import { Link, useNavigate,Navigate } from "react-router-dom";
import Api from "../../services/Api"

function Login(){

const token = localStorage.getItem("token");

if (token) {
  return <Navigate to="/Productpage" replace />;
}

    const navigate=useNavigate();

    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
 
   
  const handlechange = async () => {
    if (email === "" || password === "") {
       alert("enter input fields");
        return;
         }
      try {
       const res = await Api.post("/users/login", {
         email,
        password,
       });
  
    const { token, user } = res.data;

    // save token + user
    localStorage.setItem("token", token);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify(user));

    alert("login successful");

    //  correct admin check
    if (user.isAdmin) {
      navigate("/admin", { replace: true });
    } else {
      navigate("/Productpage", { replace: true });
    }

  } catch (error) {
    console.log(error.response?.data);
    alert(error.response?.data?.message || "Login Failed");
  }
};

return (
  <div className="min-h-screen flex">

    {/* Left Side */}
    <div className="w-1/2 bg-white  flex flex-col justify-center px-16">
      <h1 className=" text-blue-600 text-5xl font-bold mb-4">ShopKart</h1>

      <h2 className="text-2xl font-semibold mb-4">
        Shop smarter with confidence
      </h2>

      <p className="text-lg  max-w-md">
        Discover premium electronics, trusted brands, and exclusive deals.
        Sign in to manage orders and continue your shopping journey.
      </p>
    </div>

    {/* Right Side */}
    <div className="w-1/2 flex justify-center items-center bg-gray-100">

      <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">

        <div>
          <h1 className="text-2xl font-bold text-blue-500">Welcome back</h1>
          <p>Sign in to continue</p>
        </div>

        <div className="w-full">
          <h2 className="text-gray-700 font-medium mb-1"> Email:</h2>
          <input  onChange={(e)=>setEmail(e.target.value)} type="email"  value={email} placeholder="Enter your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        <div className="w-full">
          <h2 className="text-gray-700 font-medium mb-1">Password:</h2>
          <input  onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Enter your Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
        </div>

        <button
          onClick={handlechange}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300">
          Sign In
        </button>

        <p className="text-gray-600">Not Registered?{" "}
          <Link to="/Signuppage"className="text-blue-600 hover:underline">Create an account</Link>
        </p>

      </div>
    </div>

  </div>
);
}

export default Login;