import styled, { css } from 'styled-components';
import {
    primaryFontStyles,
    secondaryFontStyles,
} from '../../../utilities/typographyStyles';

export const StyledSummary = styled.div`
    background-color: ${({ theme }) => theme.colors.bgViewSummary};
    transition: background-color 400ms ease-in-out;
    border-radius: 8px 8px 0 0;
`;

export const Container = styled.div`
    display: flex;
    flex-flow: column;
    gap: 24px;
    padding: 24px;
`;

export const Head = styled.div`
    display: grid;
    grid-template-columns:
        minmax(200px, 270px) minmax(40px, 80px) minmax(40px, 100px)
        1fr;
`;

export const Item = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: 'name total' 'qty total';
    gap: 10px;
    align-items: center;

    @media (min-width: 768px) {
        grid-template-columns:
            minmax(200px, 270px) minmax(40px, 80px) minmax(40px, 100px)
            1fr;
        grid-template-areas: 'name qty price total';
        gap: unset;
    }
`;

export const Text = styled.p`
    ${primaryFontStyles}
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: color 400ms ease-in-out;
`;

export const ItemName = styled(Text)`
    grid-area: name;
`;

export const ItemQty = styled(Text)`
    grid-area: qty;
    color: ${({ theme }) => theme.colors.textSecondary};

    @media (min-width: 768px) {
        justify-self: center;
    }
`;

export const ItemPrice = styled(Text)`
    grid-area: price;
    color: ${({ theme }) => theme.colors.textSecondary};

    @media (min-width: 768px) {
        justify-self: end;
    }
`;

export const ItemTotal = styled(Text)`
    grid-area: total;

    @media (min-width: 768px) {
        justify-self: end;
    }
`;

export const Heading = styled.h5`
    ${secondaryFontStyles}
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 400;
    transition: color 400ms ease-in-out;

    ${({ $jsCenter }) =>
        $jsCenter &&
        css`
            justify-self: center;
        `};

    ${({ $jsEnd }) =>
        $jsEnd &&
        css`
            justify-self: end;
        `};
`;
