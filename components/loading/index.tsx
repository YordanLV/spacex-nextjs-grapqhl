import styled from 'styled-components';

import LoadingBar from './loading.svg';

const LoadingWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingBar />
    </LoadingWrapper>
  )
}

export default Loading;
