// This can be used directly in the browser
fetch('https://www.omdbapi.com/?s=batman&y=2018&apikey=93a3d260')
    .then(response => console.log(response))

// using json
fetch('https://www.omdbapi.com/?s=batman&y=2018&apikey=93a3d260')
    .then(response => response.json())
    .then(data => console.log(data));
