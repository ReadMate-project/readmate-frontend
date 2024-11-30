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
    const { search } = query;

    try {
        const response = await axios.get(`${BASE_URL}ItemSearch.aspx`, {
            params: {
                ttbkey: API_KEY,
                Query: search,
                QueryType: 'Title',
                MaxResults: 20,
                start: 1,
                SearchTarget: 'Book',
                output: 'xml',
                Version: '20131101'
            }
        });
        const data = await parseXml(response.data);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data from Aladin API' });
    }
}
