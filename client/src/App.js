import './App.css';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import { UserProvider } from './context/UserContext';
import Router from './routes/router';




function App() {
  return (
    <UserProvider> 
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router/>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
