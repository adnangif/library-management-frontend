// import { useParams } from 'react-router-dom';
import { Navigate, redirect} from 'react-router-dom';
import SideNavBar from '../sidnav/SideNavBar';
import { useEffect, useState } from 'react';
import { getGlobalUser, isAuthenticated } from '../../userManagement';

export default function ProfilePage() {
    if (!getGlobalUser()) {
        return (
            <Navigate to='/login' replace />
        )
    }


    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [iid, setIid] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')


    useEffect(() => {
        if (isAuthenticated() == false) {
            redirect('/login')
        }
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


    return (
        <div className='h-screen w-screen flex justify-center'>
            <div className='flex h-screen w-full lg:w-5/6 max-w-5xl  overflow-hidden bg-neutral-800'>
                <SideNavBar />
                <div className='bg-neutral-800 text-neutral-100 max-h-full overflow-auto flex-grow md:m-10 p-10 flex flex-col gap-5 justify-center'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-start sm:gap-10'>
                            <div className='flex flex-col gap-2 flex-grow'>
                                <div>First Name</div>
                                <input readOnly={true} value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    className='outline-none border focus:bg-neutral-600 bg-neutral-800 p-2'
                                ></input>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div>Last Name</div>
                                <input readOnly={true} value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    className='outline-none border focus:bg-neutral-600 bg-neutral-800 p-2'
                                ></input>
                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div>Institution ID Number</div>
                        <input readOnly={true} value={iid}
                            onChange={e => setIid(e.target.value)}
                            className='outline-none border focus:bg-neutral-600 bg-neutral-800 p-2'
                        ></input>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div>Email Address</div>
                        <input readOnly={true} value={email}
                            onChange={e => setEmail(e.target.value)}
                            className='outline-none border focus:bg-neutral-600 bg-neutral-800 p-2'
                        ></input>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div>Phone Number</div>
                        <input readOnly={true} value={phone}
                            onChange={e => setPhone(e.target.value)}
                            className='outline-none border focus:bg-neutral-600 bg-neutral-800 p-2'
                        ></input>
                    </div>
                </div>
            </div>
        </div>
    )
}