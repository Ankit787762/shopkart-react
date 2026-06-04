import Navbarpage from "../components/navbar";

function Productdetailspage() {
    return(
        <div>
            <Navbarpage/>
            <div className="  border  mt-20 flex justify-center item-center gap-20 ">
                <div className="w-100 h-100  ">
                    <img src="https://png.pngtree.com/png-clipart/20250523/original/pngtree-modern-laptop-computer-with-screen-open-technology-digital-device-png-image_21059292.png" alt="" />
                </div>
               <div class="p-5">
               <h1 class="text-2xl font-semibold text-gray-800">Laptop</h1>
               <p class="text-xl text-gray-800 font-bold mt-1">₹50,000</p>
               <p class=" text-xl  mt-3 font-medium">Key Features:</p>

               <ul class=" mt-2 space-y-1 text-xl list-disc pl-5">
              <li>16 GB RAM for smooth multitasking</li>
               <li>512GB SSD for fast performance</li>
              <li>Gaming-grade processor</li>
             <li>Dedicated graphics support</li>
           </ul>
           </div>
            </div>
        </div>
    )
}

export default Productdetailspage;