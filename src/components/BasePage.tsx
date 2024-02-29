import SideNavBar from "./sidnav/SideNavBar";

export default function BasePage({ children }: {
    children: JSX.Element[]
}) {
    return (
        <div className='h-screen w-screen flex justify-center'>
            <div className='flex h-screen w-full lg:w-5/6 max-w-5xl  overflow-hidden bg-teal-950'>
                <SideNavBar />
                <div className='bg-neutral-800 text-neutral-100 max-h-full overflow-auto flex flex-col gap-5 flex-grow  p-5  justify-start items-center'>
                    {children}
                </div>
            </div>
        </div>
    )
}