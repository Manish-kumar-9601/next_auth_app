import Link from "next/link";
import React from "react";
import { NavName } from "./components/NavName";
 

const Navbar = () => {
  return (
    <div className="text-white p-4 w-[100%] lg:w-[80%]   m-auto flex justify-between items-center shadow-md">
    <button className="third-color rounded-r-full pl-2 pr-2"   >
      <Link href={"/"} className="text-white ">
        Home
      </Link>
</button>
        <button className="third-color rounded-l-full pl-2 pr-2"   >
        <Link href={"/sign"}>

<NavName/>
        </Link>
      </button>
    </div>
  );
};

export default Navbar;
