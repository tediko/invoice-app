import styled, { css } from 'styled-components';
import { headingSmall, headingMedium } from '../../shared/Headings';

export const StyledList = styled.ul`
    display: flex;
    flex-flow: column;
    gap: 16px;
`;

export const Item = styled.li`
    background-color: ${({ theme }) => theme.colors.bgInvoiceItem};
    border-radius: 8px;
    box-shadow: 0 10px 10px -10px ${({ theme }) => theme.colors.bgInvoiceItemShadow};
    transition: background-color 400ms ease-in-out;
`;

export const Link = styled.a`
    display: grid;
    grid-template-rows: 1.5fr 1fr 1fr;
    grid-template-areas: 'uid clientname' 'paymentdue status' 'totalprice status';
    justify-content: space-between;
    padding: 24px;
    border: 1px solid transparent;
    border-radius: 8px;
    transition: border 350ms ease-in-out;

    @media (min-width: 768px) {
        grid-template-rows: unset;
        grid-template-areas: unset;
        grid-template-columns: 103px 151px 145px 103px 146px 28px;
        align-items: center;
        padding: 15px 20px 15px 32px;

        &:hover {
            border: 1px solid ${({ theme }) => theme.colors.purple};
        }

        svg {
            margin-left: auto;
        }
    }
`;

export const Uid = styled.p`
    ${headingSmall}
    grid-area: uid;

    @media (min-width: 768px) {
        grid-area: unset;
    }
`;

export const Hashtag = styled.span`
    color: ${({ theme }) => theme.colors.blueGrayish};
`;

export const PaymentDue = styled.p`
    grid-area: paymentdue;
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color 400ms ease-in-out;

    @media (min-width: 768px) {
        grid-area: unset;
    }
`;

export const ClientName = styled.p`
    grid-area: clientname;
    justify-self: end;
    color: ${({ theme }) => theme.colors.textTertiary};
    transition: color 400ms ease-in-out;

    @media (min-width: 768px) {
        grid-area: unset;
        justify-self: start;
    }
`;

export const TotalPrice = styled.p`
    ${headingMedium}
    grid-area: totalprice;

    @media (min-width: 768px) {
        grid-area: unset;
        justify-self: end;
    }
`;
