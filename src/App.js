import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Presentation from './components/pages/Presentation';
import Calendar from './components/pages/Calendar';
import Contact from './components/pages/Contact';
import Instruments from './components/pages/Instruments';
import Consortium from './components/pages/Consortium';
import Data from './components/pages/Data';
import ScrollToTop from './components/ScrollToTop';
import Article from './components/pages/Article';
import Footer from './components/Footer';
import NotFound from './components/pages/NotFound';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Team from './components/pages/Team';

const theme = createTheme({
  typography: {
    h2: {
      fontFamily: 'grifterbold',
    }
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="main">
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path="/article/:id" element={<Article />} />
              <Route path='/presentation' exact element={<Presentation />} />
              <Route path='/calendar' exact element={<Calendar />} />
              <Route path='/contact' exact element={<Contact />} />
              <Route path='/instruments' exact element={<Instruments />} />
              <Route path='/consortium' exact element={<Consortium />} />
              <Route path='/data' exact element={<Data />} />
              {/* <Route path='/team' exact element={<Team />} /> */}
              <Route path='*' exact element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
