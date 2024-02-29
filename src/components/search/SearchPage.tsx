import { useState } from "react";
import SideNavBar from "../sidnav/SideNavBar";

export default function SearchPage() {

    const [books, setBooks] = useState<{
        title: string;
        author: string;
        edition:string,
        availability: string;
    }[]>([])

    function handleSearch() {
        console.log("handle search here")

        setBooks([
            {
                title: "Introduction to Algorithm",
                author: "MH. Ross",
                availability: "Available",
                edition:'5th',
            },
            {
                title: "Introduction to Data Structure",
                author: "S. Cooper",
                availability: "Available",
                edition:'8th',
            },
            {
                title: "Modern Day Data Science",
                author: "Dr. Alexandro",
                availability: "Available",
                edition:'9th',
            },
        ])
    }



    return (
        <div className='h-screen w-screen flex justify-center'>
            <div className='flex h-screen w-full lg:w-5/6 max-w-5xl  overflow-hidden bg-teal-950'>
                <SideNavBar />
                <div className='bg-neutral-800 text-neutral-100 max-h-full overflow-auto flex flex-col gap-5 flex-grow  p-5  justify-start items-center'>
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
                                <div className="cursor-pointer hover:bg-neutral-700 border border-neutral-200 rounded-sm font-semibold flex flex-col  gap-2 p-1 m-1">
                                    <div>{book.title}</div>
                                    <div>By {book.author}</div>
                                    <div>{book.edition} Edition</div>
                                    <div>{book.availability}</div>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}