import { useEffect, useState } from "react";
import BasePage from "../BasePage";

export default function BorrowListPage() {

    const [books, setBooks] = useState<{
        title: string;
        author: string;
        edition: string,
    }[]>([])

    useEffect(() => {
        console.log("handle search here")

        setBooks([
            {
                title: "Introduction to Algorithm",
                author: "MH. Ross",
                edition: '5th',
            },
            {
                title: "Introduction to Data Structure",
                author: "S. Cooper",
                edition: '8th',
            },
            {
                title: "Modern Day Data Science",
                author: "Dr. Alexandro",
                edition: '9th',
            },
        ])
    }, [])



    return (
        <BasePage>
            <div className="w-full flex justify-center">
                <div className="font-bold text-lg">
                    Borrowed Books
                </div>
            </div>

            <div className="flex-grow w-full flex flex-col gap-2">
                {
                    books.map(book => (
                        <div className="cursor-pointer hover:bg-neutral-700 border border-neutral-200 rounded-lg font-semibold flex flex-col  gap-2 p-2 m-1">
                            <div>{book.title}</div>
                            <div>By {book.author}</div>
                            <div>{book.edition} Edition</div>
                        </div>
                    ))
                }

            </div>
        </BasePage>
    )
}