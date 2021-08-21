import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { buttonPrimary } from '../shared/Button/ButtonStyles';
import { headingLargeSmall } from '../../utilities/typographyStyles';
import errorImage from '../../assets/images/illustration-page-not-found.svg';

export const StyledRouteError = styled(motion.div)`
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    max-width: 530px;
    margin: 40px auto 40px auto;
    padding: 0 24px;
`;

export const Illustration = styled(motion.div)`
    background-image: url('${errorImage}');
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
    height: 60vw;
    max-height: 360px;
    margin-bottom: 40px;
`;

export const Title = styled(motion.h1)`
    ${headingLargeSmall}
    font-size: 5rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors.purple};
`;

export const Subtitle = styled.h2`
    ${headingLargeSmall}
    margin-bottom: 24px;
    font-size: clamp(1.25rem, 5vw, 1.9rem);
    line-height: 1.5;
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.textTertiary};
    margin-bottom: 24px;
    transition: color 400ms ease-in-out;
`;

export const Link = styled(RouterLink)`
    ${buttonPrimary}
    align-self: center;
    text-transform: uppercase;
    font-weight: 400;
`;
