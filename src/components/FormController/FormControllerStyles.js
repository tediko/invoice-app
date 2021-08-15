import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { buttonDefault } from '../shared/Button/ButtonStyles';

export const StyledFormController = styled.div`
    position: absolute;
    top: clamp(72px, 10.5vw, 80px); /* header height */
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;

    @media (min-width: 768px) {
        background-color: ${({ theme }) => theme.colors.blackAlpha50};
    }

    @media (min-width: 1024px) {
        top: 0;
    }
`;

export const Container = styled.div`
    position: relative;
    background-color: ${({ theme }) => theme.colors.bgForm};
    padding: 32px 24px 190px 24px;
    transition: background-color 400ms ease-in-out;

    &::before {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        right: 0;
        height: 190px;
        background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0) 100%
        );
        z-index: 2;
        pointer-events: none;
    }

    @media (min-width: 768px) {
        max-width: 616px;
        height: 100%;
        border-radius: 0 20px 20px 0;
        overflow: hidden;
        padding: 56px 32px 127px 46px;
    }

    @media (min-width: 1024px) {
        max-width: 719px;
        padding: 56px 32px 100px 149px;
    }
`;

export const Link = styled(RouterLink)`
    ${buttonDefault}
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 0;
    margin-bottom: 32px;
    line-height: 1;
    max-width: max-content;

    @media (min-width: 768px) {
        &:hover {
            color: ${({ theme }) => theme.colors.blueGrayish};
        }
    }
`;
