import { useEffect, useState } from "react";
import SideNavBar from "../sidnav/SideNavBar";

export default function CategoryMainPage() {

    const [categoryList, setCategoryList] = useState<string[]>([])


    useEffect(() => {
        console.log("Get the list from the backend for user")


        setCategoryList([
            'Algorithm',
            'Data Structure',
            'Electrical',
            'Electronic',
            'Design',
            'Website Backend',
            'Website Frontend',
            'Desktop Application',
            'Calculus',
            'Physics',
            'Python',
            'Data Science',
            'Big Data',
        ])

    }, [])


    return (
        <div className='h-screen w-screen flex justify-center text-neutral-100'>
            <div className='flex h-screen w-full lg:w-5/6 max-w-5xl overflow-auto bg-teal-950'>
                <SideNavBar />
                <div className='bg-neutral-800 overflow-auto max-h-full flex flex-col gap-10  flex-grow p-5'>
                    <div className="w-full text-center font-bold text-lg">Categories</div>
                    <div className="grid sm:grid-cols-6 grid-rows-5 gap-5">
                        {
                            categoryList.map((item,index) => (
                                <button key={index} className="p-2 border rounded-lg hover:bg-neutral-600">{item}</button>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}