import styled from 'styled-components';

const Wrapper = styled.p`
  max-width: ${(props) => props.isWide ? '1200px' : '950px'};
  margin: auto;
  text-align: center;
  margin: 25px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 768px) {
    margin: 2% auto;
    padding: 0 2rem;
  }
  @media (min-width: 1024px) {
    margin: 6% auto;
    padding: 0;
  }
`;

export default Wrapper;