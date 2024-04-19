export default async function CreateOrder(jwt: string | null, book_ids: string[]) {
    const API_URL = `http://localhost:8000/api/create-order/`
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {

            'Authorization': `Bearer ${jwt}`
        },
        body: JSON.stringify({
            "book_ids": book_ids
        })
    })
    const data = await response.json()

    return data;
}