import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import {
    primaryFontStyles,
    secondaryFontStyles,
    headingSmall,
    headingMediumSmall,
    headingLargeSmall,
} from '../../utilities/typographyStyles';

export const StyledInvoiceInfo = styled(motion.article)`
    background-color: ${({ theme }) => theme.colors.bgView};
    transition: background-color 400ms ease-in-out;
    border-radius: 8px;
    box-shadow: 0 10px 10px -10px ${({ theme }) => theme.colors.bgViewShadow};
    padding: clamp(24px, 4vw, 48px);
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'key .' 'senderAddress .' 'createdDate clientInfo' 'paymentDue clientInfo' 'email email';
    gap: 30px;
    margin-bottom: 40px;

    @media (min-width: 600px) {
        grid-template-columns: auto auto auto;
        grid-template-areas: 'key . senderAddress' 'createdDate clientInfo email' 'paymentDue clientInfo email';
        gap: 20px;
    }
`;

export const Key = styled.div`
    grid-area: key;
    display: flex;
    flex-flow: column;
    gap: 8px;
`;

export const Uid = styled.h3`
    ${headingSmall}
`;

export const Hashtag = styled.span`
    color: ${({ theme }) => theme.colors.textTertiary};
    transition: color 400ms ease-in-out;
`;

export const DescWrapper = styled.div`
    display: flex;
    flex-flow: column;
    gap: 12px;
`;

export const CreatedDate = styled(DescWrapper)`
    grid-area: createdDate;
`;

export const PaymentDue = styled(DescWrapper)`
    grid-area: paymentDue;
    align-self: end;
`;

export const ClientInfo = styled(DescWrapper)`
    grid-area: clientInfo;
`;

export const Email = styled(DescWrapper)`
    grid-area: email;
`;

export const Heading = styled.h4`
    ${primaryFontStyles}
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color 400ms ease-in-out;
`;

export const Text = styled.p`
    ${headingMediumSmall}
`;

export const Address = styled.address`
    ${secondaryFontStyles}
    display: flex;
    flex-flow: column;
    font-style: unset;
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color 400ms ease-in-out;
`;

export const SenderAddress = styled(Address)`
    grid-area: senderAddress;

    @media (min-width: 600px) {
        justify-self: end;
        text-align: right;
    }
`;

export const ClientAddress = styled(Address)``;

export const Summary = styled.div`
    background-color: ${({ theme }) => theme.colors.bgViewSummary};
    transition: background-color 400ms ease-in-out;
    border-radius: 8px 8px 0 0;
`;

export const SummaryContainer = styled.div`
    display: flex;
    flex-flow: column;
    gap: 24px;
    padding: 24px;
`;

export const SummaryHead = styled.div`
    display: grid;
    grid-template-columns:
        minmax(200px, 270px) minmax(40px, 80px) minmax(40px, 100px)
        1fr;
`;

export const SummaryItem = styled.div`
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

export const SummaryHeading = styled.h5`
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

export const SummaryText = styled.p`
    ${primaryFontStyles}
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: color 400ms ease-in-out;
`;

export const ItemName = styled(SummaryText)`
    grid-area: name;
`;

export const ItemQty = styled(SummaryText)`
    grid-area: qty;
    color: ${({ theme }) => theme.colors.textSecondary};

    @media (min-width: 768px) {
        justify-self: center;
    }
`;

export const ItemPrice = styled(SummaryText)`
    grid-area: price;
    color: ${({ theme }) => theme.colors.textSecondary};

    @media (min-width: 768px) {
        justify-self: end;
    }
`;

export const ItemTotal = styled(SummaryText)`
    grid-area: total;

    @media (min-width: 768px) {
        justify-self: end;
    }
`;

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bgViewSummaryFooter};
    transition: background-color 400ms ease-in-out;
    border-radius: 0 0 8px 8px;
    padding: 14px 32px;
`;

export const TotalHeading = styled.h5`
    ${secondaryFontStyles}
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
`;

export const TotalText = styled.p`
    ${headingLargeSmall}
    color: ${({ theme }) => theme.colors.white};
`;
