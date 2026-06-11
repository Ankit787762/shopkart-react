import { useParams } from "react-router-dom";
import Navbarpage from "../../components/navbar";
import { useEffect, useState } from "react";

function Productdetailspage() {

    const {id} =useParams();
    const [product,setProduct] =useState("");
    useEffect(()=>{
        async function getcarddetail(params) {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data=await  response.json();
            setProduct(data);
        }
        getcarddetail();
    },[id]);

    if(!product){
        return <div>Loading....!</div>
    }
    return(
        <div className="bg-gray-100">
            <Navbarpage/>
            <div className=" m-20   flex justify-center item-center gap-20 ">
                <div className="flex items-center justify-center bg-gray-100 rounded-xl p-6">
                    <img src={product.image} alt={product.title} />
                </div>
               <div className=" w-200 flex flex-col justify-center">
               <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
               <p className="text-2xl font-bold text-green-600 mb-4">${product.price}</p>
               <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

           </div>
            </div>
        </div>
    )
}

export default Productdetailspage;