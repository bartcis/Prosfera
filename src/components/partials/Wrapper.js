import styled from 'styled-components';

const Wrapper = styled.p`
    max-width: 950px;
    margin: auto;
    text-align: center;
    margin: 25px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (min-width: 600px) {
        margin: 6% auto;
    }
`;

export default Wrapper;