import React, { useEffect, useState } from 'react';
import DropdownMenu from './DropdownMenuContainer';
import S from './style';

const BookClubListContainer = () => {
    const cards = [
        { bookclubid:2, title: "여름의 기억을 만들어볼까요?", text: '여름은 책 속에서 새로운 세계를 발견하고, 잊지 못할 순간들을 만들기에 완벽한 계절입니다. "여름의 기억을 만들어 볼까요?" 북클럽은 다양한 장르의 책을 함께 읽고, 서로의 생각을 나누며 특별한 여름의 추억을 만들어가는 공간입니다.', image: "/global/images/bookclubpage/clubcover/clubcover2.png", categories:['한국소설','SF'], host:'독서핑' }, 
        { bookclubid:3, title: "여름의 기억을 만들어볼까요?", text: '여름은 책 속에서 새로운 세계를 발견하고, 잊지 못할 순간들을 만들기에 완벽한 계절입니다. "여름의 기억을 만들어 볼까요?" 북클럽은 다양한 장르의 책을 함께 읽고, 서로의 생각을 나누며 특별한 여름의 추억을 만들어가는 공간입니다.', image: "/global/images/bookclubpage/clubcover/clubcover3.png", categories:['한국소설','SF'], host:'독서핑' }, 
        { bookclubid:4, title: "여름의 기억을 만들어볼까요?", text: '여름은 책 속에서 새로운 세계를 발견하고, 잊지 못할 순간들을 만들기에 완벽한 계절입니다. "여름의 기억을 만들어 볼까요?" 북클럽은 다양한 장르의 책을 함께 읽고, 서로의 생각을 나누며 특별한 여름의 추억을 만들어가는 공간입니다.', image: "/global/images/bookclubpage/clubcover/clubcover4.png", categories:['한국소설','SF'], host:'독서핑' }, 
        { bookclubid:5, title: "여름의 기억을 만들어볼까요?", text: '여름은 책 속에서 새로운 세계를 발견하고, 잊지 못할 순간들을 만들기에 완벽한 계절입니다. "여름의 기억을 만들어 볼까요?" 북클럽은 다양한 장르의 책을 함께 읽고, 서로의 생각을 나누며 특별한 여름의 추억을 만들어가는 공간입니다.', image: "/global/images/bookclubpage/clubcover/clubcover5.png", categories:['한국소설','SF'], host:'독서핑' }, 
        { bookclubid:6, title: "여름의 기억을 만들어볼까요?", text: '여름은 책 속에서 새로운 세계를 발견하고, 잊지 못할 순간들을 만들기에 완벽한 계절입니다. "여름의 기억을 만들어 볼까요?" 북클럽은 다양한 장르의 책을 함께 읽고, 서로의 생각을 나누며 특별한 여름의 추억을 만들어가는 공간입니다.', image: "/global/images/bookclubpage/clubcover/clubcover6.png", categories:['한국소설','SF'], host:'독서핑' }, 
        { bookclubid:7, title: "여름의 기억을 만들어볼까요?", text: '여름은 책 속에서 새로운 세계를 발견하고, 잊지 못할 순간들을 만들기에 완벽한 계절입니다. "여름의 기억을 만들어 볼까요?" 북클럽은 다양한 장르의 책을 함께 읽고, 서로의 생각을 나누며 특별한 여름의 추억을 만들어가는 공간입니다.', image: "/global/images/bookclubpage/clubcover/clubcover7.png", categories:['한국소설','SF'], host:'독서핑' }, 
        { bookclubid:8, title: "여름의 기억을 만들어볼까요?", text: '여름은 책 속에서 새로운 세계를 발견하고, 잊지 못할 순간들을 만들기에 완벽한 계절입니다. "여름의 기억을 만들어 볼까요?" 북클럽은 다양한 장르의 책을 함께 읽고, 서로의 생각을 나누며 특별한 여름의 추억을 만들어가는 공간입니다.', image: "/global/images/bookclubpage/clubcover/clubcover8.png", categories:['한국소설','SF'], host:'독서핑' }, 
        { bookclubid:9, title: "여름의 기억을 만들어볼까요?", text: '여름은 책 속에서 새로운 세계를 발견하고, 잊지 못할 순간들을 만들기에 완벽한 계절입니다. "여름의 기억을 만들어 볼까요?" 북클럽은 다양한 장르의 책을 함께 읽고, 서로의 생각을 나누며 특별한 여름의 추억을 만들어가는 공간입니다.', image: "/global/images/bookclubpage/clubcover/clubcover9.png", categories:['한국소설','SF'], host:'독서핑' }, 
        { bookclubid:10, title: "여름의 기억을 만들어볼까요?", text: '여름은 책 속에서 새로운 세계를 발견하고, 잊지 못할 순간들을 만들기에 완벽한 계절입니다. "여름의 기억을 만들어 볼까요?" 북클럽은 다양한 장르의 책을 함께 읽고, 서로의 생각을 나누며 특별한 여름의 추억을 만들어가는 공간입니다.', image: "/global/images/bookclubpage/DefaultLogo.png", categories:['한국소설','SF'], host:'독서핑' }, 
        { bookclubid:11, title: "여름의 기억을 만들어볼까요?", text: '여름은 책 속에서 새로운 세계를 발견하고, 잊지 못할 순간들을 만들기에 완벽한 계절입니다. "여름의 기억을 만들어 볼까요?" 북클럽은 다양한 장르의 책을 함께 읽고, 서로의 생각을 나누며 특별한 여름의 추억을 만들어가는 공간입니다.', image: "/global/images/bookclubpage/DefaultLogo.png", categories:['한국소설','SF'], host:'독서핑' }, 
        { bookclubid:12, title: "여름의 기억을 만들어볼까요?", text: '여름은 책 속에서 새로운 세계를 발견하고, 잊지 못할 순간들을 만들기에 완벽한 계절입니다. "여름의 기억을 만들어 볼까요?" 북클럽은 다양한 장르의 책을 함께 읽고, 서로의 생각을 나누며 특별한 여름의 추억을 만들어가는 공간입니다.', image: "/global/images/bookclubpage/DefaultLogo.png", categories:['한국소설','SF'], host:'독서핑' }, 
        { bookclubid:13, title: "여름의 기억을 만들어볼까요?", text: '여름은 책 속에서 새로운 세계를 발견하고, 잊지 못할 순간들을 만들기에 완벽한 계절입니다. "여름의 기억을 만들어 볼까요?" 북클럽은 다양한 장르의 책을 함께 읽고, 서로의 생각을 나누며 특별한 여름의 추억을 만들어가는 공간입니다.', image: "/global/images/bookclubpage/DefaultLogo.png", categories:['한국소설','SF'], host:'독서핑' }, 
    ];

    const pageSize = 6; // 한 페이지에 표시할 게시글 수
    const pageGroupSize = 5; // 페이지 그룹 크기
    const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
    const [totalPages, setTotalPages] = useState(Math.ceil(cards.length / pageSize)); // 전체 페이지 수
    const [currentPageGroup, setCurrentPageGroup] = useState(0); // 페이지 그룹

    useEffect(() => {
        setTotalPages(Math.ceil(cards.length / pageSize)); // 전체 페이지 수 업데이트
    }, [cards]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleNextPageGroup = () => {
        if ((currentPageGroup + 1) * pageGroupSize < totalPages) {
            setCurrentPageGroup(currentPageGroup + 1);
            setCurrentPage((currentPageGroup + 1) * pageGroupSize); // 다음 그룹 첫 페이지로 이동
        }
    };

    const handlePrevPageGroup = () => {
        if (currentPageGroup > 0) {
            setCurrentPageGroup(currentPageGroup - 1);
            setCurrentPage((currentPageGroup - 1) * pageGroupSize); // 이전 그룹 첫 페이지로 이동
        }
    };

    const startPage = currentPageGroup * pageGroupSize;
    const endPage = Math.min(startPage + pageGroupSize, totalPages);
    const currentCards = cards.slice(currentPage * pageSize, (currentPage + 1) * pageSize); // 현재 페이지의 카드

    return (
        <S.Container className='BookClubList'>
            <DropdownMenu />
            <S.CardSection className='BookClubList'>
                {currentCards.map((card, index) => (
                    <S.Card className='BookClubList' key={index}>
                        <S.HeroSection>
                            <S.styledLink to={`/bookclubs/bookclubinfo/${card.bookclubid}`}>
                                <S.Image src={card.image} alt="Book Club Hero" />
                            </S.styledLink>
                            <S.HeroContent>

                                    
                                <S.ContentTop>
                                    <S.ContentTitle>{card.title}</S.ContentTitle>
                                    
                                    <S.ContentMore>

                                        <S.BookCategoryList>
                                            {card.categories.map((category, index) => (
                                            <S.BookCategory
                                                 key={index}>{category}
                                            </S.BookCategory>
                                            ))}
                                        </S.BookCategoryList>

                                        <S.BookClubHost>
                                            클럽장 | {card.host}
                                        </S.BookClubHost>

                                    </S.ContentMore> 
                                </S.ContentTop>

                                <S.ContentMiddle>
                                    {card.text}
                                </S.ContentMiddle>
                                

                                <S.ContentFoot>
                                    <S.ContentPeriodContainer>            
                                    
                                    <S.ContentPeriod>
                                       진행 기간 2024.10.31 ~ 2024.12.31              
                                    </S.ContentPeriod>
                                    
                                    <S.ContentPeriod>
                                       모집 기간 2024.10.31 ~ 2024.11.11              
                                    </S.ContentPeriod>

                                    </S.ContentPeriodContainer>

                                    <S.ContentButtonContainer>
                
                                        <S.styledLink to={`/bookclubs/bookclubinfo/${card.bookclubid}`}>
                                            <S.Button>
                                                <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/JoinBookClub.png'} alt="Join Book Club" />
                                            </S.Button>
                                        </S.styledLink>
                
                                    </S.ContentButtonContainer>
                                </S.ContentFoot>


                                
                            </S.HeroContent>

                        </S.HeroSection>
                    </S.Card>
                ))}

                <S.PaginationContainer>
                    <S.PageButton onClick={handlePrevPageGroup} disabled={currentPageGroup === 0}>
                        &lt;
                    </S.PageButton>
                    {Array.from({ length: endPage - startPage }, (_, index) => (
                        <S.PageButton
                            key={index}
                            onClick={() => handlePageChange(startPage + index)}
                            isActive={currentPage === startPage + index} // 활성 페이지 스타일 적용
                        >
                            {startPage + index + 1}
                        </S.PageButton>
                    ))}
                    <S.PageButton onClick={handleNextPageGroup} disabled={endPage >= totalPages}>
                        &gt;
                    </S.PageButton>
                </S.PaginationContainer>

            </S.CardSection>
            
        </S.Container>
    );
};

export default BookClubListContainer;
