export default async function FetchProfileDetails(jwt: string|null) {

    const API_URL = " http://127.0.0.1:8000/api/user-info/"
    const response = await fetch(API_URL, {
        method: "GET",
        headers: {

            'Authorization': `Bearer ${jwt}`
        }
    })
    const data = await response.json()

    return data;
}