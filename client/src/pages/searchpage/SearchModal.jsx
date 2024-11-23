// SearchModal.jsx
import React, { useState } from 'react';
import { Modal, Box, IconButton, TextField, Button, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAladinSearch } from '../../hooks/Aladin/useAladinSearch';

const SearchModal = ({ open, handleClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchResults, isLoading, error, handleSearch } = useAladinSearch();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxHeight: '90vh',
    overflow: 'auto',
    borderRadius: 2,
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      await handleSearch(searchTerm);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="search-modal"
      aria-describedby="search-modal-description"
    >
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Search Form */}
        <Box component="form" onSubmit={onSubmit} sx={{ mb: 3 }}>
          <TextField
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for books..."
            sx={{ mb: 2 }}
          />
          <Button 
            variant="contained" 
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : 'Search'}
          </Button>
        </Box>

        {/* Error Message */}
        {error && (
          <Box sx={{ color: 'error.main', mb: 2, textAlign: 'center' }}>
            {error}
          </Box>
        )}

        {/* Search Results */}
        <Box sx={{ mt: 2 }}>
          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress />
            </Box>
          ) : (
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: 2 
            }}>
              {searchResults.map((book) => (
                <Box
                  key={book.isbn}
                  sx={{
                    p: 2,
                    border: '1px solid #ddd',
                    borderRadius: 1,
                    '&:hover': {
                      boxShadow: 2,
                    }
                  }}
                >
                  {book.cover && (
                    <img 
                      src={book.cover} 
                      alt={book.title}
                      style={{ width: '100%', height: 'auto', marginBottom: '8px' }}
                    />
                  )}
                  <h3 style={{ margin: '8px 0', fontSize: '1rem' }}>{book.title}</h3>
                  <p style={{ margin: '4px 0', color: '#666' }}>{book.author}</p>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default SearchModal;
