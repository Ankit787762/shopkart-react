import { Link } from "react-router-dom";

function Signup(){
    return (

   <div className="min-h-screen flex justify-center items-center bg-gray-300">
    <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">

     <div>
    <h1 className="text-2xl font-bold text-gray-800">  SignUp</h1>
    </div>

    <div className="w-full">
    <h2 className="text-gray-700 font-medium mb-1">Name:</h2>
    <input type="text" placeholder="Enter your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
     </div>

    <div className="w-full">
    <h2 className="text-gray-700 font-medium mb-1">Email:</h2>
    <input type="text" placeholder="Enter your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
     </div>

     <div className="w-full">
     <h2 className="text-gray-700 font-medium mb-1">Password:</h2>
     <input type="password" placeholder="Enter your Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

    <div>
     <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300"> Submit</button>
     </div>
 
    <div>
    <p className="text-gray-600"> Already have an account?{" "}
        <Link to="/Loginpage" className="text-blue-600 hover:underline"> login</Link>
      </p>
    </div>

   </div>  
    </div> 

    )
}

export default Signup;