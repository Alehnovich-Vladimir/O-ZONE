const getData = () => {
    return fetch(`https://ozon-f002a-default-rtdb.firebaseio.com/goods.json`)
        .then(response => {
        return response.json()
        })
}

export default getData