import BasePage from "../BasePage";
import { useQuery } from "@tanstack/react-query";
import FetchCategoryList from "../../apiCalls/FetchCategoryList";
import { getGlobalUser } from "../../userManagement";

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
            <div className="grid sm:grid-cols-3 md:grid-cols-5 sm:grid-rows-5 gap-5">
                {
                    data.map((item: any, index: any) => (
                        <button key={index} className="p-2 border rounded-lg hover:bg-neutral-600">{item.category}</button>
                    ))
                }
            </div>
        </BasePage>
    )
}