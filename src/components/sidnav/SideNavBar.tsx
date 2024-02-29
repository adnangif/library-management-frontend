import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { TbCategory2 } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";


export default function SideNavBar() {
    return (
        <div className="flex w-48 p-5 bg-teal-800 text-teal-100 font-semibold ps-8 flex-col h-full justify-center gap-10 items-start">
            <div className="flex cursor-pointer hover:bg-teal-900 w-full py-2 ps-2  items-center gap-5">
                <CgProfile size={25} />
                <div>Profile</div>
            </div>

            <div className="flex cursor-pointer hover:bg-teal-900 w-full py-2 ps-2  items-center gap-5">
                <CiHome size={25} />
                <div>Home</div>
            </div>

            <div className="flex cursor-pointer hover:bg-teal-900 w-full py-2 ps-2  items-center gap-5">
                <CiSearch size={25} />
                <div>Search</div>
            </div>

            <div className="flex cursor-pointer hover:bg-teal-900 w-full py-2 ps-2  items-center gap-5">
                <TbCategory2 size={25} />
                <div>Categories</div>
            </div>

            <div className="flex cursor-pointer hover:bg-teal-900 w-full py-2 ps-2  items-center gap-5">
                <CgFileDocument size={25} />
                <div>View Orders</div>
            </div>

            <div className="flex cursor-pointer hover:bg-teal-900 w-full py-2 ps-2  items-center gap-5">
                <CiLogout size={25} />
                <div>Logout</div>
            </div>

        </div>
    )
}