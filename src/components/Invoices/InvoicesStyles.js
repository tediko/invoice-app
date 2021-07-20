import styled from 'styled-components';
import plusIcon from '../../assets/images/icon-plus.svg';

export const Container = styled.div`
    padding: 0 24px;
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 18px;
    align-items: center;
    margin-top: 32px;
`;

export const Info = styled.div``;

export const Title = styled.h1`
    font-size: 1.25rem;
    letter-spacing: -0.04rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 4px;
    transition: color 400ms ease-in;
`;

export const Text = styled.p`
    font-size: 0.75rem;
    letter-spacing: 0.016rem;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.textTertiary};
    transition: color 400ms ease-in;
`;

export const NewInvoice = styled.button`
    position: relative;
    background-color: ${({ theme }) => theme.colors.btnPrimary};
    color: ${({ theme }) => theme.colors.white};
    padding: 15px 14px 14px 45px;
    border: none;
    border-radius: 24px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.016rem;
    line-height: 1.25;

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
