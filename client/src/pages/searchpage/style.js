import styled from 'styled-components';

import theme from '../../global/theme';
import { b1, b2, b3, b4, flexCenter, flexCenterColumn, h1, h2, h3 } from '../../global/common';
import { Box, IconButton, TextField, Button } from '@mui/material';

const S = {};

S.ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 800px;
  background-color: #ffffff;
  box-shadow: 24;
  padding: 16px;
  max-height: 90vh;
  overflow: auto;
  border-radius: 8px;
`;

S.CloseButton = styled(IconButton)`
  position: absolute;
  right: 8px;
  top: 8px;
`;

S.SearchForm = styled(Box)`
  margin-bottom: 24px;
`;

S.SearchInput = styled(TextField)`
  margin-bottom: 16px;
`;

S.SearchButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.ErrorMessage = styled(Box)`
  color: #f44336;
  margin-bottom: 16px;
  text-align: center;
`;

S.SearchResults = styled(Box)`
  margin-top: 16px;
`;

S.ResultGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

S.ResultCard = styled(Box)`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  &:hover {
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
  }
`;

S.ResultImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 8px;
`;

S.ResultTitle = styled.h3`
  margin: 8px 0;
  font-size: 1rem;
`;

S.ResultAuthor = styled.p`
  margin: 4px 0;
  color: #666;
`;

export default S;

