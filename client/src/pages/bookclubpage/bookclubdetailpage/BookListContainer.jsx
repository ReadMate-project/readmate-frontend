import React, { useState }from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import S from './style'

const BookListContainer = () => {
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

    const allowedCategories = ['고등학교참고서', '고전', '과학', '금강산 여행 가는 이에게'
        , '달력/기타', '대학교재/전문서적', '만화', '사회과학'
        , '소설/시/희곡', '수험서/자격증', '어린이', '에세이', '여행'
        , '역사', '예술/대중문화', '외국어', '유아', '인문학', '일본 도서'
        , '자기계발', '잡지', '장르소설', '전집/중고전집', '종교/역학'
        , '좋은부모', '중학교참고서', '청소년', '청소년_추천도서', '초등학교참고서'
        , '컴퓨터/모바일', 'Gift', '가요', '국악', '상품권', '오디오파일', '월드뮤직'
        , '재즈', '종교/명상/기타', '증정용 음악상품권', '클래식', '팝', '해외구매'
        , 'J-Pop', 'LP', 'O.S.T.', '고전/명작', '공포/스릴러', '교양/다큐멘터리'
        , '교육용 S/W', '드라마/코미디', '박스세트', '블루레이', '성인', '애니메이션'
        , '액션/어드벤처', '유아/아동', '음악DVD', '제작국가별', '취미/스포츠', 'S.F/판타지'
        , 'TV 시리즈', 'VCD', 'VHS (비디오테이프)', '가정/원예/인테리어', '가족/관계', '건강/스포츠'
        , '건축/디자인', '게임/토이', '공예/취미/수집', '교육/자료', '기술공학', '기타', '기타 언어권 도서'
        , '달력/다이어리/연감', '대만도서', '대학교재', '독일 도서', '문구/비도서', '법률', '수험서',
         '스페인 도서', '언어학', '오디오북', '요리', '유머', '의학', '인문/사회', '자연과학', '전기/자서전'
         , '종교/명상/점술', '중국 도서', '컴퓨터', '한국관련도서', '해외잡지', 'ELT/어학/사전', '19+'
         , '가격대별 eBook', '구텐베르크 원서', '라이트 노벨', '로맨스', '사전/기타', '알라딘오디오북'
         , '인물/평전', '중고등참고서', '초등참고서', '판타지/무협', '해외도서', 'BL'];
    
    const CensoredCategories = cards.categories ? Array.from(new Set(cards.categories.split(/>|\s+/).filter(category => allowedCategories.includes(category)))) : [];
    cards.categories = CensoredCategories;
    

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
                                    
                            <S.ContentTop>
                                
                                <S.ContentTitle className='BookList'>
                                    {card.title} | <p>백회상</p>
                                </S.ContentTitle>
                                 
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

                                <S.ContentPeriod>
                                2024.10.31 ~ 2024.12.31 
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






        </S.Container>
    
    );
};

export default BookListContainer;
