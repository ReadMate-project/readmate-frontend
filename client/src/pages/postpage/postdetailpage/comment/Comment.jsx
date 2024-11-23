import React, { useEffect, useState } from 'react';
import S from './style';
import apiClient from '../../../../api/apiClient';
import { useLocation, useNavigate } from 'react-router';
import { useUser } from '../../../../context/UserContext';

const Comment = ({ post, setPost }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const boardId = queryParams.get('boardId');
    
    const { user } = useUser();
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]); // 댓글 목록 상태
    const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
    const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수
    const [currentPageGroup, setCurrentPageGroup] = useState(0); // 페이지 그룹 상태
    const [sortOrder, setSortOrder] = useState('최신순');
    const [editingCommentId, setEditingCommentId] = useState(null); 
    const [editedContent, setEditedContent] = useState(''); 
    const [editedComments, setEditedComments] = useState(new Set()); // 수정된 댓글 ID를 저장

    const pageSize = 5;
    const pageGroupSize = 5;
    const maxCharacters = 250;
    
    // 댓글 목록 요청
    const getComments = (page) => {
        
        const sortParam = sortOrder === '최신순' ? 'latest' : 'registered';
        // 서버로 보낼 페이지를 +1 처리
        const serverPage = page + 1;

        apiClient.get(`/v1/comment/${boardId}/comments?sort=${sortParam}&page=${page}&size=${pageSize}`)
            .then((response) => {
                console.log(response.data.data);
                setComments(response.data.data.comments); // 댓글 목록 설정
                setTotalPages(response.data.data.pageInfo.totalPages); // 총 페이지 수 설정
            })
            .catch((error) => {
                console.error('Error fetching comments:', error);
            });
    };

    useEffect(() => {
        getComments(currentPage, sortOrder);
    }, [currentPage, sortOrder]);

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };
   
    //댓글 작성 post 요청
    const handleRegisterClick = async () => {
        
        const accessToken = localStorage.getItem('accessToken');
        
        if (!accessToken) {
            alert('로그인이 필요합니다.');
            navigate('/login');
            return;
        }

        if (!comment.trim()) {
            alert('댓글을 입력해주세요.');
            return;
        }

        const data = {
            content: comment,
        };

        try {
           
            await apiClient.post(`/v1/comment/${boardId}`, data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            
            setComment(''); // 댓글 전송 후 입력창 초기화

           // 최신순으로 첫 번째 페이지를 보도록 설정
            setSortOrder('최신순'); 
            setCurrentPage(0);
            getComments(0, '최신순'); // 최신순 첫 페이지로 목록 갱신
        
            // 댓글 작성 후 댓글 개수 업데이트
            setPost((prevPost) => ({
                ...prevPost,
                commentCount: prevPost.commentCount + 1,
            }));
        
        } catch (error) {
            console.error('Error posting comment:', error);
            alert('댓글 작성에 실패했습니다.');
        }
    };

    //댓글 수정 버튼 클릭 시
    const handleEditClick = (commentId, currentContent) => {
        setEditingCommentId(commentId);
        setEditedContent(currentContent);
    };

    //댓글 수정 요청
    const handleSaveClick = async (commentId) => {
        const accessToken = localStorage.getItem('accessToken');
        try {
            const response=await apiClient.patch(`/v1/comment/${commentId}`, 
                { content: editedContent, edited: true }, 
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            console.log(response);
            setEditingCommentId(null);
            setComments((prevComments) =>
                prevComments.map((comment) =>
                    comment.commentId === commentId
                        ? { ...comment, content: editedContent, edited: true }
                        : comment
                )
            );
            setEditedComments((prevEdited) => new Set(prevEdited).add(commentId)); 
        } catch (error) {
            console.error('Error updating comment:', error);
            alert('댓글 수정에 실패했습니다.');
        }
    };

    //댓글 수정 취소 버튼 클릭 시
    const handleCancelClick = () => {
        setEditingCommentId(null);
        setEditedContent('');
    };

    // EditInput의 높이를 입력 내용에 맞춰 자동으로 조정하는 함수
    const handleTextareaResize = (e) => {
        e.target.style.height = 'auto'; // 기존 높이를 초기화
        e.target.style.height = `${e.target.scrollHeight}px`; // 내용에 맞게 높이 설정
    };

    //댓글 삭제
    const handleDeleteClick = async (commentId) => {
        const accessToken = localStorage.getItem('accessToken');
        try {
            await apiClient.delete(`/v1/comment/${commentId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            getComments(currentPage); 

             // 댓글 삭제 후 댓글 개수 업데이트
             setPost((prevPost) => ({
                ...prevPost,
                commentCount: prevPost.commentCount - 1,
            }));

        } catch (error) {
            console.error('Error deleting comment:', error);
            alert('댓글 삭제에 실패했습니다.');
        }
    };

    // 페이지 그룹 변경
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleNextPageGroup = () => {
        if ((currentPageGroup + 1) * pageGroupSize < totalPages) {
            setCurrentPageGroup(currentPageGroup + 1);
            setCurrentPage((currentPageGroup + 1) * pageGroupSize); // 다음 그룹의 첫 페이지로 이동
        }
    };

    const handlePrevPageGroup = () => {
        if (currentPageGroup > 0) {
            setCurrentPageGroup(currentPageGroup - 1);
            setCurrentPage((currentPageGroup - 1) * pageGroupSize); // 이전 그룹의 첫 페이지로 이동
        }
    };

    const startPage = currentPageGroup * pageGroupSize;
    const endPage = Math.min(startPage + pageGroupSize, totalPages);

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => (prevOrder === '등록순' ? '최신순' : '등록순'));
        setCurrentPage(0); // 정렬 변경 시 첫 페이지로 이동
    };
    return (
        <>  
            <S.Background1>
            {user ? (
                <>
                    <S.Profile>
                        <span><img src={user.profileImageUrl} alt="프로필 이미지"/> </span>
                        <S.Username>{user.nickname}</S.Username>
                    </S.Profile>
                    
                    <S.CommentInput
                        value={comment}
                        onChange={handleCommentChange}
                        placeholder="댓글을 작성하세요"
                        maxLength={maxCharacters}
                    />

                    <S.CommentFooter>
                        <S.CharacterCount>{`${comment.length}/${maxCharacters}`}</S.CharacterCount>
                        <S.RegisterButton onClick={handleRegisterClick}>등록</S.RegisterButton>
                    </S.CommentFooter>
                </>
            ) : (
                <div>로그인 후 댓글을 작성해보세요!</div>
            )}
        </S.Background1>
            
            <S.Background2>
                <S.CommentToggle>
                    <div onClick={toggleSortOrder} style={{ cursor: 'pointer', color: sortOrder === '등록순' ? '#717171' : 'black' }}>최신순</div>
                    <div onClick={toggleSortOrder} style={{ cursor: 'pointer', color: sortOrder === '최신순' ? '#717171' : 'black' }}>등록순</div>
                </S.CommentToggle>
                
                <S.CommentContainer>
                    {comments.map((comment) => (
                    <S.Comment key={comment.id}>
                        <span>
                            <img src={comment.profileImageUrl } alt="프로필" />
                        </span>
                        <div style={{ flex: 1 }}>
                            <S.Username>{comment.nickname}</S.Username>
                            
                            {editingCommentId === comment.commentId ? (
                                <S.EditInput 
                                value={editedContent} 
                                onChange={(e) => {
                                    if (e.target.value.length <= 250) {
                                        setEditedContent(e.target.value);
                                        handleTextareaResize(e);
                                    }
                                }} 
                                />
                            ) : (
                                <S.CommentContent>
                                    {comment.content}
                                    {/* {editedComments.has(comment.commentId) && (
                                            <span style={{ marginLeft: '10px', color: '#717171' }}>(수정됨)</span>
                                        )} */}
                                </S.CommentContent>
                            )}

                            <S.CommentTime>
                                {new Date(new Date(comment.createdAt).getTime() + 9 * 60 * 60 * 1000).toLocaleString('ko-KR')}
                                
                            </S.CommentTime>
                        </div>

                        {comment.userId === user?.userId && (
                            <S.ButtonContainer>
                                {editingCommentId === comment.commentId ? (
                                    <>
                                        <S.Button onClick={() => handleSaveClick(comment.commentId)}>저장</S.Button>
                                        <S.Button onClick={handleCancelClick}>취소</S.Button>
                                    </>
                                ) : (
                                    <>
                                        <S.Button onClick={() => handleEditClick(comment.commentId, comment.content)}>수정</S.Button>
                                        <S.Button onClick={() => handleDeleteClick(comment.commentId)}>삭제</S.Button>
                                    </>
                                )}
                            </S.ButtonContainer>
                        )}

                    </S.Comment>
                    ))}
                </S.CommentContainer>

                {/* 페이지네이션 영역 */}
                {comments.length >0 ?(
                <S.PaginationContainer>
                    <S.PageButton onClick={handlePrevPageGroup} disabled={currentPageGroup === 0}>
                        &lt;
                    </S.PageButton>
                    {Array.from({ length: endPage - startPage }, (_, index) => (
                        <S.PageButton
                            key={index}
                            onClick={() => handlePageChange(startPage + index)}
                            isActive={currentPage === startPage + index} // 활성 페이지 스타일 적용
                        >
                            {startPage + index + 1}
                        </S.PageButton>
                    ))}
                    <S.PageButton onClick={handleNextPageGroup} disabled={endPage >= totalPages}>
                        &gt;
                    </S.PageButton>
                </S.PaginationContainer>
                ):(<S.EmptyMessage>첫 번째 댓글을 남겨보세요!</S.EmptyMessage>)
                }

            </S.Background2>
        </>
    );
};

export default Comment;