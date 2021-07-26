import styled from 'styled-components';
import { primaryFontStyles, secondaryFontStyles } from '../shared/Typography';
import { headingSmall, headingMediumSmall } from '../shared/Headings';

export const Info = styled.article`
    background-color: ${({ theme }) => theme.colors.bgView};
    transition: background-color 400ms ease-in-out;
    border-radius: 8px;
    box-shadow: 0 10px 10px -10px ${({ theme }) => theme.colors.bgViewShadow};
`;

export const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'key .' 'senderAddress .' 'createdDate clientInfo' 'paymentDue clientInfo' 'email email';
    gap: 30px;
    padding: 24px;
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
