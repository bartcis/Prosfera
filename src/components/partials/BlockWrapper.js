import styled from 'styled-components';

const BlockWrapper = styled.div`
    max-width: 950px;
    margin: auto;
    text-align: center;
    margin: 150px auto 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 1rem;
    @media (min-width: 768px) {
        margin: 200px auto 100px;
        padding: 0 2rem;

    }
`;

export default BlockWrapper;