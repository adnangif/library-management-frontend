// import { useParams } from 'react-router-dom';
import { getGlobalUser } from '../../userManagement';
import { useQuery } from '@tanstack/react-query';
import FetchProfileDetails from '../../apiCalls/FetchProfileDetails';
import InputItem from './InputItem';
import BasePage from '../BasePage';

export default function ProfilePage() {

    const { isPending, error, data } = useQuery({
        queryKey: ["profileData"],
        queryFn: async () => {
            return await FetchProfileDetails(getGlobalUser())
        }
    })

    if (isPending) return (
        <BasePage>
            <div>Loading...</div>
        </BasePage>
    )

    if (error) return (
        <BasePage>
            <div>An error has occurred:  {error.message}</div>
        </BasePage>
    )


    return (
        <BasePage>
            <InputItem title='First Name' data={data.first_name} />
            <InputItem title='Last Name' data={data.last_name} />
            <InputItem title='Institution ID Number' data={data.institution_id_number} />
            <InputItem title='email' data={data.email} />
        </BasePage>

    )
}