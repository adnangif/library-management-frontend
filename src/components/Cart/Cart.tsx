import BasePage from "../BasePage";
import { CartItem, clearCart, getCart } from "../../cartManagement";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Cart() {
    const [books, setBooks] = useState<CartItem[]>([])

    function handleClear() {
        clearCart()
        setBooks(getCart())
    }

    function handleOrder() {
        if (books.length === 0) {
            toast.error("Empty Cart. Add books to order.")
        } else {
            const book_ids = books.map(item => item.book_id)

            console.log(book_ids)
        }

    }

    useEffect(() => {
        setBooks(getCart())
    }, [])

    return (
        <BasePage>
            <ToastContainer />
            <div className="grid text-white w-full px-10 gap-10">
                <div className="text-center w-full text-lg font-bold">Cart</div>
                <div className="grid grid-cols-3 gap-4">
                    <button onClick={handleClear} className="bg-red-800 px-6 py-2 rounded-md shadow hover:bg-red-700">Clear</button>
                    <button onClick={handleOrder} className="bg-blue-800 px-6 py-2 rounded-md shadow hover:bg-blue-700">Create Order</button>
                </div>

                <div className="grid gap-4">

                    {
                        books.map((item, index) => {
                            return (
                                <Link to={`/books/${item.info_id}`} key={index} className="border border-w-2 px-2 py-4 rounded-md hover:bg-neutral-700">
                                    <div>{item.title}</div>
                                    <div className="italic font-light">Author(s): {item.author}</div>
                                </Link>
                            )
                        })
                    }
                </div>

            </div>
        </BasePage>
    )
}