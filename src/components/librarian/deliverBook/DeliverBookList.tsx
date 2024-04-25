import { useQuery, useQueryClient } from "@tanstack/react-query"
import LibrarianGetOrderedBooks from "../../../apiCalls/LibrarianGetOrderedBooks"
import { getLlibrarianToken } from "../../../userManagement"
import LibrarianDeliverBook from "../../../apiCalls/LibrarianDeliverBook"
import { toast } from "react-toastify"

export default function () {
    const queryClient = useQueryClient()


    async function handleDeliver(book_id: string) {
        const res = await LibrarianDeliverBook(getLlibrarianToken(), book_id)
        toast.info(res.message)
        queryClient.invalidateQueries({
            queryKey: ["librarianDeliverBooks"],
        })
    }

    const { isPending, error, data } = useQuery({
        queryKey: ["librarianDeliverBooks"],
        queryFn: async () => await LibrarianGetOrderedBooks(getLlibrarianToken())
    })

    if (isPending) {
        return (
            <div>Loading....</div>
        )
    }

    if (error) {
        return (
            <div>Error....</div>
        )
    }


    return (
        <div className="flex-grow w-full flex flex-col gap-2">
            {
                data?.map((book: any, index: any) => (
                    <div key={index} className=" border border-neutral-200 rounded-lg font-semibold grid  gap-2 p-1 m-1">
                        <div className=" p-2 rounded-lg m-1 "  >
                            <div>Book ID: {book.book_id}</div>
                            <div>{book.title}</div>
                            <div>By {book.author}</div>
                            <div>{book.edition}</div>
                        </div>
                        <div className="flex justify-center">
                            <button onClick={() => handleDeliver(book.book_id)} className="px-20 py-2 m-2 bg-green-700 hover:bg-green-600 rounded-lg">Mark As Delivered</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}