import React from 'react';
import S from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import apiClient from '../../../api/apiClient';

const DeletePost = ({visible,setVisible}) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const boardId = queryParams.get('boardId');
    const navigate=useNavigate();
    
    const handleDelete = async () => {
        try {
            const response = await apiClient.delete(`/v1/board/${boardId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            console.log('Post deleted successfully:', response.data);
            setVisible(false);
            navigate(-1);
        } catch (error) {
            console.error('Error deleting post:', error);
            alert('게시글 삭제에 실패했습니다.');
        }
    };

    return (
        <div>
            {visible&&
                <S.DeleteAccountContainer>
                    <S.DeleteText>
                        <div>정말 게시물을 삭제하시겠습니까?</div>
                        <div> 삭제한 게시글은 복구가 불가능합니다.</div>
                    </S.DeleteText>
                    <S.DeleteButtonContainer>
                        <S.CancelButton onClick={()=>{setVisible(false)}}>취소</S.CancelButton>
                        <S.DeleteButton onClick={handleDelete}>삭제</S.DeleteButton>
                    </S.DeleteButtonContainer>
                </S.DeleteAccountContainer>
            }
        </div>
    );
};

export default DeletePost;