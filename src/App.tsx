import { RouterProvider } from "react-router-dom";
import Router from "./Routes";

export default function App() {


    return (
        <>
            <RouterProvider router={Router} />
        </>
    )
}