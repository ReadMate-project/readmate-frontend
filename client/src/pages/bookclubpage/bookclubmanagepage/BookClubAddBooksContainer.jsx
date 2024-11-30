import React, { useState }from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import S from './style'

const BookClubAddBooksContainer = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 2;

    const cards = [
        { title: "빛이 이끄는 곳으로", text: '천재 건축가 백희성의 첫 번째 장편소설. 어느 날 아침 부동산으로부터 걸려온 전화 한 통이 파리의 건축가 뤼미에르의 인생을 바꿔버렸다. 그는 평범한 직장인의 돈으로는 절대 살 수 없는 시테 섬의 유서 깊은 저택이 헐값에 나와 찾아간 곳에서, 자신이 건축가이기 때문에 선택되었다는 사실을 알게 된다', image: "/global/images/bookclubpage/bookcover1.png",categories:['실화','장편'],author:'백회상' },
        { title: "빛이 이끄는 곳으로", text: '천재 건축가 백희성의 첫 번째 장편소설. 어느 날 아침 부동산으로부터 걸려온 전화 한 통이 파리의 건축가 뤼미에르의 인생을 바꿔버렸다. 그는 평범한 직장인의 돈으로는 절대 살 수 없는 시테 섬의 유서 깊은 저택이 헐값에 나와 찾아간 곳에서, 자신이 건축가이기 때문에 선택되었다는 사실을 알게 된다', image: "/global/images/bookclubpage/bookcover1.png",categories:['실화','장편'],author:'백회상' },
        { title: "빛이 이끄는 곳으로", text: '천재 건축가 백희성의 첫 번째 장편소설. 어느 날 아침 부동산으로부터 걸려온 전화 한 통이 파리의 건축가 뤼미에르의 인생을 바꿔버렸다. 그는 평범한 직장인의 돈으로는 절대 살 수 없는 시테 섬의 유서 깊은 저택이 헐값에 나와 찾아간 곳에서, 자신이 건축가이기 때문에 선택되었다는 사실을 알게 된다', image: "/global/images/bookclubpage/bookcover1.png",categories:['실화','장편'],author:'백회상' },
        { title: "빛이 이끄는 곳으로", text: '천재 건축가 백희성의 첫 번째 장편소설. 어느 날 아침 부동산으로부터 걸려온 전화 한 통이 파리의 건축가 뤼미에르의 인생을 바꿔버렸다. 그는 평범한 직장인의 돈으로는 절대 살 수 없는 시테 섬의 유서 깊은 저택이 헐값에 나와 찾아간 곳에서, 자신이 건축가이기 때문에 선택되었다는 사실을 알게 된다', image: "/global/images/bookclubpage/bookcover1.png",categories:['실화','장편'],author:'백회상' },
        { title: "빛이 이끄는 곳으로", text: '천재 건축가 백희성의 첫 번째 장편소설. 어느 날 아침 부동산으로부터 걸려온 전화 한 통이 파리의 건축가 뤼미에르의 인생을 바꿔버렸다. 그는 평범한 직장인의 돈으로는 절대 살 수 없는 시테 섬의 유서 깊은 저택이 헐값에 나와 찾아간 곳에서, 자신이 건축가이기 때문에 선택되었다는 사실을 알게 된다', image: "/global/images/bookclubpage/bookcover1.png",categories:['실화','장편'],author:'백회상' },
        { title: "빛이 이끄는 곳으로", text: '천재 건축가 백희성의 첫 번째 장편소설. 어느 날 아침 부동산으로부터 걸려온 전화 한 통이 파리의 건축가 뤼미에르의 인생을 바꿔버렸다. 그는 평범한 직장인의 돈으로는 절대 살 수 없는 시테 섬의 유서 깊은 저택이 헐값에 나와 찾아간 곳에서, 자신이 건축가이기 때문에 선택되었다는 사실을 알게 된다', image: "/global/images/bookclubpage/bookcover1.png",categories:['실화','장편'],author:'백회상' },
        { title: "빛이 이끄는 곳으로", text: '천재 건축가 백희성의 첫 번째 장편소설. 어느 날 아침 부동산으로부터 걸려온 전화 한 통이 파리의 건축가 뤼미에르의 인생을 바꿔버렸다. 그는 평범한 직장인의 돈으로는 절대 살 수 없는 시테 섬의 유서 깊은 저택이 헐값에 나와 찾아간 곳에서, 자신이 건축가이기 때문에 선택되었다는 사실을 알게 된다', image: "/global/images/bookclubpage/bookcover1.png",categories:['실화','장편'],author:'백회상' },
        { title: "빛이 이끄는 곳으로", text: '천재 건축가 백희성의 첫 번째 장편소설. 어느 날 아침 부동산으로부터 걸려온 전화 한 통이 파리의 건축가 뤼미에르의 인생을 바꿔버렸다. 그는 평범한 직장인의 돈으로는 절대 살 수 없는 시테 섬의 유서 깊은 저택이 헐값에 나와 찾아간 곳에서, 자신이 건축가이기 때문에 선택되었다는 사실을 알게 된다', image: "/global/images/bookclubpage/bookcover1.png",categories:['실화','장편'],author:'백회상' },
        { title: "빛이 이끄는 곳으로", text: '천재 건축가 백희성의 첫 번째 장편소설. 어느 날 아침 부동산으로부터 걸려온 전화 한 통이 파리의 건축가 뤼미에르의 인생을 바꿔버렸다. 그는 평범한 직장인의 돈으로는 절대 살 수 없는 시테 섬의 유서 깊은 저택이 헐값에 나와 찾아간 곳에서, 자신이 건축가이기 때문에 선택되었다는 사실을 알게 된다', image: "/global/images/bookclubpage/bookcover1.png",categories:['실화','장편'],author:'백회상' },
        { title: "빛이 이끄는 곳으로", text: '천재 건축가 백희성의 첫 번째 장편소설. 어느 날 아침 부동산으로부터 걸려온 전화 한 통이 파리의 건축가 뤼미에르의 인생을 바꿔버렸다. 그는 평범한 직장인의 돈으로는 절대 살 수 없는 시테 섬의 유서 깊은 저택이 헐값에 나와 찾아간 곳에서, 자신이 건축가이기 때문에 선택되었다는 사실을 알게 된다', image: "/global/images/bookclubpage/bookcover1.png",categories:['실화','장편'],author:'백회상' },
        { title: "빛이 이끄는 곳으로", text: '천재 건축가 백희성의 첫 번째 장편소설. 어느 날 아침 부동산으로부터 걸려온 전화 한 통이 파리의 건축가 뤼미에르의 인생을 바꿔버렸다. 그는 평범한 직장인의 돈으로는 절대 살 수 없는 시테 섬의 유서 깊은 저택이 헐값에 나와 찾아간 곳에서, 자신이 건축가이기 때문에 선택되었다는 사실을 알게 된다', image: "/global/images/bookclubpage/bookcover1.png",categories:['실화','장편'],author:'백회상' },
        { title: "빛이 이끄는 곳으로", text: '천재 건축가 백희성의 첫 번째 장편소설. 어느 날 아침 부동산으로부터 걸려온 전화 한 통이 파리의 건축가 뤼미에르의 인생을 바꿔버렸다. 그는 평범한 직장인의 돈으로는 절대 살 수 없는 시테 섬의 유서 깊은 저택이 헐값에 나와 찾아간 곳에서, 자신이 건축가이기 때문에 선택되었다는 사실을 알게 된다', image: "/global/images/bookclubpage/bookcover1.png",categories:['실화','장편'],author:'백회상' },
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
              
           <S.TitleContainer className='sub4'>
        
                <S.TitleHighlight className='sub5'>
                    도서 목록
                </S.TitleHighlight>  

                <S.TitleButtonContainer className='CU'>
                    
                    <S.Button>
                    <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/AddBooks.png'} />
                    </S.Button>
                    
                </S.TitleButtonContainer>

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
                                    
                            <S.ContentTop>
                                
                                <S.ContentTitle className='BookList'>
                                    {card.title} | <p>백회상</p>
                                </S.ContentTitle>
                                 
                                <S.ContentMore>
                                    <S.Button>
                                        <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/Icon_X.png'} alt="Book Club Hero" />
                                    </S.Button>
                                </S.ContentMore>

                            </S.ContentTop>

                            <S.ContentMiddle className='BookList'>
                                <S.BookCategoryList>
                                    {card.categories.map((category, index) => (
                                    <S.BookCategory
                                         key={index}>{category}
                                    </S.BookCategory>
                                    ))}
                                </S.BookCategoryList>
                            </S.ContentMiddle>                

                            <S.ContentMiddle className='BookList'>
                            {card.text.length > 80 ? `${card.text.substring(0, 80)}...` : card.text}
                            </S.ContentMiddle>
                            
                            
                                <S.ContentPeriodContainer className='BookList'>            
                                                  
                                <S.ContentPeriod className='white'> 
                                진행 기간:
                                </S.ContentPeriod>

                                <S.ContentPeriod >
                                2024.10.31 ~ 2024.12.31 
                                </S.ContentPeriod>
                                
                                <S.ContentPeriod className='white'>
                                    <S.Button>
                                        <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/Icon_Calendar.png'} alt="Book Club Hero" />
                                    </S.Button>
                                </S.ContentPeriod>

                                </S.ContentPeriodContainer>
                                
                            
                            
                        </S.HeroContent>
                        
                    </S.HeroSection>
                </S.Card>
                ))}

                <S.Button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
                    <img src={process.env.PUBLIC_URL + '/global/images/librarypage/Right.png'} alt="Library Board" />
                </S.Button>

            </S.CardSection>
            
            {/* 버튼 컨테이너 */}
            <S.TitleContainer className='sub4'>
            
            <S.TitleButtonContainer className='CU' >
                <S.Button>
                <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/Back.png'} />
                </S.Button>
                <S.Button>
                 <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/Create.png'} />
                </S.Button>
            </S.TitleButtonContainer>

        </S.TitleContainer>   




        </S.Container>
    
    );
};

export default BookClubAddBooksContainer;
