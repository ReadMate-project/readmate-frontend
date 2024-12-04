import React from 'react';
import S from './style';

const HotBookclubContainer = () => {
    const cards = [
        { bookclubid: 1, title: "여름의 기억을 만들어볼까요?", text: '여름은 책 속에서 새로운 세계를 발견하고, 잊지 못할 순간들을 만들기에 완벽한 계절입니다. "여름의 기억을 만들어 볼까요?" 북클럽은 다양한 장르의 책을 함께 읽고, 서로의 생각을 나누며 특별한 여름의 추억을 만들어가는 공간입니다.', image: `${process.env.PUBLIC_URL}/global/images/bookclubpage/clubcover/clubcover1.png`, categories: ['한국소설', 'SF'], host: '독서핑' },
    ];
      

    return (
        <S.Container className='HotBookclub'>
            <S.TitleContainer className='main'>

            <S.styledLink to={`/bookclubs`}>
                <S.TitleHighlight className='main'>
                    <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/BookClub.png'} alt="Book Club" />
                </S.TitleHighlight>
            </S.styledLink>

            </S.TitleContainer>

            <S.TitleContainer className='sub'>
                <S.TitleHighlight className='sub'>
                    <h1>인기 있는 북클럽</h1>
                </S.TitleHighlight>
                <S.TitleButtonContainer>
                    <S.styledLink to={`/bookclubs/bookclubinfo/0/bookclubmanage`}>
                    <S.Button>
                        <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/MakeBookClub.png'} alt="Make Book Club" />
                    </S.Button>
                    </S.styledLink>
                </S.TitleButtonContainer>
            </S.TitleContainer>

            <S.CardSection className='HotBookclub'>
                {cards.map((card, index) => (
                    <S.Card className='HotBookclub' key={index}>
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
                                                <S.BookCategory key={index}>{category}</S.BookCategory>
                                            ))}
                                        </S.BookCategoryList>
                                        <S.BookClubHost>클럽장 | {card.host}</S.BookClubHost>
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
            </S.CardSection>
        </S.Container>
    );
};

export default HotBookclubContainer;
