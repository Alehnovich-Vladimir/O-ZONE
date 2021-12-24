const getData = () => {
    return fetch(`https://test-203a1-default-rtdb.firebaseio.com/goods.json`)
        .then(response => {
        return response.json()
        })
}

export default getData