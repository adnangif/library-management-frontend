import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { TbCategory2 } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { clearGlobalUser } from "../../userManagement";
import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import NavBarBtn from "./NavBarBtn";
// import { useRef } from "react";


export default function SideNavBar() {

    // const profBtnRef = useRef(null)

    const nav = useNavigate()

    function handleLogout() {
        clearGlobalUser()
        nav('/login')
    }

    function handleProfile() {
        nav('/profile')
    }
    function handleHome() {
        nav('/home')
    }
    function handleSearch() {
        nav('/search')
    }
    function handleCategory() {
        nav('/categories')
    }
    function handleOrders() {
        nav('/orders')
    }

    function handleCart() {
        nav('/cart/')
    }
    return (
        <div className="flex w-48  bg-teal-800 text-teal-100 font-semibold ps-8 flex-col h-full justify-center gap-10 items-start">

            <NavBarBtn handlerFunction={handleProfile}>
                <CgProfile size={25} />
                <div>Profile</div>
            </NavBarBtn>


            <NavBarBtn handlerFunction={handleHome}>
                <CiHome size={25} />
                <div>Home</div>
            </NavBarBtn>

            <NavBarBtn handlerFunction={handleSearch} >
                <CiSearch size={25} />
                <div>Search</div>
            </NavBarBtn>

            <NavBarBtn handlerFunction={handleCategory} >
                <TbCategory2 size={25} />
                <div>Categories</div>
            </NavBarBtn>

            <NavBarBtn handlerFunction={handleOrders} >
                <CgFileDocument size={25} />
                <div>Orders</div>
            </NavBarBtn>
            <NavBarBtn handlerFunction={handleCart} >
                <FaCartShopping size={25} />
                <div>Cart</div>
            </NavBarBtn>

            <NavBarBtn handlerFunction={handleLogout} >
                <CiLogout size={25} />
                <div>Logout</div>
            </NavBarBtn>

        </div>
    )
}