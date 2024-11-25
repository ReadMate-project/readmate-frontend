import React, { useState } from 'react';
import S from './style';

const BookClubListContainer = () => {
    const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
    const [currentPageGroup, setCurrentPageGroup] = useState(0); // 현재 페이지 그룹
    const pageSize = 4; // 한 페이지에 표시할 게시글 수
    const pageGroupSize = 5; // 페이지 그룹 크기
    const cards = [
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/DefaultLogo.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/DefaultLogo.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/DefaultLogo.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/DefaultLogo.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/DefaultLogo.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/DefaultLogo.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/DefaultLogo.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/DefaultLogo.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/DefaultLogo.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/DefaultLogo.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/DefaultLogo.png" },
        { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!", image: "/global/images/bookclubpage/DefaultLogo.png" },
    ];
    const totalPages = Math.ceil(cards.length / pageSize); // 전체 페이지 수
    const totalPageGroups = Math.ceil(totalPages / pageGroupSize); // 전체 페이지 그룹 수

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePageGroupChange = (direction) => {
        if (direction === 'prev' && currentPageGroup > 0) {
            setCurrentPageGroup(currentPageGroup - 1);
        } else if (direction === 'next' && currentPageGroup < totalPageGroups - 1) {
            setCurrentPageGroup(currentPageGroup + 1);
        }
    };

    const currentCards = cards.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
    const startPage = currentPageGroup * pageGroupSize;
    const endPage = Math.min(startPage + pageGroupSize, totalPages);

    return (
        <S.Container className='BookClubList'>
            <S.CardSection className='BookClubList'>
                {currentCards.map((card, index) => (
                    <S.Card className='BookClubList' key={index}>
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
            </S.CardSection>
            <S.Pagination>
                <S.PageButton onClick={() => handlePageGroupChange('prev')} disabled={currentPageGroup === 0}>
                    이전
                </S.PageButton>
                {Array.from({ length: endPage - startPage }, (_, index) => (
                    <S.PageNumber
                        key={startPage + index}
                        onClick={() => handlePageChange(startPage + index)}
                        active={startPage + index === currentPage}
                    >
                        {startPage + index + 1}
                    </S.PageNumber>
                ))}
                <S.PageButton onClick={() => handlePageGroupChange('next')} disabled={currentPageGroup === totalPageGroups - 1}>
                    다음
                </S.PageButton>
            </S.Pagination>
        </S.Container>
    );
};

export default BookClubListContainer;
