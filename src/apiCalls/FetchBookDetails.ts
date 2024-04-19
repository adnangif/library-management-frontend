export default async function FetchBookDetails(jwt: string|null,infoid:string|undefined) {

    const API_URL = `http://localhost:8000/api/book-details/?id=${infoid}`
    const response = await fetch(API_URL, {
        method: "GET",
        headers: {

            'Authorization': `Bearer ${jwt}`
        }
    })
    const data = await response.json()

    return data;
}