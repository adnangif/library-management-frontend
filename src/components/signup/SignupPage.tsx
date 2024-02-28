import { useState } from "react"

export default function SignupPage() {
    const [iid, setiid] = useState('')
    const [password, setPassword] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [maintainer, setMaintainer] = useState(false)




    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(iid)
        console.log(fname)
        console.log(lname)
        console.log(email)
        console.log(phone)
        console.log(maintainer)
        console.log(password)
    }

    return (
        <div className="flex flex-col text-neutral-200 justify-center items-center h-screen w-screen overflow-hidden bg-neutral-100">
            <form onSubmit={handleSubmit} className="bg-neutral-800 p-10 flex flex-col gap-4">

                <div className="flex justify-between gap-5">
                    <label htmlFor="institution_id_num">Institution ID Number</label>
                    <input className="bg-neutral-800 p-2  outline-none border border-neutral-600 focus:border-neutral-700" onChange={e => setiid(e.target.value)} id="institution_id_num" type="text" />
                </div>


                <div className="flex justify-between gap-10 items-center">
                    <label htmlFor="passwd">Password</label>
                    <input minLength={4} id="passwd" name="passwd" placeholder="*******" onChange={e => setPassword(e.target.value)} className="bg-neutral-800 p-2 outline-none border border-neutral-600 focus:border-neutral-700" type="password" />
                </div>

                <div className="flex justify-between">
                    <label htmlFor="fname">First Name</label>
                    <input className="bg-neutral-800 p-2  outline-none border border-neutral-600 focus:border-neutral-700" onChange={e => setFname(e.target.value)} id="fname" type="text" />
                </div>

                <div className="flex justify-between">
                    <label htmlFor="lname">Last Name</label>
                    <input className="bg-neutral-800 p-2  outline-none border border-neutral-600 focus:border-neutral-700" id='lname' onChange={e => setLname(e.target.value)} type="text" />
                </div>

                <div className="flex justify-between">
                    <label htmlFor="email" >Email Address</label>
                    <input className="bg-neutral-800 p-2  outline-none border border-neutral-600 focus:border-neutral-700" id="email" onChange={e => setEmail(e.target.value)} type="email" />
                </div>

                <div className="flex justify-between">
                    <label htmlFor='phone'>Phone Number</label>
                    <input className="bg-neutral-800 p-2 remove-arrow  outline-none border border-neutral-600 focus:border-neutral-700" id="phone" onChange={e => setPhone(e.target.value)} type="number"  />
                </div>

                <div className="flex w-full ">
                    <label htmlFor="maintainer" className="  w-1/2">Maintainer</label>
                    <input className="w-4" id="maintainer" checked={maintainer} onChange={() => setMaintainer(!maintainer)} type="checkbox" />
                </div>

                <div className="flex justify-end">
                    <input type="submit" className="bg-neutral-600 px-10 py-2 cursor-pointer hover:bg-neutral-700" value='Signup' />
                </div>

            </form>

        </div>
    )
}