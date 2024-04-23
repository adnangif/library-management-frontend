export function getGlobalUser(){
    return localStorage.getItem('user')
}

export function isAuthenticated(){
    if(localStorage.getItem('user') == null) return false
    return true
}

export function clearGlobalUser(){
    localStorage.removeItem('user')
}

export function setGlobalUser(value:string){
    localStorage.setItem('user',value)
}



export function getLlibrarianToken(){
    return localStorage.getItem('librarian')
}


export function setLibrarianToken(value:string){
    localStorage.setItem('librarian',value)
}

export function clearLibrarianToken(){
    localStorage.removeItem('librarian')
}
