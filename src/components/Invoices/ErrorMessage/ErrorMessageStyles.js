import styled from 'styled-components';
import { motion } from 'framer-motion';
import { headingBig } from '../../../utilities/typographyStyles';
import errorImage from '../../../assets/images/illustration-empty.svg';

export const StyledErrorMessage = styled(motion.div)`
    display: flex;
    flex-flow: column;
    text-align: center;
    width: clamp(217px, 32vw, 242px);
    margin: clamp(70px, 10vw, 140px) auto 0 auto;
`;

export const Illustration = styled.div`
    background-image: url('${errorImage}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 200px;
    margin-bottom: clamp(40px, 6vw, 64px);
`;

export const Title = styled.h2`
    ${headingBig}
    margin-bottom: 24px;
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.textTertiary};
    max-width: 220px;
    margin: 0 auto;
    transition: color 400ms ease-in-out;
`;

export const Bold = styled.span`
    font-weight: 700;
`;
