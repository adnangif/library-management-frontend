export default async function CancelOrder(jwt: string | null, order_id:string | null) {
    const API_URL = `http://localhost:8000/api/cancel-order/`
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {

            'Authorization': `Bearer ${jwt}`
        },
        body: JSON.stringify({
            "order_id": order_id
        })
    })
    const data = await response.json()

    return data;
}