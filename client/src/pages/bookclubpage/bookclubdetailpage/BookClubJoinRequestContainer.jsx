
import React, {useState} from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import S from './style'

const BookClubJoinRequestContainer = () => {
    const [text, setText] = useState('');
    const maxLength = 50;

    const handleChange = (e) => {
        const inputText = e.target.value;
        if (inputText.length <= maxLength) {
            setText(inputText);
        }
    };


    return (
        <S.Container className='JoinRequest' >
             
        

            <S.TitleContainer className='sub4'>
        
                <S.TitleHighlight className='sub4'>
                북클럽에 참여하기 위한 가입인사를 작성해주세요!
                </S.TitleHighlight> 

            </S.TitleContainer>

            <S.CardSection  className='JoinRequest'>
                <S.Card className='JoinRequest'>

                    <S.TextArea 
                        value={text} 
                        onChange={handleChange} 
                        maxLength={maxLength} 
                        placeholder="가입 인사를 작성해주세요..." 
                    /> 
                    <S.CharCount> 
                        {text.length}자/{maxLength}자
                    </S.CharCount>
                
                </S.Card>
            </S.CardSection>    

            <S.TitleContainer className='sub4'>
            
                <S.TitleButtonContainer className='Guest' >
                    <S.Button>
                    <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/Cancel.png'} />
                    </S.Button>
                    <S.Button>
                     <img src={process.env.PUBLIC_URL + '/global/images/bookclubpage/Join.png'} />
                    </S.Button>
                </S.TitleButtonContainer>

            </S.TitleContainer>

        </S.Container>
    
    );
};

export default BookClubJoinRequestContainer;
