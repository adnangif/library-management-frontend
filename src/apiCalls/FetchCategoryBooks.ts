export default async function FetchCategoryBooks(jwt: string | null, catname: string | undefined) {

    const API_URL = `http://localhost:8000/api/category/?title=${catname}`
    const response = await fetch(API_URL, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    })
    const data = await response.json()

    return data;
}