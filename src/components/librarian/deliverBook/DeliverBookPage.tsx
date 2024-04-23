import LibrarianBase from "../LibrarianBase";
import { ToastContainer } from "react-toastify";
import DeliverBookList from "./DeliverBookList";

export default function () {

    return (
        <LibrarianBase>
            <ToastContainer />
            <div className="font-bold text-lg">Ordered Books</div>
            <DeliverBookList />


        </LibrarianBase>
    )
}