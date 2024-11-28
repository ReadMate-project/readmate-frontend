import React, { useState } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import S from './style';

const BookClubChallengeContainer = () => {
    const [percentage, setPercentage] = useState(50); // 예시로 50%로 설정

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
                        <S.Image className='type1' src="/global/images/bookclubpage/bookcover1.png" alt="Book Club Hero" />
                        <S.HeroContent>
                            <h1>책 한 권으로 떠나는 세계 여행, 함께 해요.</h1>
                            <p>Join our community of book lovers! Discover new books, engage in thoughtful discussions, and connect with fellow readers from around the world.</p>
                            <a href="#!">Join Now!</a>
                            {`${percentage}%`}
                            <S.ProgressBarContainer>
                                <S.Filler percentage={percentage}>
                                <S.FillerOverlay percentage={percentage} />
                                    <S.Label>{`${percentage}%`}</S.Label>
                                </S.Filler>
                            </S.ProgressBarContainer>
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
