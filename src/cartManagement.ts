export interface CartItem {
    book_id: any;
    title: any;
    author: any;
    info_id: any;
}

export function getCart() {
    const prevList: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]')
    return prevList
}

export function exists(item: CartItem) {
    let result = false
    getCart().map(itm => {
        if (itm.info_id == item.info_id) result = true
    })
    return result
}

export function addToCart(book: CartItem) {
    const prevList = getCart()
    prevList.push(book)

    localStorage.setItem('cart', JSON.stringify(prevList))
}

export function clearCart() {
    localStorage.setItem('cart', JSON.stringify([]))
}