import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getLlibrarianToken } from "../../../userManagement"
import { toast } from "react-toastify"
import LibrarianGetBorrowedBooks from "../../../apiCalls/LibrarianGetBorrowedBooks"
import LibrarianReceiveBook from "../../../apiCalls/LibrarianReceiveBook"

export default function () {
    const queryClient = useQueryClient()


    async function handleReceive(book_id: string) {
        const res = await LibrarianReceiveBook(getLlibrarianToken(), book_id)
        toast.info(res.message)
        queryClient.invalidateQueries({
            queryKey: ["librarianReceiveBooks"],
        })
    }

    const { isPending, error, data } = useQuery({
        queryKey: ["librarianReceiveBooks"],
        queryFn: async () => await LibrarianGetBorrowedBooks(getLlibrarianToken())
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
                            <button onClick={() => handleReceive(book.book_id)} className="px-20 py-2 m-2 bg-blue-700 hover:bg-blue-600 rounded-lg">Mark As Received</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}