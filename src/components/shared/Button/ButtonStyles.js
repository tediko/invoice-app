import styled, { css } from 'styled-components';
import { primaryFontStyles } from '../../../utilities/typographyStyles';
import plusIcon from '../../../assets/images/icon-plus.svg';

export const buttonDefault = css`
    ${primaryFontStyles}
    padding: 17px 24px 16px 24px;
    font-weight: 700;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
    border: none;
    border-radius: 24px;
    cursor: pointer;
    transition: background-color 300ms ease-in-out, color 400ms ease-in-out;

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: 2px dashed ${({ theme }) => theme.colors.purple};
        outline-offset: 3px;
    }

    ${({ $small }) =>
        $small &&
        css`
            padding: 17px 16px 16px 16px;

            @media (min-width: 768px) {
                padding: 17px 24px 16px 24px;
            }
        `}
`;

export const buttonPrimary = css`
    ${buttonDefault}
    background-color: ${({ theme }) => theme.colors.btnPrimary};
    color: ${({ theme }) => theme.colors.white};

    @media (min-width: 768px) {
        &:hover {
            background-color: ${({ theme }) => theme.colors.btnPrimaryHover};
        }
    }
`;

export const buttonSecondary = css`
    ${buttonDefault}
    background-color: ${({ theme }) => theme.colors.btnSecondary};
    color: ${({ theme }) => theme.colors.textSecondary};

    @media (min-width: 768px) {
        &:hover {
            background-color: ${({ theme }) => theme.colors.btnSecondaryHover};
        }
    }
`;

export const buttonDelete = css`
    ${buttonDefault}
    background-color: ${({ theme }) => theme.colors.btnDelete};
    color: ${({ theme }) => theme.colors.white};

    @media (min-width: 768px) {
        &:hover {
            background-color: ${({ theme }) => theme.colors.btnDeleteHover};
        }
    }
`;

export const buttonSave = css`
    ${buttonDefault}
    background-color: ${({ theme }) => theme.colors.btnSave};
    color: ${({ theme }) => theme.colors.textTertiary};

    @media (min-width: 768px) {
        &:hover {
            background-color: ${({ theme }) => theme.colors.btnSaveHover};
        }
    }
`;

const buttonNewInvoice = css`
    ${buttonPrimary}
    position: relative;
    padding: 15px 15px 14px 46px;

    &::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 6px;
        width: 32px;
        height: 32px;
        background-color: ${({ theme }) => theme.colors.white};
        background-image: url('${plusIcon}');
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 50%;
        transform: translateY(-50%);

        @media (min-width: 768px) {
            left: 8px;
        }
    }

    @media (min-width: 768px) {
        padding: 17px 15px 16px 58px;
    }
`;

export const StyledButton = styled.button`
    ${({ $newInvoice }) =>
        $newInvoice &&
        css`
            ${buttonNewInvoice}
        `};

    ${({ $primary }) =>
        $primary &&
        css`
            ${buttonPrimary}
        `};

    ${({ $secondary }) =>
        $secondary &&
        css`
            ${buttonSecondary}
        `};

    ${({ $delete }) =>
        $delete &&
        css`
            ${buttonDelete}
        `};

    ${({ $save }) =>
        $save &&
        css`
            ${buttonSave}
        `};
`;
