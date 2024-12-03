import React from 'react';
import S from './style';

const SimpleBook = ({ book }) => {
    
    // const Book={
    //     bookImage:"https://image.aladin.co.kr/product/33726/97/cover150/k442939542_2.jpg",
    //     bookTitle:"책 제목",
    //     writer:"작가"
    // }
    // console.log(book.book);

    return (
        <div>
            <S.BookComponent>
                <img src={book.cover || book.book.bookCover} alt={book.title || book.book.title} />
                <S.TextContianer>
                    <div>{book.title || book.book.title}</div>
                    <div>{book.author || book.book.author}</div>
                </S.TextContianer>
            </S.BookComponent>
        </div>
    );
};

export default SimpleBook;
