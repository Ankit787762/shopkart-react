import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login(){

    const navigate=useNavigate();

    const user = {
    email: "ankit@gmail.com",
    password: "12345678"
  }


    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [submit,setSubmit]= useState("");
 
    const Emailcheck=(e)=>{
      setEmail(e.target.value);
    }
     const Passwordcheck=(e)=>{
      setPassword(e.target.value);
    }
    const handlechange=(e)=>{
      //stop page reload when click on submit.
      console.log("email:",email);
      console.log("password:",password);

       if(email==""|| password==""){
        alert("enter input fields!");
        return ;
       }
       if(user.email===email&&user.password===password){
        localStorage.setItem("isLoggedIn", "true");
        alert("Login Successful");
        navigate("/Productpage" )
       }
       else{
        alert("User not found!");
       }
      }


    return(

   <div className="min-h-screen flex justify-center items-center bg-gray-300">
    <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
    {/* Login content */}
    <div>
    <h1 className="text-2xl font-bold text-gray-800"> Login </h1>
    </div>

    <div className="w-full">
    <h2 className="text-gray-700 font-medium mb-1">Email:</h2>
    <input onChange={Emailcheck} type="text" placeholder="Enter your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
     </div>

     <div className="w-full">
     <h2 className="text-gray-700 font-medium mb-1">Password:</h2>
     <input onChange={Passwordcheck} type="password" placeholder="Enter your Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

    <div>
     <button onClick={handlechange} type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300"> Submit</button>
     </div>
 
    <div>
    <p className="text-gray-600"> Not Registered?{" "}
        <Link to="/Signuppage" className="text-blue-600 hover:underline"> Create an account</Link>
      </p>
    </div>
  </div>
</div>
 
    )
}

export default Login;