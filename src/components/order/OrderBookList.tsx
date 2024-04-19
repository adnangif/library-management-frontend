import { useQuery } from "@tanstack/react-query";
import { getGlobalUser } from "../../userManagement";
import FetchOrderRelatedBooks from "../../apiCalls/FetchOrderRelatedBooks";

interface propTypes {
    order_id: string;
    trigger: boolean;
}

export default function OrderBookList({ order_id, trigger }: propTypes) {

    const { isPending, error, data } = useQuery({
        queryKey: ['BooksList', order_id],
        queryFn: async () => await FetchOrderRelatedBooks(getGlobalUser(), order_id),
        enabled: trigger,
    })


    if (isPending) {
        return (
            <>
                <div className="font-bold text-lg">Ordered Books</div>
                <div className="font-bold text-lg">Loading...</div>
            </>
        )
    }

    if (error) {
        return (
            <>
                <div className="font-bold text-lg">Ordered Books</div>
                <div className="font-bold text-lg">Error... Cannot Fetch Data</div>
            </>
        )
    }


    return (
        <>
            <div className="font-bold text-lg">Ordered Books</div>
            <div className="flex-grow w-full flex flex-col gap-2">

                {
                    data.map((book: any, index: any) => (
                        <div key={index} className="cursor-pointer hover:bg-neutral-700 border border-neutral-200 rounded-lg font-semibold grid lg:grid-cols-3 sm:grid-cols-2  gap-2 p-1 m-1">
                            <div>{book.title}</div>
                            <div>By {book.author}</div>
                            <div>{book.edition}</div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}