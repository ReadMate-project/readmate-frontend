import React, { useState }from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import S from './style'

const BookListContainer = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 2;

    const cards = [
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/bookcover1.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/bookcover1.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/bookcover1.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/bookcover1.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/bookcover1.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/bookcover1.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/bookcover1.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/bookcover1.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/bookcover1.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/bookcover1.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/bookcover1.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/bookcover1.png" },
    ];
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    const startIndex = currentPage * cardsPerPage;
    const currentCards = cards.slice(startIndex, startIndex + cardsPerPage);

    

    return (
         <S.Container className='BookList' >
              
            <S.TitleContainer className='sub'>
            
                <S.TitleHighlight className='sub2'>
                    <h1>도서 목록</h1>
                </S.TitleHighlight>  

            </S.TitleContainer>

            <S.CardSection className='BookList'>
                
                <S.Button onClick={handlePrevPage} disabled={currentPage === 0}>
                    <img src={process.env.PUBLIC_URL + '/global/images/librarypage/Left.png'} alt="Library Board" />
                </S.Button>    
                
                {currentCards.map((card, index) => (
                <S.Card className='BookList' key={index}>
                    <S.HeroSection>
                        <S.Image src={card.image} alt="Book Club Hero" />
                        <S.HeroContent>
                            <h1>{card.title}</h1>
                            <p>{card.text}</p>
                            <a href="#!">Learn More</a>
                        </S.HeroContent>
                    </S.HeroSection>
                </S.Card>
                ))}

                <S.Button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
                    <img src={process.env.PUBLIC_URL + '/global/images/librarypage/Right.png'} alt="Library Board" />
                </S.Button>

            </S.CardSection>






        </S.Container>
    
    );
};

export default BookListContainer;
