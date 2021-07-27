import styled from 'styled-components';
import { buttonDefault } from '../shared/Button/ButtonStyles';
import { primaryFontStyles } from '../shared/Typography';

export const StyledInvoiceView = styled.div`
    max-width: 730px;
    width: 100%;
    margin: 32px auto 0 auto;

    @media (min-width: 768px) {
        margin: 32px auto;
    }

    @media (min-width: 1024px) {
        margin: 64px auto;
    }
`;

export const Container = styled.div`
    padding: 0 24px;

    @media (min-width: 768px) {
        padding: 0;
    }
`;

export const Link = styled.a`
    ${buttonDefault}
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 0;
    margin-bottom: 32px;
    line-height: 1;
`;

export const Controller = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bgView};
    padding: 24px 24px;
    margin-bottom: clamp(16px, 3.5vw, 24px);
    border-radius: 8px;
    box-shadow: 0 10px 10px -10px ${({ theme }) => theme.colors.bgViewShadow};
    transition: background-color 400ms ease-in-out;

    @media (min-width: 768px) {
        padding: 20px 24px;
        gap: 16px;
    }
`;

export const Text = styled.p`
    ${primaryFontStyles}
    color: ${({ theme }) => theme.colors.textTertiary};
    transition: color 400ms ease-in-out;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 22px 0;
    margin-top: 56px;
    background-color: ${({ theme }) => theme.colors.bgView};
    transition: background-color 400ms ease-in-out;

    @media (min-width: 768px) {
        margin-top: unset;
        margin-left: auto;
        padding: unset;
    }
`;
