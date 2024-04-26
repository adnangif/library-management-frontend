import BasePage from "../BasePage";
import { useQuery } from "@tanstack/react-query";
import FetchCategoryList from "../../apiCalls/FetchCategoryList";
import { getGlobalUser } from "../../userManagement";
import { Link } from "react-router-dom";

export default function CategoryMainPage() {

    const { isPending, error, data } = useQuery({
        queryKey: ['categoryList'],
        queryFn: async () => await FetchCategoryList(getGlobalUser())
    })



    if (isPending) return (
        <BasePage>
            <div>Loading...</div>
        </BasePage>
    )

    if (error) return (
        <BasePage>
            <div>An error has occurred:  {error.message}</div>
        </BasePage>
    )


    return (
        <BasePage>
            <div className="w-full text-center font-bold text-lg">Categories</div>
            <div className="grid sm:grid-cols-3  sm:grid-rows-5 gap-5">
                {
                    data.map((item: any, index: any) => (
                        <Link to={`/categories/${item.category}`} key={index} className="p-4 border rounded-lg hover:bg-neutral-600">{item.category}</Link>
                    ))
                }
            </div>
        </BasePage>
    )
}