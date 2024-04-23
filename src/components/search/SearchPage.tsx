import { useState } from "react";
import BasePage from "../BasePage";
import SearchResultList from "./SearchResultList";

export default function SearchPage() {
    const [q, setQ] = useState<string>("")

    // const [books, setBooks] = useState<{
    //     title: string;
    //     author: string;
    //     edition: string,
    //     availability: string;
    // }[]>([])

    // function handleSearch() {
    //     console.log("handle search here")

    //     setBooks([
    //         {
    //             title: "Introduction to Algorithm",
    //             author: "MH. Ross",
    //             availability: "Available",
    //             edition: '5th',
    //         },
    //         {
    //             title: "Introduction to Data Structure",
    //             author: "S. Cooper",
    //             availability: "Available",
    //             edition: '8th',
    //         },
    //         {
    //             title: "Modern Day Data Science",
    //             author: "Dr. Alexandro",
    //             availability: "Available",
    //             edition: '9th',
    //         },
    //     ])
    // }

    // function handleSearch(e: any) {
    //     setQ(e.target.value)
    //     queryClient.invalidateQueries({
    //         queryKey: ['searchResult']
    //     })
    // }


    return (
        <BasePage>
            <div className="w-full flex gap-10 px-20">
                <input type="text" onChange={e => setQ(e.target.value)} placeholder="Search Term"
                    className='outline-none rounded-lg border flex-grow focus:bg-neutral-600 bg-neutral-800 p-2'
                />
                {/* <button onClick={handleSearch}
                    className='px-10 py-1 rounded-lg bg-neutral-500 hover:bg-neutral-600 border border-teal-950'
                >Search</button> */}
            </div>

            <SearchResultList q={q} />
        </BasePage>
    )
}