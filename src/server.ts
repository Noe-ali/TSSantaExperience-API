import express from 'express';
require('dotenv').config()

const app = express();
const PORT = process.env.PORT ?? 3000;
app.disable('x-powered-by')


app.get('/', (req, res) => {
    res.status(200).send(`listen on port ${PORT} `);
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});