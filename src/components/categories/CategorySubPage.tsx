import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BasePage from "../BasePage";
import { useQuery } from "@tanstack/react-query";
import FetchCategoryBooks from "../../apiCalls/FetchCategoryBooks";
import { getGlobalUser } from "../../userManagement";

export default function CategorySubPage() {

    // const [books, setBooks] = useState<{
    //     title: string;
    //     author: string;
    //     edition: string,
    //     availability: string;
    // }[]>([])

    const { catname } = useParams()


    const { isPending, error, data } = useQuery({
        queryKey: ['categoryBooks', catname],
        queryFn: async () => await FetchCategoryBooks(getGlobalUser(), catname)
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
            <div className="w-full flex justify-center bg-neutral-800">
                <div className="text-lg font-bold">{catname}</div>
            </div>

            <div className="flex-grow w-full flex flex-col gap-2 font-semibold">
                {
                    data.map((book: any, index: any) => (
                        <Link to={`/books/${book.info_id}`}  key={index} className="cursor-pointer hover:bg-neutral-700 border border-neutral-200 rounded-lg font-semibold flex flex-col  gap-2 p-1 m-1">
                            <div>Title: {book.title}</div>
                            <div>By {book.author}</div>
                            <div>Edition: {book.edition}</div>
                            <div>Publication Year: {book.publication_year}</div>
                            {/* <div>Available Copies: {book.available_books}</div> */}
                        </Link>
                    ))
                }
            </div>
        </BasePage>
    )
}