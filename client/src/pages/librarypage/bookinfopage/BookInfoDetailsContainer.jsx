import React from 'react';

const BookInfoDetailsContainer = ({ bookDetails }) => {
  console.log('Rendering BookInfoDetails with:', bookDetails); // bookDetails 데이터 확인
  const authorName = bookDetails.author.replace(/\s*\(지은이\)\s*/, '');
  
  return (
    
    <div>
      <img src={process.env.PUBLIC_URL + '/global/images/librarypage/bookdetails.png'}/>
      <img src={process.env.PUBLIC_URL + '/global/images/librarypage/Purchase.png'}/>
      <img src={process.env.PUBLIC_URL + '/global/images/librarypage/writeEssay.png'}/>
      <img src={process.env.PUBLIC_URL + '/global/images/librarypage/addbook.png'}/>

      <img src={bookDetails.cover} alt={bookDetails.title} />
      <h2>{bookDetails.title}</h2>
      <p> {authorName} | {bookDetails.publisher} | {bookDetails.pubDate}</p>
      <p>{bookDetails.categoryName}</p>
      <p> 정가  {bookDetails.priceStandard}원</p>
      <p>{bookDetails.description}</p>
 
      
      
    </div>
  );
};

export default BookInfoDetailsContainer;
