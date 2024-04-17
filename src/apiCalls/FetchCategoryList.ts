export default async function FetchCategoryList(jwt: string|null) {

    const API_URL = "http://localhost:8000/api/categories/"
    const response = await fetch(API_URL, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    })
    const data = await response.json()

    return data;
}