




// how this is going to work in the future?
const hearthstone_url = "https://yahho.buzz/number.php?id=31"


// if you want to make this work
// https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors

// this function wont work
// because the browser wont let you read the respone because its no-cors
function MakeRequest() {
    fetch(hearthstone_url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        headers: [
            ["Content-Type", "application/json"],
            ["Content-Type", "text/plain"],
            ["Content-Type", "text/html"]
        ]
    })
        .then(response => response.text())
        .then(data => console.log(data))
    // console.log(response.text())
}
