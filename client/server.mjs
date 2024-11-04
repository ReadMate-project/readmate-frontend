// server.js

import express from 'express';
import cors from 'cors';
import { searchBooks, getBookDetails } from '../client/api/aladinAPI.mjs';

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
    const { id } = req.query;

    try {
        const result = await getBookDetails(id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
