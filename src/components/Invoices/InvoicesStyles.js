import styled from 'styled-components';
import plusIcon from '../../assets/images/icon-plus.svg';
import { primaryFontStyles } from '../shared/Typography';
import { HeadingTitle } from '../shared/Headings';

export const Container = styled.div`
    padding: 0 24px;

    @media (min-width: 1024px) {
        width: 100%;
        max-width: 730px;
        margin: 0 auto;
        padding: 0;
    }
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 18px;
    align-items: center;
    margin: 32px 0;

    @media (min-width: 1024px) {
        margin: 72px 0;
    }
`;

export const Info = styled.div``;

export const Title = styled.h1`
    ${HeadingTitle}
    margin-bottom: 4px;
`;

export const Text = styled.p`
    ${primaryFontStyles}
    color: ${({ theme }) => theme.colors.textTertiary};
    transition: color 400ms ease-in;
`;

export const NewInvoice = styled.button`
    ${primaryFontStyles}
    position: relative;
    background-color: ${({ theme }) => theme.colors.btnPrimary};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    padding: 15px 14px 14px 45px;
    border: none;
    border-radius: 24px;

    &::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 6px;
        width: 32px;
        height: 32px;
        background-color: ${({ theme }) => theme.colors.white};
        background-image: url('${plusIcon}');
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 50%;
        transform: translateY(-50%);
    }
`;
