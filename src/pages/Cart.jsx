import { useParams } from "react-router-dom";
import Navbarpage from "../components/navbar";
import { useEffect, useState } from "react";



function Cartpage(){


const [card,setCard] =useState([]);
const [count,setCount] = useState([]);


useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCard(saved);

    const savecount = JSON.parse(localStorage.getItem("count"))
   if (savecount) {
    const newCount = [...savecount];

       while (newCount.length < saved.length) {
          newCount.push(1);
      }

       setCount(newCount);
      } else {
      setCount(saved.map(() => 1));
      }
  }, []);

    const removeItem = (index) => {
    //update cards
    const updated = card.filter((_, i) => i !== index);
    setCard(updated);
    localStorage.setItem("cart", JSON.stringify(updated));

    //update count
    const updatecount = count.filter((_,i)=>i!==index );
    setCount(updatecount);
     localStorage.setItem("count", JSON.stringify(updatecount));
  };

     useEffect(()=>{
        if(count.length > 0){
        localStorage.setItem("count",JSON.stringify(count));
        }
  },[count])

    function decrease(index){
        const updatecount = [...count];
        if(updatecount[index]>1){
        updatecount[index]--;
        setCount(updatecount);
        }
  }

  function increase(index){
        const updatecount = [...count];

        updatecount[index]++;
        setCount(updatecount);
  }

  let totalitem =0;
  let totalprice =0;

  card.forEach((item,index)=>{
    totalitem = totalitem+count[index]||1;
    totalprice =totalprice+item.price*(count[index]||1);
  })

 return (
    <div>
        <Navbarpage/>
        <div className="p-6">
         <h1 className="text-2xl font-bold mb-6">My Cart</h1>

        {card.length===0? <h1>no card in cart</h1>:
        card.map((item,index)=>{
        return(
        <div key={index} className="border rounded-xl p-4 flex items-center gap-6 shadow-sm">
    
        <div className="w-32 h-32 shrink-0">
        <img src={item.image} alt="product image"className="w-full h-full object-contain"/>
       </div>

      {/* Product Details */}
      <div className="flex-1">
      <h2 className="text-lg font-semibold text-gray-800"> {item.title}</h2>

      <p className="text-green-600 font-bold mt-1">${item.price}</p>

      <div className="flex items-center gap-3 mt-3">
        <button onClick={()=>decrease(index)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
        <span className="text-sm font-medium">{count[index]}</span>
        <button onClick={()=>increase(index)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
        </div>
       </div>

       <button onClick={()=>removeItem(index)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">Delete</button></div>
            )
        })}
  
 </div>

       <div className="mt-6 border rounded-xl p-5 shadow-md bg-gray-50 w-72 ml-6">
       <p className="text-lg font-semibold">
        Total Items: {totalitem}
        </p>

        <p className="text-xl font-bold text-green-600 mt-2">
        Total Price: ${totalprice}
        </p>
        </div>
    </div>
 )
}

export default Cartpage;