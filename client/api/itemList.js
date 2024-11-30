// api/itemList.js
import axios from 'axios';
import xml2js from 'xml2js';

const API_KEY = process.env.ALADIN_API_KEY;
const BASE_URL = 'http://www.aladin.co.kr/ttb/api/';

async function parseXml(xml) {
    return new Promise((resolve, reject) => {
        xml2js.parseString(xml, { explicitArray: false }, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // CORS 헤더 추가
    const { query } = req;
    const { queryType = 'BestSeller', categoryId = 0, maxResults = 20 } = query;

    try {
        const response = await axios.get(`${BASE_URL}ItemList.aspx`, {
            params: {
                ttbkey: API_KEY,
                QueryType: queryType,
                MaxResults: maxResults,
                start: 1,
                SearchTarget: 'Book',
                output: 'xml',
                Version: '20131101',
                cover: 'Mid',
                CategoryId: categoryId
            }
        });
        const data = await parseXml(response.data);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data from Aladin API' });
    }
}
