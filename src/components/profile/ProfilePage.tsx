import { useParams } from 'react-router-dom';

export default function ProfilePage() {
    const { userid } = useParams()
    return (
        <div>
            <h1>This is the profile page of {userid}</h1>
        </div>
    )
}