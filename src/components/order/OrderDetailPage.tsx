import { useEffect, useState } from "react";
import BasePage from "../BasePage";

export default function () {
    const [order, setOrder] = useState<{
        username: string,
        issue_time: string,
        due_time: string,
        last_collection_time: string,
    }>()

    const [orderedBooks, setOrderedBooks] = useState<{
        bookid: string,
        title: string,
        edition: string,
        author: string,
        collected: string,
    }[]>([])

    useEffect(() => {
        setOrder({
            username: "Abu Bakar",
            issue_time: "27/2/2024",
            due_time: "27/8/2024",
            last_collection_time: '7/3/2024',
        })

        setOrderedBooks([
            {
                bookid: '234',
                title: "Introduction to Algorithm",
                author: "MH. Ross",
                edition: '5th',
                collected: 'Yes',

            },
            {
                bookid: '23',
                title: "Introduction to Data Structure",
                author: "S. Cooper",
                edition: '8th',
                collected: 'Yes',
            },
            {
                bookid: '24',
                title: "Modern Day Data Science",
                author: "Dr. Alexandro",
                edition: '9th',
                collected: 'Yes',
            },
        ])

    }, [])

    return (
        <BasePage>
            <div className="font-bold text-lg">Order Details</div>
            <div className="w-full">
                <div className="grid sm:grid-cols-2">
                    <div className="flex gap-2">
                        <div className="font-thin">
                            Ordered by:
                        </div>
                        <div className="font-semibold">
                            {order?.username}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="font-thin">
                            Issue Time:
                        </div>
                        <div className="font-semibold">
                            {order?.issue_time}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="font-thin">
                            Due Time:
                        </div>
                        <div className="font-semibold">
                            {order?.due_time}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="font-thin">
                            Last Collection Time:
                        </div>
                        <div className="font-semibold">
                            {order?.last_collection_time}
                        </div>
                    </div>
                </div>
            </div>
            <div className="font-bold text-lg">Ordered Books</div>
            <div className="flex-grow w-full flex flex-col gap-2">
                {
                    orderedBooks.map((book,index) => (
                        <div key={index} className="cursor-pointer hover:bg-neutral-700 border border-neutral-200 rounded-lg font-semibold grid lg:grid-cols-3 sm:grid-cols-2  gap-2 p-1 m-1">
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