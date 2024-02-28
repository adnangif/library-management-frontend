import React, { useState } from "react";

export default function LoginPage() {
    const [UserID, setUserId] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(UserID)
        console.log(password)
    }

    return (
        <div className="bg-neutral-100 text-neutral-200 flex flex-col justify-center items-center w-screen h-screen overflow-hidden">
            <form method="post" onSubmit={handleSubmit} className="bg-neutral-800 p-10 flex flex-col gap-10 ">

                <div className="flex justify-between items-center">
                    <label htmlFor="userid">UserID</label>
                    <input minLength={4} name="userid" id="userid" onChange={(e) => setUserId(e.target.value)} placeholder="ex. 216443" className="bg-neutral-800 p-2  outline-none border border-neutral-600 focus:border-neutral-700" type="text" />
                </div>

                <div className="flex justify-between gap-10 items-center">
                    <label htmlFor="passwd">Password</label>
                    <input minLength={4} id="passwd" name="passwd" placeholder="*******" onChange={e => setPassword(e.target.value)} className="bg-neutral-800 p-2 outline-none border border-neutral-600 focus:border-neutral-700" type="password" />
                </div>

                <div className="flex justify-center">
                    <input type="submit" className="bg-neutral-600 px-10 py-2 cursor-pointer hover:bg-neutral-700" value={'Login'} />
                </div>
            </form>

        </div>
    )
}