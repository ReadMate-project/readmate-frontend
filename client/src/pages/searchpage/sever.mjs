// server.js
import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/search', async (req, res) => {
    const { query } = req.query;
    const apiUrl = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${process.env.ALADIN_API_KEY}&Query=${encodeURIComponent(query)}&SearchTarget=Book&output=js`;

    try {
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
