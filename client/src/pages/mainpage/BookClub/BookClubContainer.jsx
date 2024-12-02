import React from 'react';
import S from './style';
import { NavLink } from 'react-router-dom';

const BookClubContainer = () => {

    const bookClubs = [
        {
            title: "작별하지 않는다",
            author: "한강",
            clubName: "북클럽 이름1",
            description: "북클럽설명입니다. 북클럽설명입니다. 북클럽설명입니다. 북클럽설명입니다.",
            tags: ["소설", "자기계발"],
            members: {
                current: 3,
                total: 7
            },
            bookCover: "https://image.aladin.co.kr/product/27877/5/cover500/8954682154_3.jpg"
        },
        {
            title: "예언자의 노래",
            author: "폴 린치",
            clubName: "베스트셀러",
            description: "베스트셀러 소설 읽는 북클럽입니다. 많이 참여해주세요!",
            tags: ["소설","자기계발"],
            members: {
                current: 5,
                total: 15
            },
            bookCover: "https://image.aladin.co.kr/product/35228/19/cover500/k442934635_1.jpg"
        }
    ];

    return (
        <div>
            <S.Container className='lightGreenBg'>
                <S.Title>
                    <img src={process.env.PUBLIC_URL + '/global/images/mainpage/bookclub.png'}/>
                </S.Title>
                <S.Text2>
                    <div>현재 모집 중인 북클럽이에요. 관심있는 북클럽에 참여해보세요!</div>
                </S.Text2>
                
                <S.ShowMoreButton2>
                    <NavLink to={"/bookclubs"}>
                        <img src={process.env.PUBLIC_URL + '/global/images/button/showmorebutton.png'}/>
                    </NavLink>
                </S.ShowMoreButton2>
                
                <S.BookClubClip>
                    <img src={process.env.PUBLIC_URL + '/global/images/mainpage/bookclubclip1.png'}/>
                    <img src={process.env.PUBLIC_URL + '/global/images/mainpage/bookclubclip2.png'}/>

                </S.BookClubClip>
                
                <S.BC_Component>
                    {bookClubs.map((club, i) => (
                        <React.Fragment key={i}>
                       
                            <S.Box >
                                <S.FirstLine>
                                    <img src={process.env.PUBLIC_URL + '/global/images/mainpage/Now.png'} />
                                    <S.Title3>{club.title} | {club.author}</S.Title3>
                                </S.FirstLine>

                                <S.SecondLine>
                                    <div>{club.clubName}</div>
                                    <div className='description'>{club.description}</div>
                                </S.SecondLine>

                                <S.ThirdLine>
                                    <S.Category>
                                        {club.tags.map((tag, idx) => (
                                            <div key={idx} className="tag">{tag}</div>
                                        ))}
                                    </S.Category>

                                    <S.PeopleContainer>
                                    <img src={process.env.PUBLIC_URL + '/global/images/mainpage/peopleIcon.png'} />
                                        <div style={{ color: '#717171' }}>{club.members.current}/{club.members.total} 명</div>

                                    </S.PeopleContainer>
                                </S.ThirdLine>

                                
                                <S.BookImage>
                                    <img src={club.bookCover} alt={club.title} />
                                </S.BookImage>
                                
                            </S.Box>
                        
                        </React.Fragment>
                    ))}
                </S.BC_Component>

            </S.Container>
        </div>
    );
};

export default BookClubContainer;