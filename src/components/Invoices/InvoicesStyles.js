import styled from 'styled-components';
import { motion } from 'framer-motion';
import { headingTitle } from '../../utilities/typographyStyles';

export const Container = styled.section`
    padding: 0 24px;
    margin-bottom: 40px;

    @media (min-width: 768px) {
        width: 100%;
        max-width: 730px;
        margin: 0 auto 40px auto;
        padding: 0;
    }
`;

export const Header = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 18px;
    align-items: center;
    margin: 32px 0;

    @media (min-width: 768px) {
        gap: 40px;
    }

    @media (min-width: 1024px) {
        margin: 72px 0 64px 0;
    }
`;

export const Info = styled.div``;

export const Title = styled.h1`
    ${headingTitle}
    margin-bottom: 4px;
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.textTertiary};
    transition: color 400ms ease-in;
`;
