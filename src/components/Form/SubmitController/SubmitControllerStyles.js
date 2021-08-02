import styled from 'styled-components';

export const StyledSubmitController = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: end;
    gap: 7px;
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.bgForm};
    z-index: 3;

    & > :first-child {
        margin-right: auto;
    }

    @media (min-width: 768px) {
        padding: 32px 56px;
        border-radius: 20px 20px 0 0;
    }

    @media (min-width: 1024px) {
        padding: 32px 56px 32px 159px;
    }
`;
