import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { TbCategory2 } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { clearGlobalUser } from "../../userManagement";
import {useNavigate } from "react-router-dom";


export default function SideNavBar() {
    const nav = useNavigate()

    function handleLogout(){
        clearGlobalUser()
        nav('/login')

    }
    return (
        <div className="flex w-48  bg-teal-800 text-teal-100 font-semibold ps-8 flex-col h-full justify-center gap-10 items-start">
            <div className="flex cursor-pointer hover:bg-teal-900 w-full py-2 p-2  items-center gap-5">
                <CgProfile size={25} />
                <div>Profile</div>
            </div>

            <div className="flex cursor-pointer hover:bg-teal-900 w-full p-2  items-center gap-5">
                <CiHome size={25} />
                <div>Home</div>
            </div>

            <div className="flex cursor-pointer hover:bg-teal-900 w-full p-2   items-center gap-5">
                <CiSearch size={25} />
                <div>Search</div>
            </div>

            <div className="flex cursor-pointer hover:bg-teal-900 w-full p-2  items-center gap-5">
                <TbCategory2 size={25} />
                <div>Categories</div>
            </div>

            <div className="flex cursor-pointer hover:bg-teal-900 w-full p-2  items-center gap-5">
                <CgFileDocument size={25} />
                <div>Orders</div>
            </div>

            <button onClick={handleLogout} className="flex cursor-pointer hover:bg-teal-900 w-full p-2  items-center gap-5">
                <CiLogout size={25} />
                <div>Logout</div>
            </button>

        </div>
    )
}