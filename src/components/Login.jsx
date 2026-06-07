import { Link } from "react-router-dom";


function Login(){
    return(
      <div className="flex flex-col justify-center items-center gap-4 min-h-screen bg-gray-100">

     <div>
    <h1 className="text-2xl font-bold text-gray-800"> Enter your Login Credential</h1>
    </div>

    <div className="w-80">
    <h2 className="text-gray-700 font-medium mb-1">Email:</h2>
    <input type="text" placeholder="Enter your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
     </div>

     <div className="w-80">
     <h2 className="text-gray-700 font-medium mb-1">Password:</h2>
     <input type="password" placeholder="Enter your Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

    <div>
     <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300"> Submit</button>
     </div>
 
    <div>
    <p className="text-gray-600"> Not Registered?{" "}
        <Link to="/Signuppage" className="text-blue-600 hover:underline"> Create an account</Link>
      </p>
    </div>

   </div>  
    )
}

export default Login;