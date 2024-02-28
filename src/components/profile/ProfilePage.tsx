import { useParams } from 'react-router-dom';
import SideNavBar from '../sidnav/SideNavBar';

export default function ProfilePage() {
    const { userid } = useParams()
    return (
        <div className='h-screen w-screen flex justify-center'>
            <div className='flex h-screen w-full md:w-5/6 max-w-5xl overflow-hidden bg-red-500'>
                <div className='w-48'>
                    <SideNavBar />
                </div>
                <div className='bg-green-500 flex-grow'>
                    main window for user {userid}
                </div>
            </div>
        </div>
    )
}