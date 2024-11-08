import React, { useRef, useState } from 'react';
import S from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import Comment from './comment/Comment';
import DeleteEssay from './DeleteEssay';
import SimpleBook from '../../../components/book/SimpleBook';

const EssayDetailPage = () => {
    const location = useLocation();
    const { post } = location.state || {}; // PostPage에서 전달된 post 정보
    const [visible, setVisible] = useState(false);
    const navigate=useNavigate();

    
    return (
        <div>
            <S.Container>
                <S.TitleContainer>
                    <S.TitleHightlight><img src={process.env.PUBLIC_URL + '/global/images/postpage/board.png'}  alt="게시판"/>
                    </S.TitleHightlight>
                    
                    <S.TitleHeader>
                        <span>
                            <img src={process.env.PUBLIC_URL + '/global/images/mypage/defaultProfile.png'}/>
                        </span>
                        <S.UserInfo>
                            <S.UserName>{post.userId}</S.UserName>
                            <S.CreatedAt>{new Date(post.createdAt).toLocaleString()}</S.CreatedAt>
                        </S.UserInfo>
                        <S.ButtonContainer>
                        <S.Button onClick={()=>{navigate('/posts/postdetail/modifypost', { state: { post } })}} >수정</S.Button>
                        <S.Button onClick={() => { setVisible(!visible);}} >삭제</S.Button>
                    </S.ButtonContainer>
                    </S.TitleHeader>
                </S.TitleContainer>
                
                <S.Line></S.Line>
                
                <S.BookContainer>
                  <SimpleBook/>
                    
                </S.BookContainer>
                
                <S.BodyContainer>
                {visible && <DeleteEssay visible={visible} setVisible={setVisible} />}
                    <S.PostTitle>{post.title}</S.PostTitle>
                    <S.PostContent>{post.content}</S.PostContent>
                    <S.ImageContainer>
                        <img src='https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/7KD/image/Twc6gpoHWkc7XDaoU_pZ3opJcWk.jpg'/>
                        <img src='https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/7PBF/image/b0KVeRRLDeOtIap0-KnApW1uW8Q'/>
                    </S.ImageContainer>
                </S.BodyContainer>
                
                <S.Line></S.Line>
                <Comment/>
            </S.Container>
            
        </div>
    );
};

export default EssayDetailPage;

