const getData = () => {
    return fetch(`https://ozon-a9987-default-rtdb.firebaseio.com/goods.json`)
        .then(response => {
        return response.json()
        })
}

export default getData