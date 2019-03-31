import styled from 'styled-components';

const Wrapper = styled.p`
  max-width: ${(props) => props.isWide ? '1200px' : '950px'};
  margin: auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3rem auto;
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
  @media (min-width: 1024px) {
    margin: 4rem auto;
    padding: 0;
  }
`;
export default Wrapper;
