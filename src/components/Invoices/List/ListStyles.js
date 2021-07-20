import styled, { css } from 'styled-components';
import { HeadingSmall, HeadingMedium } from '../../shared/Headings';

export const StyledList = styled.ul`
    display: flex;
    flex-flow: column;
    gap: 16px;
`;

export const Item = styled.li`
    background-color: ${({ theme }) => theme.colors.bgInvoiceItem};
    border-radius: 8px;
    transition: background-color 400ms ease-in-out;
`;

export const Link = styled.a`
    display: grid;
    grid-template-rows: 1.5fr 1fr 1fr;
    grid-template-areas: 'uid clientname' 'paymentdue status' 'totalprice status';
    justify-content: space-between;
    padding: 24px;
`;

export const Uid = styled.p`
    ${HeadingSmall}
    grid-area: uid;
`;

export const Hashtag = styled.span`
    color: ${({ theme }) => theme.colors.blueGrayish};
`;

export const PaymentDue = styled.p`
    grid-area: paymentdue;
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color 400ms ease-in-out;
`;

export const ClientName = styled.p`
    grid-area: clientname;
    justify-self: end;
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color 400ms ease-in-out;
`;

export const TotalPrice = styled.p`
    ${HeadingMedium}
    grid-area: totalprice;
`;

export const Status = styled.div`
    grid-area: status;
    align-self: center;
    justify-self: center;
    width: 104px;
    padding: 13px 0;
    font-weight: 600;
    text-align: center;
    border-radius: 6px;
    transition: background-color 400ms ease-in-out, color 400ms ease-in-out;

    ${({ $statusType }) =>
        $statusType === 'draft' &&
        css`
            background-color: ${({ theme }) => theme.colors.statusDraftBg};
            color: ${({ theme }) => theme.colors.statusDraft};
        `}

    ${({ $statusType }) =>
        $statusType === 'pending' &&
        css`
            background-color: ${({ theme }) => theme.colors.statusPendingBg};
            color: ${({ theme }) => theme.colors.statusPending};
        `}

    ${({ $statusType }) =>
        $statusType === 'paid' &&
        css`
            background-color: ${({ theme }) => theme.colors.statusPaidBg};
            color: ${({ theme }) => theme.colors.statusPaid};
        `}
`;

export const StatusCircle = styled.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 8px;
    border-radius: 50%;
    transition: background-color 400ms ease-in-out;

    ${({ $statusType }) =>
        $statusType === 'draft' &&
        css`
            background-color: ${({ theme }) => theme.colors.statusDraft};
        `}
    ${({ $statusType }) =>
        $statusType === 'pending' &&
        css`
            background-color: ${({ theme }) => theme.colors.statusPending};
        `}
        ${({ $statusType }) =>
        $statusType === 'paid' &&
        css`
            background-color: ${({ theme }) => theme.colors.statusPaid};
        `};
`;
