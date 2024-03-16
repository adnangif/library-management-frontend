export function getGlobalUser(){
    return localStorage.getItem('user')
}

export function isAuthenticated(){
    if(localStorage.getItem('user') === null) return false
    return true
}

export function clearGlobalUser(){
    localStorage.removeItem('user')
    // localStorage.setItem('user','')
}

export function setGlobalUser(value:string){
    localStorage.setItem('user',value)
}