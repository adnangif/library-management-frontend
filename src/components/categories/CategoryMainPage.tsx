import { useEffect, useState } from "react";
import BasePage from "../BasePage";

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
        <BasePage>
            <div className="w-full text-center font-bold text-lg">Categories</div>
            <div className="grid sm:grid-cols-3 md:grid-cols-5 sm:grid-rows-5 gap-5">
                {
                    categoryList.map((item, index) => (
                        <button key={index} className="p-2 border rounded-lg hover:bg-neutral-600">{item}</button>
                    ))
                }
            </div>
        </BasePage>
    )
}