fetch('https://jsonplaceholder.typicode.com/users').then(
    response => response.json()
    ).then( json => {
        console.log(json);
        if ( json.length > 0 ) {
            let user = "";
            json.forEach((itemData) => {
                user += "<tr>";
                user += "<td onclick='showPosts(" + itemData.id + ")' data-name='" + itemData.username + "' class='name'" + "' id='" + itemData.id + "' >" + itemData.name + "</td>";
                user += "<td>" + itemData.username + "</td>";
                user += "<td>" + itemData.address.city + "</td>";
                user += "<td>" + itemData.website + "</td>";
                user += "<td>" + itemData.company.name + "</td></tr>";
            });
            document.getElementById('userData').innerHTML = user;
        }
    }
);

function showPosts(id) {
    console.log(id);
    let username = document.getElementById(id).getAttribute('data-name');
    fetch('https://jsonplaceholder.typicode.com/posts').then(
        response => response.json()
    ).then( json => {
        if ( json.length > 0 ) {
            let post = "";
            json.forEach((itemData) => {
                if ( itemData.userId === id ) {
                    post += "<div class='post'>";
                    post += "<h4>" + itemData.title + "</h4>";
                    post += "<p>" + itemData.body + "</p></div>";
                }
            });
            document.getElementById('postData').innerHTML = post;
            document.getElementById('author').innerText = username;
        }
    });
};
