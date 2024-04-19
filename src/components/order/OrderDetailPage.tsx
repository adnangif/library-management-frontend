import BasePage from "../BasePage";
import { useParams } from "react-router-dom";
import OrderBookList from "./OrderBookList";

export default function OrderDetailPage() {

    const { order_id } = useParams()

    return (
        <BasePage>
            <OrderBookList trigger={true} order_id={String(order_id)} />
        </BasePage>
    )
}