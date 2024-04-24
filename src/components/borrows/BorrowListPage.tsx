import { useEffect, useState } from "react";
import BasePage from "../BasePage";
import { getGlobalUser } from "../../userManagement";
import { Link, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FetchBorrowBookList from "../../apiCalls/FetchBorrowBookList";

export default function BorrowListPage() {


    const { isPending, error, data } = useQuery({
        queryKey: ["borrowedBookList"],
        queryFn: async () => await FetchBorrowBookList(getGlobalUser())
    })

    // const [books, setBooks] = useState<{
    //     title: string;
    //     author: string;
    //     edition: string,
    // }[]>([])

    // useEffect(() => {
    //     console.log("handle search here")

    //     setBooks([
    //         {
    //             title: "Introduction to Algorithm",
    //             author: "MH. Ross",
    //             edition: '5th',
    //         },
    //         {
    //             title: "Introduction to Data Structure",
    //             author: "S. Cooper",
    //             edition: '8th',
    //         },
    //         {
    //             title: "Modern Day Data Science",
    //             author: "Dr. Alexandro",
    //             edition: '9th',
    //         },
    //     ])
    // }, [])


    if (isPending) {
        <BasePage>
            <div className="w-full flex justify-center">
                <div className="font-bold text-lg">
                    Borrowed Books
                </div>
            </div>
            <div className="flex-grow w-full flex flex-col gap-2">
                Loading...
            </div>
        </BasePage>
    }


    if (error) {
        <BasePage>
            <div className="w-full flex justify-center">
                <div className="font-bold text-lg">
                    Borrowed Books
                </div>
            </div>
            <div className="flex-grow w-full flex flex-col gap-2">
                Error... {error.message}
            </div>
        </BasePage>
    }

    return (
        <BasePage>
            <div className="w-full flex justify-center">
                <div className="font-bold text-lg">
                    Borrowed Books
                </div>
            </div>

            <div className="flex-grow w-full flex flex-col gap-2">
                {
                    data?.map((book: any, index: any) => (
                        <Link to={`/books/${book.info_id}`} key={index} className="cursor-pointer hover:bg-neutral-700 border border-neutral-200 rounded-lg font-semibold flex flex-col  gap-2 p-2 m-1">
                            <div>Book ID: {book.book_id}</div>
                            <div>{book.title}</div>
                            <div>By {book.author}</div>
                            <div>{book.edition} Edition</div>
                        </Link>
                    ))
                }

            </div>
        </BasePage>
    )
}