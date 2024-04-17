// import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import SideNavBar from '../sidnav/SideNavBar';
import { getGlobalUser } from '../../userManagement';
import { useQuery } from '@tanstack/react-query';
import FetchProfileDetails from '../../apiCalls/FetchProfileDetails';
import InputItem from './InputItem';

export default function ProfilePage() {
    if (!getGlobalUser()) {
        return (
            <Navigate to='/login' replace />
        )
    }


    const { isPending, error, data } = useQuery({
        queryKey: ["profileData"],
        queryFn: async () => {
            return await FetchProfileDetails(getGlobalUser())
        }
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    return (
        <div className='h-screen w-screen flex justify-center'>
            <div className='flex h-screen w-full lg:w-5/6 max-w-5xl  overflow-hidden bg-neutral-800'>
                <SideNavBar />
                <div className=' text-neutral-100 max-h-full overflow-auto flex-grow md:m-10 p-10 flex flex-col gap-5 justify-center'>
                    <InputItem title='First Name' data={data.first_name} />
                    <InputItem title='Last Name' data={data.last_name} />
                    <InputItem title='Institution ID Number' data={data.institution_id_number} />
                    <InputItem title='email' data={data.email} />
                </div>
            </div>
        </div>
    )
}