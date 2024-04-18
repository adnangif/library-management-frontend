export default async function FetchBookDetails(jwt: string|null,bookid:string|undefined) {

    const API_URL = `http://localhost:8000/api/book-details/?id=${bookid}`
    const response = await fetch(API_URL, {
        method: "GET",
        headers: {

            'Authorization': `Bearer ${jwt}`
        }
    })
    const data = await response.json()

    return data;
}