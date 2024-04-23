import { CiLogout } from "react-icons/ci";
import { FaGetPocket } from "react-icons/fa";
import { MdOutlineScheduleSend } from "react-icons/md";

import { clearLibrarianToken } from "../../userManagement";
import { useNavigate } from "react-router-dom";
import NavBarBtn from "./NavBarBtn";
// import { useRef } from "react";


export default function SideNavBarLibrarian() {
    const nav = useNavigate()

    function handleLogout() {
        clearLibrarianToken()
        nav('/librarian/login')
    }

    function deliverBook() {
        nav('/librarian/deliver')
    }
    function receiveBook() {
        nav('/librarian/receive')
    }

    return (
        <div className="flex w-48  bg-teal-800 text-teal-100 font-semibold ps-8 flex-col h-full justify-start pt-32 gap-10 items-start">

            <NavBarBtn handlerFunction={deliverBook}>
                <MdOutlineScheduleSend size={25} />
                <div>Deliver</div>
            </NavBarBtn>


            <NavBarBtn handlerFunction={receiveBook}>
                <FaGetPocket size={25} />
                <div>Receive</div>
            </NavBarBtn>

            <NavBarBtn handlerFunction={handleLogout} >
                <CiLogout size={25} />
                <div>Logout</div>
            </NavBarBtn>

        </div>
    )
}