import React from 'react';
import styled from 'styled-components';
import ImageGrid from './components/ImageGrid';
import GlobalStyles from './styles/GlobalStyles';

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const App: React.FC = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <ImageGrid />
    </AppWrapper>
  );
};

export default App;
