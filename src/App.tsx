import React, {Suspense, useState} from 'react';

import {Provider} from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ThemeProvider, createTheme, ThemeOptions} from '@mui/material/styles';

import MainLayout from './components/MainLayout/MainLayout';

import MainPage from './pages/main/main.page';

import store from './redux/store';

export const MyContext = React.createContext('');

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000000',
    },
    error: {
      main: '#f8475f',
    }
  },
  typography: {
    fontFamily: [
      'Circular Std-Bold',
      'Circular Std-Medium'
    ].join(',')
  }
};

const theme = createTheme(themeOptions);

function App() {
  const [valueToShare, setValueToShare] = useState('value to be shared 1');

  return (
    <React.StrictMode>
      <MyContext.Provider value={valueToShare}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>Cargando...</div>}>
            <Provider store={store}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<MainLayout/>}>
                    <Route index element={<MainPage/>} />  
                  </Route>
                </Routes>
              </BrowserRouter>
            </Provider>
          </Suspense>
        </ThemeProvider>
      </MyContext.Provider>
      
    </React.StrictMode>
  );
}

export default App;
