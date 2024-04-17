import { RouterProvider } from "react-router-dom";
import Router from "./Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {

    const queryClient = new QueryClient()

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={Router} />
            </QueryClientProvider>
        </>
    )
}