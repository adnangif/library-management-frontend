import { useState } from "react"

import { useNavigate } from "react-router-dom"

export default function() {
    const nav = useNavigate()
    const [iid, setiid] = useState('')
    const [password, setPassword] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const [error, setError] = useState(0)




    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(iid)
        console.log(fname)
        console.log(lname)
        console.log(email)
        console.log(phone)
        console.log(password)

        fetch('http://localhost:8000/api/librarian/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'iid': iid,
                'fname': fname,
                'lname': lname,
                'email': email,
                'phone': phone,
                'password': password,
            })
        })
            .then(response => {
                if (response.status == 201) {
                    ("Account Created!")
                    setPassword('')
                    setMessage("Created An Account!!")
                    setTimeout(()=>{
                        nav('/librarian/login')
                    },2000)
                }
                if (response.status == 406) {
                    setError(1)
                }
            })
    }

    return (
        <div className="flex flex-col text-green-800 font-bold uppercase  justify-center items-center h-screen w-screen overflow-hidden bg-green-50">
            {
                message ?
                
                    <div className=" rounded-lg p-10 md:w-1/2 flex flex-col gap-4">
                        <div>{message}</div>
                    </div>
                    :
                    <form onSubmit={handleSubmit} className=" rounded-lg p-10 md:w-1/2 flex flex-col gap-4 border border-2 border-green-400 bg-white shadow-lg">

                        <div className="flex justify-between gap-10 items-center">
                            <label htmlFor="institution_id_num">Institution ID Number</label>
                            <input
                                className=' rounded-lg outline-none border  p-2 remove-arrow focus:border-green-400'
                                onChange={e => setiid(e.target.value)} id="institution_id_num" type="number" />
                        </div>


                        <div className="flex justify-between gap-10 items-center">
                            <label htmlFor="passwd">Password</label>
                            <input minLength={4} id="passwd" name="passwd" placeholder="*******" onChange={e => setPassword(e.target.value)}
                                className='rounded-lg outline-none border p-2 focus:border-green-400'
                                type="password" />
                        </div>

                        <div className="flex justify-between gap-10 items-center">
                            <label htmlFor="fname">First Name</label>
                            <input
                                className='rounded-lg outline-none border  p-2 focus:border-green-400'
                                onChange={e => setFname(e.target.value)} id="fname" type="text" />
                        </div>

                        <div className="flex justify-between gap-10 items-center">
                            <label htmlFor="lname">Last Name</label>
                            <input
                                className='rounded-lg outline-none border p-2 focus:border-green-400'
                                id='lname' onChange={e => setLname(e.target.value)} type="text" />
                        </div>

                        <div className="flex justify-between gap-10 items-center">
                            <label htmlFor="email" >Email Address</label>
                            <input
                                className='rounded-lg outline-none border  p-2 focus:border-green-400'
                                id="email" onChange={e => setEmail(e.target.value)} type="email" />
                        </div>

                        <div className="flex justify-between gap-10 items-center">
                            <label htmlFor='phone'>Phone Number</label>
                            <input
                                className='rounded-lg remove-arrow outline-none border  p-2 focus:border-green-400'
                                id="phone" onChange={e => setPhone(e.target.value)} type="number" />
                        </div>


                        <div className="flex justify-end pt-8">
                            <input type="submit" className=" rounded-lg px-10 py-2 cursor-pointer bg-green-400 text-white font-bold uppercase hover:bg-green-300" value='Signup' />
                        </div>

                        {
                            error == 1 ?
                                <div className="text-center text-red-400">Invalid or incomplete information!</div>
                                : <div></div>
                        }
                    </form>

            }
        </div>
    )
}