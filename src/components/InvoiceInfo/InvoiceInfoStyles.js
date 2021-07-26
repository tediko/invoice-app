import styled, { css } from 'styled-components';
import { primaryFontStyles, secondaryFontStyles } from '../shared/Typography';
import {
    headingSmall,
    headingMediumSmall,
    headingLargeSmall,
} from '../shared/Headings';

export const Info = styled.article`
    background-color: ${({ theme }) => theme.colors.bgView};
    transition: background-color 400ms ease-in-out;
    border-radius: 8px;
    box-shadow: 0 10px 10px -10px ${({ theme }) => theme.colors.bgViewShadow};
    padding: 24px;
`;

export const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'key .' 'senderAddress .' 'createdDate clientInfo' 'paymentDue clientInfo' 'email email';
    gap: 30px;
    margin-bottom: 40px;
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

export const SummaryItem = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: 'name total' 'qty total';
    gap: 10px;
    align-items: center;
`;

export const SummaryHeading = styled.h5`
    ${primaryFontStyles}
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color 400ms ease-in-out;
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
`;

export const ItemPrice = styled(SummaryText)`
    grid-area: price;
    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ItemTotal = styled(SummaryText)`
    grid-area: total;
`;

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bgViewSummaryFooter};
    transition: background-color 400ms ease-in-out;
    border-radius: 0 0 8px 8px;
    padding: 24px 32px;
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
