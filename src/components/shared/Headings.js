import styled, { css } from 'styled-components';

const commonStyles = css`
    font-family: 'Spartan', sans-serif;
    font-weight: 600;
`;

export const HeadingTitle = css`
    ${commonStyles}
    font-size: clamp(1.25rem, 5vw, 2rem);
    letter-spacing: -0.04rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: color 400ms ease-in;

    @media (min-width: 768px) {
        letter-spacing: -0.0625rem;
    }
`;

export const HeadingLarge = css`
    ${commonStyles}
`;

export const HeadingBig = css`
    ${commonStyles}
    font-size: 1.25rem;
    letter-spacing: -0.04rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: color 400ms ease-in-out;
`;

export const HeadingMedium = css`
    ${commonStyles}
    font-size: 1rem;
    letter-spacing: -0.05rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: color 400ms ease-in-out;
`;

export const HeadingSmall = css`
    ${commonStyles}
    font-size: 0.75rem;
    letter-spacing: -0.016rem;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: color 400ms ease-in-out;
`;
