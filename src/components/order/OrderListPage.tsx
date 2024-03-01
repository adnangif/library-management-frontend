import { useEffect, useState } from "react";
import BasePage from "../BasePage";

export default function OrderListPage() {

    const [orders, setOrders] = useState<{
        orderid: string,
        issue_time: string,
        last_collection_time: string
    }[]>([])

    useEffect(() => {
        setOrders([
            {
                orderid: 'asdf',
                issue_time: '3/3/23',
                last_collection_time: '10/3/23',
            },
            {
                orderid: 'asdf',
                issue_time: '3/3/23',
                last_collection_time: '10/3/23',
            },
            {
                orderid: 'asdf',
                issue_time: '3/3/23',
                last_collection_time: '10/3/23',
            },
            {
                orderid: 'asdf',
                issue_time: '3/3/23',
                last_collection_time: '10/3/23',
            },
        ])


    }, [])



    return (
        <BasePage>
            <div className="text-lg font-bold">Orders</div>
            <div className="grid gap-5 w-full">
                {
                    orders.map(order => (
                        <button className="grid lg:grid-cols-3  place-content-start sm:grid-cols-2 w-full border hover:bg-neutral-700  rounded-lg p-2">
                            <div className="flex gap-3">
                                <div className="font-thin">OrderID</div>
                                <div className="font-bold">{order.orderid}</div>
                            </div>
                            <div className="flex gap-3">
                                <div className="font-thin">Issue Time: </div>
                                <div className="font-bold">{order.issue_time}</div>
                            </div>
                            <div className="flex gap-3">
                                <div className="font-thin">Collect Before: </div>
                                <div className="font-bold">{order.last_collection_time}</div>
                            </div>
                        </button>

                    ))
                }

            </div>
        </BasePage>
    )
}