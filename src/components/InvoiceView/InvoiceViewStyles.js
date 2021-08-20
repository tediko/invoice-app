import styled, { keyframes } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { buttonDefault } from '../shared/Button/ButtonStyles';
import { primaryFontStyles } from '../../utilities/typographyStyles';

const pulseAnimation = keyframes`
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-5px);
    }
    100% {
        transform: translateX(0px);
    }
`;

export const StyledInvoiceView = styled.div`
    max-width: 730px;
    width: 100%;
    margin: 32px auto 0 auto;

    @media (min-width: 768px) {
        margin: 48px auto;
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

export const Link = styled(RouterLink)`
    ${buttonDefault}
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 0;
    margin-bottom: 32px;
    line-height: 1;
    max-width: max-content;

    & svg {
        transition: transform 350ms ease-in-out;
    }

    @media (min-width: 768px) {
        &:hover {
            color: ${({ theme }) => theme.colors.blueGrayish};
            & svg {
                animation: ${pulseAnimation} 2s ease infinite;
            }
        }
    }
`;

export const MotionLink = motion(Link);

export const Controller = styled(motion.div)`
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
