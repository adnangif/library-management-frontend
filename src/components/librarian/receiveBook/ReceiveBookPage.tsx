import LibrarianBase from "../LibrarianBase";
import { ToastContainer } from "react-toastify";
import ReceiveBookList from "./ReceiveBookList";

export default function () {

    return (
        <LibrarianBase>
            <ToastContainer />
            <div className="font-bold text-lg">Receive Books</div>
            <ReceiveBookList />

        </LibrarianBase>
    )
}