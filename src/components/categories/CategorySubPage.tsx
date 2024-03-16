import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BasePage from "../BasePage";

export default function SearchPage() {

    const [books, setBooks] = useState<{
        title: string;
        author: string;
        edition: string,
        availability: string;
    }[]>([])

    const { catid } = useParams()

    useEffect(() => {
        console.log("handle category specific book finding here")

        setBooks([
            {
                title: "Introduction to Algorithm",
                author: "MH. Ross",
                availability: "Available",
                edition: '5th',
            },
            {
                title: "Introduction to Data Structure",
                author: "S. Cooper",
                availability: "Available",
                edition: '8th',
            },
            {
                title: "Modern Day Data Science",
                author: "Dr. Alexandro",
                availability: "Available",
                edition: '9th',
            },
        ])
    }, [])



    return (
        <BasePage>
            <div className="w-full flex justify-center">
                <div className="text-lg font-bold">{catid}</div>
            </div>

            <div className="flex-grow w-full flex flex-col gap-2">
                {
                    books.map((book,index) => (
                        <div key={index} className="cursor-pointer hover:bg-neutral-700 border border-neutral-200 rounded-lg font-semibold flex flex-col  gap-2 p-1 m-1">
                            <div>{book.title}</div>
                            <div>By {book.author}</div>
                            <div>{book.edition} Edition</div>
                            <div>{book.availability}</div>
                        </div>
                    ))
                }

            </div>
        </BasePage>
    )
}