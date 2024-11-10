// server.js

import express from 'express';
import cors from 'cors';
import { searchBooks, getBookDetails, getItemList } from './api/aladinAPI.mjs';

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/search', async (req, res) => {
    const { query } = req.query;

    try {
        const result = await searchBooks(query);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/details', async (req, res) => {
    const { isbn } = req.query;

    try {
        const result = await getBookDetails(isbn);
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error('Error in /api/books endpoint:',error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/itemlist', async (req, res) => {
    try {
        const result = await getItemList();
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error('Error in /api/books endpoint:', error);
        res.status(500).json({ error: error.message });
    }
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
