import React from 'react';
import S from './style';

const SimpleBook2 = ({ book }) => {
    
    
    return (
        <div>
            <S.BookComponent>
                <img src={book.bookCover}/>
                <S.TextContianer>
                    <div>{book.bookTitle}</div>
                    <div>{book.bookAuthor}</div>
                </S.TextContianer>
                
            </S.BookComponent>
        </div>
    );
};

export default SimpleBook2;