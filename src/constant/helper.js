export const getUser = (url, endpoint, setUser) => {
    fetch(`${url}${endpoint}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => setUser(data))
    .catch(error => console.log(error));
}