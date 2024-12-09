import { link } from "fs"
import Link from "next/link"
export default function Header(){
    return(
        <div className="flex flex-row justify-between items-center px-[300px] py-[14px] gap-[798px]
        w-[1920px] h-[45px] bg-[#272343]">

           <span className="text-white font-sans">Free shipping on all orders over $50</span> 
           <div className="flex flex-row items-start p-0 gap-[24px] w-[202px] h-[17px] opacity-70 mx-auto"
           ><select className="bg-[#272343] text-white ">
            <option > Eng </option>
            
            
           </select>

           </div>
            
        </div>
    )
}