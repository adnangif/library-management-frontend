import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../userManagement";
import SideNavBar from "./sidnav/SideNavBar";



interface propTypes {
    children: React.ReactNode

}


export default function BasePage({ children }: propTypes) {


    if (isAuthenticated() === false) {
        return (
            <Navigate to='/login' replace />
        )
    }


    return (
        <div className='h-screen w-screen flex justify-center'>
            <div className='flex h-screen w-full lg:w-5/6 max-w-5xl  overflow-hidden bg-teal-950'>
                <SideNavBar />
                <div className='bg-neutral-800  text-neutral-100 max-h-full overflow-auto flex flex-col gap-5 flex-grow  p-5  justify-start items-center'>
                    {children}
                </div>
            </div>
        </div>
    )
}