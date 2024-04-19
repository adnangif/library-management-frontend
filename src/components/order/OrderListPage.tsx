import { useEffect, useState } from "react";
import BasePage from "../BasePage";
import { useQuery } from "@tanstack/react-query";
import FetchOrderList from "../../apiCalls/FetchOrderList";
import { getGlobalUser } from "../../userManagement";
import { Link } from "react-router-dom";

export default function OrderListPage() {

    function increaseDate(s: string, inc_day: number) {
        const d = new Date(s)
        d.setDate(d.getDate() + inc_day)
        return d.toDateString()
    }

    const { isPending, error, data } = useQuery({
        queryKey: ['orderList'],
        queryFn: async () => FetchOrderList(getGlobalUser())
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

    // const [orders, setOrders] = useState<{
    //     orderid: string,
    //     issue_time: string,
    //     last_collection_time: string
    // }[]>([])

    // useEffect(() => {
    //     setOrders([
    //         {
    //             orderid: 'asdf',
    //             issue_time: '3/3/23',
    //             last_collection_time: '10/3/23',
    //         },
    //         {
    //             orderid: 'asdf',
    //             issue_time: '3/3/23',
    //             last_collection_time: '10/3/23',
    //         },
    //         {
    //             orderid: 'asdf',
    //             issue_time: '3/3/23',
    //             last_collection_time: '10/3/23',
    //         },
    //         {
    //             orderid: 'asdf',
    //             issue_time: '3/3/23',
    //             last_collection_time: '10/3/23',
    //         },
    //     ])


    // }, [])



    return (
        <BasePage>
            <div className="text-lg font-bold">Orders</div>
            <div className="grid gap-5 w-full">
                {
                    data.map((order: any, index: any) => (
                        <Link to={`/orders/${order.order_id}`} key={index} className="grid lg:grid-cols-2 gap-2 place-content-start sm:grid-cols-2 w-full border hover:bg-neutral-700  rounded-lg p-2">
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

                    ))
                }

            </div>
        </BasePage>
    )
}