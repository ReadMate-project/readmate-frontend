// aladinAPI.mjs

import axios from 'axios';
import dotenv from 'dotenv';
import xml2js from 'xml2js';

dotenv.config();

const API_KEY = process.env.REACT_APP_ALADIN_API_KEY;
const BASE_URL = 'http://www.aladin.co.kr/ttb/api/';
console.log('API Key status:', API_KEY ? 'Found' : 'Not found');

// XML을 JSON으로 변환하는 함수
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

// 책 검색 함수
async function searchBooks(query) {
    const apiUrl = `${BASE_URL}ItemSearch.aspx`;

    try {
        const response = await axios.get(apiUrl, {
            params: {
                ttbkey: API_KEY,
                Query: query,
                QueryType: 'Title',  // 'Keyword' 대신 'Title' 사용
                MaxResults: 20,
                start: 1,
                SearchTarget: 'Book',
                output: 'xml',  // 'js' 대신 'xml' 사용
                Version: '20131101'
            }
        });
        const data = await parseXml(response.data);
        return data;
    } catch (error) {
        throw new Error(`검색 중 오류 발생: ${error.message}`);
    }
}

// 책 상세 정보 함수
async function getBookDetails(isbn) {
    const apiUrl = `${BASE_URL}ItemLookUp.aspx`;

    try {
        const response = await axios.get(apiUrl, {
            params: {
                ttbkey: API_KEY,
                itemIdType: 'ISBN13',
                ItemId: isbn,
                output: 'xml',  // 'js' 대신 'xml' 사용
                Version: '20131101',
                OptResult: 'ebookList,usedList,reviewList'
            }
        });
        const data = await parseXml(response.data);
        console.log('Parsed XML Data:', data);
        return data;
    } catch (error) {
        console.error('Error in getBookDetails function:', error);
        throw new Error(`상세 정보 조회 중 오류 발생: ${error.message}`);
    }
}

async function getItemList(){
    const apiUrl = `${BASE_URL}ItemList.aspx`;

    try {
        const response = await axios.get(apiUrl, {
            params: {
                ttbkey: API_KEY,
                QueryType: 'ItemNewAll',
                MaxResults: 20,
                start: 1,
                SearchTarget: 'Book',
                output: 'xml',  // 'js' 대신 'xml' 사용
                Version: '20131101'
            }
        });
        const data = await parseXml(response.data);
        console.log('Parsed XML Data:',data);
        return data;
    } catch (error) {
        throw new Error(`검색 중 오류 발생: ${error.message}`);
    }
}


export { searchBooks, getBookDetails, getItemList };
