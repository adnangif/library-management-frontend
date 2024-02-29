import { useState } from "react";
import BasePage from "../BasePage";

export default function SearchPage() {

    const [books, setBooks] = useState<{
        title: string;
        author: string;
        edition: string,
        availability: string;
    }[]>([])

    function handleSearch() {
        console.log("handle search here")

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
    }



    return (
        <BasePage>
            <div className="w-full flex gap-10 px-20">
                <input type="text"
                    className='outline-none border flex-grow focus:bg-neutral-600 bg-neutral-800 p-2'
                />
                <button onClick={handleSearch}
                    className='px-10 py-1 bg-neutral-500 hover:bg-neutral-600 border border-teal-950'
                >Search</button>
            </div>

            <div className="flex-grow w-full flex flex-col gap-2">
                {
                    books.map(book => (
                        <div className="cursor-pointer hover:bg-neutral-700 border border-neutral-200 rounded-lg font-semibold flex flex-col  gap-2 p-1 m-1">
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