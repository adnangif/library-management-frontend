import BasePage from "../BasePage";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import FetchOrderList from "../../apiCalls/FetchOrderList";
import { getGlobalUser } from "../../userManagement";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import CancelOrder from "../../apiCalls/CancelOrder";

export default function OrderListPage() {
    const queryClient = useQueryClient()


    function increaseDate(s: string, inc_day: number) {
        const d = new Date(s)
        d.setDate(d.getDate() + inc_day)
        return d.toDateString()
    }

    async function handleCancel(order_id: string) {
        const response = await CancelOrder(getGlobalUser(), order_id)
        toast.info(response.message)
        queryClient.invalidateQueries({
            queryKey: ['orderList']
        })
    }

    const { isPending, error, data } = useQuery({
        queryKey: ['orderList'],
        queryFn: async () => await FetchOrderList(getGlobalUser())
    })


    if (isPending) return (
        <BasePage>
            <div>Loading...</div>
        </BasePage>
    )

    if (error) return (
        <BasePage>
            <div>An error has occurred:  {error.message}</div>
        </BasePage>
    )



    return (
        <BasePage>
            <ToastContainer />
            <div className="text-lg font-bold">Orders</div>
            <div className="grid gap-5 w-full">
                {
                    data.map((order: any, index: any) => (
                        <div key={index} className="grid gap-4 border rounded-lg p-4">
                            <Link state={order} to={`/orders/${order.order_id}`} key={index} className="grid lg:grid-cols-2 gap-2 place-content-start sm:grid-cols-2 w-full border hover:bg-neutral-700  rounded-lg p-2">
                                <div className="flex gap-3">
                                    <div className="font-thin">OrderID</div>
                                    <div className="font-bold">{order.order_id}</div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="font-thin">Issue Time: </div>
                                    <div className="font-bold">{new Date(order.issue_datetime).toDateString()}</div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="font-thin">Collect Before: </div>
                                    <div className="font-bold">{increaseDate(order.issue_datetime, order.last_collection_time)}</div>
                                </div>
                            </Link>
                            <button onClick={() => handleCancel(order.order_id)} className="bg-red-700 mx-24 py-2 hover:bg-red-600  rounded-md">Cancel Order</button>
                        </div>

                    ))
                }

            </div>
        </BasePage>
    )
}