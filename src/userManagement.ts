export function getGlobalUser(){
    return localStorage.getItem('user')
}

export function clearGlobalUser(){
    localStorage.removeItem('user')
}

export function setGlobalUser(value:string){
    localStorage.setItem('user',value)
}