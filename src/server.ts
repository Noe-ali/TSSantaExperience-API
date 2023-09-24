import express from 'express';
require('dotenv').config()

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});