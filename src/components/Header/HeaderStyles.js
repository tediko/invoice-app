import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/image-avatar.jpg';

export const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr auto auto;
    background-color: ${({ theme }) => theme.colors.bgHeader};
    height: clamp(72px, 10.5vw, 80px);
    transition: background-color 400s ease-in-out;

    @media (min-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto auto;
        height: 100vh;
        width: 103px;
        border-radius: 0 20px 20px 0;
    }
`;

export const Logo = styled.a`
    position: relative;
    background-color: ${({ theme }) => theme.colors.purple};
    width: clamp(72px, 10.5vw, 80px);
    height: 100%;
    border-radius: 0 20px 20px 0;
    cursor: pointer;
    overflow: hidden;

    @media (min-width: 1024px) {
        width: 100%;
        height: 103px;
    }

    &::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.colors.purpleLight};
        border-radius: 20px 0;
    }

    &::after {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        width: 28px;
        height: 28px;
        background-image: url('${logo}');
        background-repeat: no-repeat;
        background-size: contain;
        transform: translate(-50%, -50%);

        @media (min-width: 768px) {
            width: 31px;
            height: 31px;
        }

        @media (min-width: 1024px) {
            width: 40px;
            height: 40px;
        }
    }
`;

export const ThemeToggle = styled.button`
    background-color: transparent;
    border: none;
    padding: 0 clamp(24px, 4.5vw, 32px);
    cursor: pointer;

    @media (min-width: 768px) {
        &:hover svg {
            color: ${({ theme }) => theme.colors.btnThemeHover};
            transition: color 300ms ease-in;
        }
    }

    @media (min-width: 1024px) {
        padding: 32px 0;
    }
`;

export const Profile = styled.div`
    position: relative;
    width: 80px;
    width: clamp(80px, 12.5vw, 96px);
    border-left: 1px solid ${({ theme }) => theme.colors.grayLight};

    @media (min-width: 1024px) {
        height: 88px;
        width: 100%;
        border-left: unset;
        border-top: 1px solid ${({ theme }) => theme.colors.grayLight};
    }

    &::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        width: 32px;
        height: 32px;
        background-image: url('${avatar}');
        background-position: center;
        background-size: cover;
        border-radius: 50%;
        transform: translate(-50%, -50%);

        @media (min-width: 1024px) {
            width: 40px;
            height: 40px;
        }
    }
`;
