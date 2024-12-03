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
          <S.CloseButton aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </S.CloseButton>

          {/* Search Form */}
          <S.SearchForm component="form" onSubmit={onSubmit}>
            <S.SearchInput
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for books..."
            />
            <S.SearchButton 
              variant="contained" 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={24} /> : 'Search'}
            </S.SearchButton>
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
              <S.ResultGrid>
                {searchResults.map((book) => (
                  <S.ResultCard key={book.isbn} onClick={() => handleBookClick(book)}>
                    {book.cover && (
                      <S.ResultImage 
                        src={book.cover} 
                        alt={book.title}
                      />
                    )}
                    <S.ResultTitle>{book.title}</S.ResultTitle>
                    <S.ResultAuthor>{book.author}</S.ResultAuthor>
                  </S.ResultCard>
                ))}
              </S.ResultGrid>
            )}
          </S.SearchResults>
        </S.ModalBox>
      </Modal>
    </>
  );
};

export default SearchModal;
