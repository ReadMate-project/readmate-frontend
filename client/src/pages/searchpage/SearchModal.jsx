import React, { useState } from 'react';
import { Modal, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAladinSearch } from '../../hooks/Aladin/useAladinSearch';
import S from './style';

const SearchModal = ({ onBookSelect }) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { searchResults, isLoading, error, handleSearch } = useAladinSearch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      await handleSearch(searchTerm);
    }
  };

  const handleBookClick = (book) => {
    onBookSelect(book);
    handleClose();
  };

  return (
    <>
      <S.SearchButton onClick={handleOpen}>
        <img src={`${process.env.PUBLIC_URL}/global/images/bookclubpage/AddBooks.png`} alt="Upload" />
      </S.SearchButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="search-modal"
        aria-describedby="search-modal-description"
      >
        <S.ModalBox>
          

          {/* Search Form */}
          <S.SearchForm component="form" onSubmit={onSubmit}>
            <S.SearchInput
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="검색어를 입력해주세요"
            />
            <S.Button className='flexible'
            
              variant="contained" 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={24} /> :
               <img src={`${process.env.PUBLIC_URL}/global/images/searchpage/Icon_ModalSearch.png`} alt="Loading" />}
            </S.Button>
          </S.SearchForm>

          {/* Error Message */}
          {error && (
            <S.ErrorMessage>
              {error}
            </S.ErrorMessage>
          )}

          {/* Search Results */}
          <S.SearchResults>
            {isLoading ? (
              <S.ResultGrid>
                <CircularProgress />
              </S.ResultGrid>
            ) : (
              <S.CardSection className='BookList'>
                {searchResults.map((book) => (
                  <S.HeroSection className='Modal' key={book.isbn} onClick={() => handleBookClick(book)}>
                    
                    <S.ImageContainer>
                    {book.cover && (
                      <S.Image2 src={book.cover} alt={book.title} />
                    )}
                    </S.ImageContainer>

                    <S.HeroContent className='Modal'>
                    
                     <S.ContentTop>
                          
                          <S.ContentTitle className='Modal'>{book.title}</S.ContentTitle>
                                          
                      </S.ContentTop>
                                 
      
                      <S.ContentMiddle className='Modal'>
                      {book.author} 저  |  {book.publisher}  |  {book.pubDate}
                      </S.ContentMiddle>
                            
                      <S.ContentMiddle className='Modal'>
                        정가  {book.priceStandard}원
                      </S.ContentMiddle>
                      
                    </S.HeroContent>

                  </S.HeroSection>
                ))}
              </S.CardSection>
            )}
          </S.SearchResults>
          <S.TitleButtonContainer className='bookList'>
          <S.CloseButton aria-label="close" onClick={handleClose}>
            <img src={`${process.env.PUBLIC_URL}/global/images/searchpage/Close.png`} alt="Close" />
          </S.CloseButton>
          </S.TitleButtonContainer>

        </S.ModalBox>
      </Modal>
    </>
  );
};

export default SearchModal;
