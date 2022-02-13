const getData = () => {
    return fetch(`https://ozonchik-1048f-default-rtdb.firebaseio.com/goods.json`)
        .then(response => {
        return response.json()
        })
}

export default getData