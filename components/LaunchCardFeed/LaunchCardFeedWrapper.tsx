import styled from 'styled-components';

const LaunchCardFeedWrapper = styled.a`
  border: 0.0625rem solid #d1dae2;
  cursor: pointer;
  display: block;
  height: 12.5rem;
  padding: 1rem;
  width: 37.5rem;
  position: relative;
  margin-bottom: 1rem;
  &:hover {
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.2);
  }
  p{ 
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    height: 3.4375rem;
    overflow: hidden;
  }
  time{
    bottom: 1rem;
    position: absolute;
    right: 1rem;
  }
`;

export default LaunchCardFeedWrapper;
