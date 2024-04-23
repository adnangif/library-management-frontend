export default async function (jwt: string|null,searchTerm:string) {
    if(searchTerm.trim() == ""){
        return []
    }
    
    const API_URL = `http://localhost:8000/api/search/?q=${searchTerm}`
    const response = await fetch(API_URL, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    })
    const data = await response.json()

    return data;
}