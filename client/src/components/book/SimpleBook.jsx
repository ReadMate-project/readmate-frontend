import React from 'react';
import S from './style';

const SimpleBook = () => {
    const Book={
        bookImage:"https://image.aladin.co.kr/product/33726/97/cover150/k442939542_2.jpg",
        bookTitle:"책 제목",
        writer:"작가"
    }
    return (
        <div>
            <S.BookComponent>
                <img src={Book.bookImage}/>
                <S.TextContianer>
                    <div>{Book.bookTitle}</div>
                    <div>{Book.writer}</div>
                </S.TextContianer>
                
            </S.BookComponent>
        </div>
    );
};

export default SimpleBook;