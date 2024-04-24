
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
        <div className=" flex flex-col text-green-800 font-bold uppercase justify-center items-center w-screen h-screen overflow-hidden bg-green-50">
            <form method="post" onSubmit={handleSubmit} className="relative rounded-lg px-16 p-10 flex flex-col gap-6 border-2 border-green-400 bg-white shadow-lg">
                <div className="flex justify-between items-center gap-20">
                    <label htmlFor="userid">Institution ID</label>
                    <input minLength={4} name="userid" id="userid" onChange={(e) => setUserId(e.target.value)} placeholder="ex. 216443"
                        className='outline-none border rounded-lg  p-2 focus:border-green-400'
                        type="text" />
                </div>

                <div className="flex justify-between gap-10 items-center">
                    <label htmlFor="passwd">Password</label>
                    <input minLength={4} id="passwd" name="passwd" placeholder="*******" onChange={e => setPassword(e.target.value)}
                        className='outline-none border rounded-lg  p-2 focus:border-green-400'
                        type="password" />
                </div>

                {error ?
                    <div className="text-center text-red-400">Wrong institution id or Password</div>
                    :
                    <div></div>
                }
                <div className="flex justify-end">
                    <input type="submit"
                        className="rounded-lg uppercase font-bold text-white px-10 py-2 cursor-pointer bg-green-400 hover:bg-green-300"
                        value={'Login'} />
                </div>
                <div>
                    <Link to="/librarian/signup" className="text-green-400 hover:text-green-300 absolute bottom-0 pb-4">Create Librarian Account</Link>

                </div>
            </form>

        </div>
    )
}