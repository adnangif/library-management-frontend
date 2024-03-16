export function getGlobalUser(){
    return localStorage.getItem('user')
}

export function isAuthenticated(){
    if(localStorage.getItem('user') == null) return true
    return false
}

export function clearGlobalUser(){
    localStorage.removeItem('user')
}

export function setGlobalUser(value:string){
    localStorage.setItem('user',value)
}