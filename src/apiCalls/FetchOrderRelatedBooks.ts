export default async function FetchOrderRelatedBooks(jwt: string|null,order_id:string) {

    const API_URL = `http://localhost:8000/api/ordered-books/?id=${order_id}`
    const response = await fetch(API_URL, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    })
    const data = await response.json()

    return data;
}