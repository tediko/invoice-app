import styled from 'styled-components';
import {
    primaryFontStyles,
    headingLarge,
} from '../../utilities/typographyStyles';
import { motion } from 'framer-motion';

export const StyledModal = styled(motion.div)`
    position: fixed;
    inset: 0 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    background-color: ${({ theme }) => theme.colors.blackAlpha50};
    z-index: 100;
`;

export const Container = styled(motion.div)`
    width: 100%;
    max-width: 480px;
    padding: 32px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.bgDeleteModal};
`;

export const Title = styled.h2`
    ${headingLarge}
`;

export const Text = styled.p`
    ${primaryFontStyles}
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 24px;
    line-height: 1.84;
`;

export const CtaGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`;
