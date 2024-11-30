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
    const { query } = req;
    const { isbn } = query;

    try {
        const response = await axios.get(`${BASE_URL}ItemLookUp.aspx`, {
            params: {
                ttbkey: API_KEY,
                itemIdType: 'ISBN13',
                ItemId: isbn,
                output: 'xml',
                Version: '20131101',
                OptResult: 'ebookList,usedList,reviewList'
            }
        });
        const data = await parseXml(response.data);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data from Aladin API' });
    }
}
