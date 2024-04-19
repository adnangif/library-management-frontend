import { ReactNode } from "react"

interface propTypes {
    children: ReactNode
    handlerFunction: () => void
}

export default function NavBarBtn({ children, handlerFunction }: propTypes) {
    return (
        <button onClick={handlerFunction} className="flex cursor-pointer hover:bg-teal-900 w-full py-2 p-2  items-center gap-5 transition-all">
            {children}
        </button>

    )
}