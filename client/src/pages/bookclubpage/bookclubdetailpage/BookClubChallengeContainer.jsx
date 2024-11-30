import React, { useState } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import S from './style';

const BookClubChallengeContainer = () => {
    const [percentage, setPercentage] = useState(80); // 예시로 80%로 설정

    const card = { title: "빛이 이끄는 곳으로", author: '백희상', image: "/global/images/bookclubpage/bookcover1.png"};
    

    return (
        <S.Container className='Challenge'>
            <S.TitleContainer className='sub'>
                <S.TitleHighlight className='sub3'>
                    <h1>오늘의 미션</h1>
                </S.TitleHighlight>
            </S.TitleContainer>

            <S.CardSection className='Challenge'>
                    <S.Card className='Challenge'>
                        <S.HeroSection>
                            <S.Image className='Challenge' src={card.image} alt="Book Club Hero" />
                            <S.HeroContent>

                                <S.ContentTop>
                                    
                                    <S.ContentTitle className='Challenge'>
                                        <S.Content className='UnderLine'>{card.title}</S.Content>
                                        <S.Content>| {card.author}</S.Content>
                                    </S.ContentTitle>
                                    
                                    <S.ContentMore>
                                        <S.Button>
                                            <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/Configuration.png'} />
                                        </S.Button>
                                    </S.ContentMore> 

                                </S.ContentTop>

                                <S.ContentMiddle>
                                    
                                    <S.ContentPeriodContainer className='Challenge'>            
                                    <S.ContentPeriod className='Whiteh3'>
                                    오늘 읽을 분량              
                                    </S.ContentPeriod>
                                    <S.ContentPeriod>
                                    p.120~130              
                                    </S.ContentPeriod>
                                    </S.ContentPeriodContainer>
                                </S.ContentMiddle>
                                
                                <S.ContentMiddle>
                                    
                                    <S.ContentPeriodContainer className='Challenge'>            
                                    <S.ContentPeriod className='Whiteh3'>
                                    진행률              
                                    </S.ContentPeriod>
                                    <S.ContentPeriod>
                                    {percentage}%              
                                    </S.ContentPeriod>
                                    </S.ContentPeriodContainer>
                                </S.ContentMiddle>

                                <S.ContentFoot>
                                    <S.ProgressBarContainer>
                                        <S.Filler percentage={percentage}>
                                            <S.Label>{`${percentage}%`}</S.Label>
                                        </S.Filler>
                                    </S.ProgressBarContainer>
                                </S.ContentFoot>
                                
                            </S.HeroContent>

                        </S.HeroSection>
                    </S.Card>
                
                <S.left>  성공한 멤버 <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/Congratulation.png'}/>   </S.left>
                
                <S.CardSection className='Challenger'>
                <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/ID_Image.png'}/>
                <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/ID_Image.png'}/>
                <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/ID_Image.png'}/>
                <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/ID_Image.png'}/>
                <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/ID_Image.png'}/>
                <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/ID_Image.png'}/>

                </S.CardSection>
            
            </S.CardSection>
        </S.Container>
    );
};

export default BookClubChallengeContainer;
