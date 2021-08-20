import styled, { css } from 'styled-components';

export const StyledSubmitController = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 7px;
    padding: 24px 24px 24px 44px;
    background-color: ${({ theme }) => theme.colors.bgForm};
    z-index: 3;
    transition: background-color 400ms ease-in-out;

    @media (min-width: 480px) {
        justify-content: flex-end;

        ${({ $isEdited }) =>
            !$isEdited &&
            css`
                & > :first-child {
                    margin-right: auto;
                }
            `}
    }

    @media (min-width: 768px) {
        padding: 32px 56px;
        border-radius: 20px 20px 0 0;
    }

    @media (min-width: 1024px) {
        padding: 32px 56px 32px 159px;
    }
`;
