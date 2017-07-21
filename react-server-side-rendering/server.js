let express = require('express');
let app = express();

app.get('/', (request, response) => {
    let html = '<h1>Hello World!</h1>';
    response.send(html);
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));