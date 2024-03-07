function getUsersData() {
    const url = "some_url";
    
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .catch(error  => {
        // handle error 
    })
}


function postUsersData(data) {
    const url = "some_url";

    const params = {
        method: "post",
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer auth_token_value',
            /* Use JSON.stringify if the data is an object
                If the data is itself an String then use data directly
            */
            body: JSON.stringify(data)
        }
    }
    
    fetch(url, params)
    .then((response) => {
        return response.json();
    })
    .catch(error  => {
        // handle error 
    })
}