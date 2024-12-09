import Link from "next/link";
import Home from "./app/page";

export default function Navbar(){
    return(
        <div className=" flex gap-4 w-[1920] h-[74] text-grey-700 bg-white justify-center">
            <ul className=" flex gap-4   text-black-[#272343] bg-white justify-center">
                <li ><Link href="Home"> Home</Link></li>
               <li><Link href="Shop">Shop</Link></li>
                <li><Link href="Product">Product</Link></li>
                <li><Link href="pages">Pages</Link></li>
                <li> <Link href="about">About</Link></li>
            </ul>
        </div>
    )
}