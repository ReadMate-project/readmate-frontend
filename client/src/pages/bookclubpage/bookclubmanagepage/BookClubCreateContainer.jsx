import React from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import S from './style'

const BookClubCreateContainer = () => {
    return (
        <S.Container className='BookClubCU' >
           <S.TitleContainer className='main'>
            
           <S.styledLink to={`/bookclubs`}>
                <S.TitleHighlight className='main'>
                    <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/BookClub.png'} alt="Book Club" />
                </S.TitleHighlight>
            </S.styledLink>
            
            
        
        </S.TitleContainer>  
        

        <S.TitleContainer className='sub4'>
        
            <S.TitleHighlight className='sub5'>
                북클럽 생성
            </S.TitleHighlight> 

        </S.TitleContainer>

            <S.CardSection  className='BookClubCU'>
                <S.Card className='BookClubCU'>
                
                    <S.HeroSection className='BookClubCU'>
                        
                        <S.ImageContainer >

                        <S.Image className='type1' src={process.env.PUBLIC_URL +"/global/images/bookclubpage/DefaultLogo.png"} alt="Book Club Hero" />
                        
                        <S.Button className='BookClubCU'>
                        <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/Icon_X.png'}/>
                        </S.Button>

                        <S.Button>
                        <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/AddPicture.png'}/>
                        </S.Button>

                        </S.ImageContainer>
                        
                        <S.HeroContent>
                            <S.ContentMiddle className='BookClubCU'>
                                북클럽 이름
                                <S.ContentInPut maxLength={11} /> {/* maxLength 속성 추가 */}
                            </S.ContentMiddle>

                            <S.ContentMiddle className='BookClubCU'>
                                관련 카테고리
                                <S.ContentInPut className='middle' readOnly  /> {/* maxLength 속성 추가 */}
                                
                                <S.Button>
                                <img src={process.env.PUBLIC_URL +"/global/images/bookclubpage/search_icon.png"} alt="Book Club Hero" />
                                </S.Button>

                            </S.ContentMiddle>
                            
                            <S.ContentMiddle className='BookClubCU'>
                                북클럽 소개
                                <S.ContentInPut className='long' maxLength={100} /> {/* maxLength 속성 추가 */}
                            </S.ContentMiddle>
                            
                            <S.ContentMiddle className='BookClubCU'>
                                클럽장
                                <S.ContentInPut readOnly /> {/* maxLength 속성 추가 */}

                                <S.Button>
                                <img src={process.env.PUBLIC_URL +"/global/images/bookclubpage/MemberChoice.png"} alt="Book Club Hero" />
                                </S.Button>
                            
                            </S.ContentMiddle>
                            
                            <S.ContentFoot className='BookClubCU'>
                                모집 기간
                                <S.ContentInPut readOnly  />
                                <S.Button>
                                <img src={process.env.PUBLIC_URL +"/global/images/bookclubpage/Icon_Calendar_G.png"} alt="Book Club Hero" />
                                </S.Button>
                            </S.ContentFoot>

                            <S.ContentFoot className='BookClubCU'>
                                모집 기간
                                <S.ContentInPut readOnly  />
                                <S.Button>
                                <img src={process.env.PUBLIC_URL +"/global/images/bookclubpage/Icon_Calendar_G.png"} alt="Book Club Hero" />
                                </S.Button>
                            </S.ContentFoot>
                            
                        </S.HeroContent>
                    

                    </S.HeroSection>
                
                </S.Card>
            </S.CardSection>    
    
        </S.Container>
    
    );
};

export default BookClubCreateContainer;
