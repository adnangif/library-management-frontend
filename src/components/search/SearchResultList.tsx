import { useQuery } from "@tanstack/react-query"
import FetchSearchBookList from "../../apiCalls/FetchSearchBookList"
import { getGlobalUser } from "../../userManagement"
import { Link } from "react-router-dom"


export default function ({ q }: { q: string }) {

    const { isPending, error, data, isSuccess } = useQuery({
        queryKey: ['searchResult', q],
        queryFn: async () => await FetchSearchBookList(getGlobalUser(), q)
    })


    if (isPending) {
        <div className="flex-grow w-full flex flex-col gap-2 text-center">
            <div className="w-full text-center pt-12">Loading...</div>
        </div>
    }


    if (error) {
        <div className="flex-grow w-full flex flex-col gap-2 text-center">
            <div className="w-full text-center pt-12">Error....{error.message}</div>
        </div>
    }

    if (isSuccess) {
        return (
            <div className="flex-grow w-full flex flex-col gap-2 font-semibold">
                {
                    (data?.length == 0) && (
                        q.trim().length == 0 ? (
                            <div className="w-full text-center pt-12">Start Writing to see results</div>

                        ) : (
                            <div className="w-full text-center pt-12">No results</div>
                        )
                    )
                }

                {
                    data?.map((book: any, index: any) => (
                        <Link to={`/books/${book.info_id}`} key={index} className="cursor-pointer hover:bg-neutral-700 border border-neutral-200 rounded-lg font-semibold flex flex-col  gap-2 p-1 m-1">
                            <div>TITLE: {book.title}</div>
                            <div>BY {book.author}</div>
                            <div>EDITION: {book.edition}</div>
                        </Link>
                    ))
                }
            </div>
        )
    }




    return (
        <div className="flex-grow w-full flex flex-col gap-2 text-center">
            <div className="w-full text-center pt-12">Loading...</div>
        </div>
    )
}