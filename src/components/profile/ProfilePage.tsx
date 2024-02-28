import { useParams } from 'react-router-dom';
import SideNavBar from '../sidnav/SideNavBar';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
    const [editing, setEditing] = useState(false)
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [iid, setIid] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        const user = {
            fname: 'alibaba',
            lname: 'rock',
            institution_id_number: '342323',
            email: 'uhdfada@gmail.com',
            phone: '234234234324',
        }

        setFname(user.fname)
        setLname(user.lname)
        setIid(user.institution_id_number)
        setEmail(user.email)
        setPhone(user.phone)
    }, [])


    function handleSaveOrEdit() {
        if (editing) {
            console.log("Update the information about user")
        } else {
            setEditing(!editing)
        }
    }

    function handleCancel() {
        console.log("Handle the information update cancellation")
    }

    const { userid } = useParams()

    return (
        <div className='h-screen w-screen flex justify-center'>
            <div className='flex h-screen w-full lg:w-5/6 max-w-5xl  overflow-hidden bg-neutral-400'>
                <SideNavBar />
                <div className='bg-neutral-700 text-neutral-100 max-h-full overflow-auto flex-grow md:m-10 p-10 flex flex-col gap-5 justify-center'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-start sm:gap-10'>
                            <div className='flex flex-col gap-2 flex-grow'>
                                <div>First Name</div>
                                <input readOnly={!editing} value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    className='outline-none focus:bg-neutral-600 bg-neutral-800 p-2'
                                ></input>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div>Last Name</div>
                                <input readOnly={!editing} value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    className='outline-none focus:bg-neutral-600 bg-neutral-800 p-2'
                                ></input>
                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div>Institution ID Number</div>
                        <input readOnly={!editing} value={iid}
                            onChange={e => setIid(e.target.value)}
                            className='outline-none focus:bg-neutral-600 bg-neutral-800 p-2'
                        ></input>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div>Email Address</div>
                        <input readOnly={!editing} value={email}
                            onChange={e => setEmail(e.target.value)}
                            className='outline-none focus:bg-neutral-600 bg-neutral-800 p-2'
                        ></input>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div>Phone Number</div>
                        <input readOnly={!editing} value={phone}
                            onChange={e => setPhone(e.target.value)}
                            className='outline-none focus:bg-neutral-600 bg-neutral-800 p-2'
                        ></input>
                    </div>
                    <div className='flex justify-end gap-10'>
                        <button onClick={handleSaveOrEdit}
                            className='px-10 py-1 bg-red-500 hover:bg-red-600 border border-teal-950'
                        >{editing ? "Save" : "Edit"}
                        </button>
                        <button onClick={handleCancel}
                            className='px-10 py-1 bg-neutral-500 hover:bg-neutral-600 border border-teal-950'
                        >Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}