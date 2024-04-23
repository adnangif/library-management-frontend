export default async function(jwt: string | null, book_id:string) {
    const API_URL = `http://localhost:8000/api/librarian/deliver-book/`
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${jwt}`
        },
        body: JSON.stringify({
            "book_id": book_id
        })
    })
    const data = await response.json()

    return data;
}