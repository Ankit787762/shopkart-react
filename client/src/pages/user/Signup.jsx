import { Link, useNavigate } from "react-router-dom";
import Api from "../../services/Api";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);
    try {
      const res = await Api.post("/users/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      alert("resgistration successful");
      navigate("/Loginpage");
    } catch (error) {
      console.log(error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-6 sm:px-10 md:px-16 py-10 md:py-0">
        <h1 className="text-blue-600 text-4xl sm:text-5xl font-bold mb-4">
          Join ShopKart
        </h1>

        <h2 className="text-2xl font-semibold mb-4">
          Start your tech journey today
        </h2>

        <p className="text-lg max-w-md">
          Create your account to unlock exclusive offers, faster checkout,
          and a personalized shopping experience.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100 px-4 py-10">
        <div className="flex flex-col items-center gap-4 bg-white p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md">

          <div>
            <h1 className="text-2xl font-bold text-blue-500">
              Create Account
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4 w-full">
            <div className="w-full">
              <h2 className="text-gray-700 font-medium mb-1">
                First Name:
              </h2>

              <input
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="w-full">
              <h2 className="text-gray-700 font-medium mb-1">
                Last Name:
              </h2>

              <input
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-gray-700 font-medium mb-1">
              Email:
            </h2>

            <input
              type="text"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full">
            <h2 className="text-gray-700 font-medium mb-1">
              Password:
            </h2>

            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={handleSignup}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg transition duration-300"
          >
            {loading ? "Signing up..." : "Submit"}
          </button>

          <p className="text-gray-600 text-center">
            Already have an account?{" "}
            <Link
              to="/Loginpage"
              className="text-blue-600 hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Signup;