const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
    const n1 = Number(req.body.n1);
    const n2 = Number(req.body.n2);
    const operation = req.body.operation;
    let ans;

    switch (operation) {
        case 'add':
            ans = n1 + n2;
            break;
        case 'subtract':
            ans = n1 - n2;
            break;
        case 'multiply':
            ans = n1 * n2;
            break;
        case 'divide':
            if (n2 === 0) {
                ans = 'Error: Division by zero';
            } else {
                ans = n1 / n2;
            }
            break;
        case 'avg':
            ans = (n1 + n2) / 2;
            break;
        default:
            ans = 'Invalid operation';
    }

    res.send(`Answer: ${ans}`);
    console.log(`Operation: ${operation}, n1: ${n1}, n2: ${n2}, Answer: ${ans}`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
