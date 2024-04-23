import { useState } from "react";
import BasePage from "../BasePage";
import SearchResultList from "./SearchResultList";

export default function SearchPage() {
    const [q, setQ] = useState<string>("")


    return (
        <BasePage>
            <div className="w-full flex gap-10 px-20">
                <input type="text" onChange={e => setQ(e.target.value)} placeholder="Search Term"
                    className='outline-none rounded-lg border flex-grow focus:bg-neutral-600 bg-neutral-800 p-2'
                />
            </div>

            <SearchResultList q={q} />
        </BasePage>
    )
}