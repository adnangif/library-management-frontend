
import React, { useState } from "react";
import { getLlibrarianToken, setLibrarianToken } from "../../../userManagement";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function () {

    if (getLlibrarianToken() != null) {
        return (
            <Navigate to='/librarian/' replace />
        )
    }



    const [UserID, setUserId] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const nav = useNavigate()




    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        fetch('http://localhost:8000/api/librarian/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'iid': UserID,
                'password': password,
            })
        })
            .then(response => {
                if (response.status == 202) {
                    console.log("Login complete")
                }
                else if (response.status == 400) {
                    setError(true)
                }
                return response.json()
            })
            .then(data => {
                if (data['token']) {
                    const jwt_token = data['token']
                    setLibrarianToken(jwt_token)

                    setTimeout(() => {
                        nav('/librarian/')

                    }, 1000)
                }
            })
    }

    return (
        <div className="bg-neutral-200 text-neutral-200 flex flex-col justify-center items-center w-screen h-screen overflow-hidden">
            <form method="post" onSubmit={handleSubmit} className="bg-neutral-800 rounded-lg px-16 p-10 flex flex-col gap-10 ">
                <div className="flex justify-between items-center">
                    <label htmlFor="userid">Institution ID</label>
                    <input minLength={4} name="userid" id="userid" onChange={(e) => setUserId(e.target.value)} placeholder="ex. 216443"
                        className='outline-none border rounded-lg focus:bg-neutral-600 bg-neutral-800 p-2'
                        type="text" />
                </div>

                <div className="flex justify-between gap-10 items-center">
                    <label htmlFor="passwd">Password</label>
                    <input minLength={4} id="passwd" name="passwd" placeholder="*******" onChange={e => setPassword(e.target.value)}
                        className='outline-none border rounded-lg focus:bg-neutral-600 bg-neutral-800 p-2'
                        type="password" />
                </div>

                {error ?
                    <div className="text-center text-red-400">Wrong institution id or Password</div>
                    :
                    <div></div>
                }
                <div className="flex justify-end">
                    <input type="submit"
                        className="bg-neutral-600 rounded-2xl px-10 py-2 cursor-pointer hover:bg-neutral-700"
                        value={'Login'} />
                </div>
                <div>
                    <Link to="/librarian/signup" className="text-blue-200 hover:text-blue-400">Create Librarian Account</Link>

                </div>
            </form>

        </div>
    )
}