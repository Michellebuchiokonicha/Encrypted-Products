import React from 'react';
import Features from './components/Features';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {ChakraProvider, Container, Box } from '@chakra-ui/react'

import theme from './components/theme'

function App() {
  return (
    <div>
    <ChakraProvider theme={theme}> 
      <Container maxW={[ "full", "full"]} p={0}>
        <Router>
          <Nav />
          <Box>
            <Routes>
              <Route path='/' element={<Features />} />
            </Routes>
          </Box>
          <Footer />
        </Router>
      </Container>
    </ChakraProvider>
    </div>
  );
}

export default App;
