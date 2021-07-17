import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/image-avatar.jpg';

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.gray100};
    height: 72px;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    height: 100%;
`;

export const Logo = styled.a`
    position: relative;
    background-color: ${({ theme }) => theme.colors.purple};
    width: 72px;
    height: 100%;
    border-radius: 0 20px 20px 0;
    cursor: pointer;
    overflow: hidden;

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
        content: url('${logo}');
        top: 50%;
        left: 50%;
        width: 28px;
        height: 26px;
        transform: translate(-50%, -50%);
    }
`;

export const ThemeToggle = styled.button`
    background-color: transparent;
    border: none;
    padding: 0 24px;
    cursor: pointer;
`;

export const Profile = styled.div`
    position: relative;
    width: 80px;
    border-left: 1px solid ${({ theme }) => theme.colors.gray200};

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
    }
`;
