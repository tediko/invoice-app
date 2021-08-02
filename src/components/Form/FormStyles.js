import styled, { css } from 'styled-components';
import { buttonDefault } from '../shared/Button/ButtonStyles';
import {
    primaryFontStyles,
    headingExtraSmall,
    headingMediumLarge,
    headingLarge,
} from '../../utilities/typographyStyles';

export const defaultInput = css`
    width: 100%;
    padding: 16px 13px 16px 20px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.bgInputBorder};
    background-color: ${({ theme }) => theme.colors.bgInput};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 600;
    transition: border 400ms ease-in-out, background-color 400ms ease-in-out,
        color 400ms ease-in-out;
    -webkit-appearance: none;
`;

export const StyledForm = styled.div`
    position: absolute;
    top: 72px; /* header height */
    left: 0;
    z-index: 10;
`;

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.bgForm};
    padding: 32px 24px;
    transition: background-color 400ms ease-in-out;
`;

export const Link = styled.a`
    ${buttonDefault}
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 0;
    margin-bottom: 32px;
    line-height: 1;
    max-width: max-content;

    @media (min-width: 768px) {
        &:hover {
            color: ${({ theme }) => theme.colors.blueGrayish};
        }
    }
`;

export const Title = styled.h2`
    ${headingLarge}
    margin-bottom: 24px;
`;

export const InvoiceForm = styled.form`
    display: flex;
    flex-flow: column;
    gap: 48px;
`;

export const Fieldset = styled.fieldset`
    display: flex;
    flex-flow: column;
    gap: 24px;
    border: none;
`;

export const Legend = styled.legend`
    ${headingExtraSmall}
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.purple};

    ${({ $lg }) =>
        $lg &&
        css`
            ${headingMediumLarge}
            color: ${({ theme }) => theme.colors.grayMedium};
        `}
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-flow: column;
    gap: 10px;
    flex: 1;
    min-width: 130px;

    ${({ $fullWidth }) =>
        $fullWidth &&
        css`
            min-width: 100%;
        `}
`;

export const Label = styled.label`
    ${primaryFontStyles}
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color 400ms ease-in-out;
`;

export const Input = styled.input`
    ${primaryFontStyles}
    ${defaultInput}
`;

export const InputsGroup = styled.div`
    display: flex;
    flex-flow: wrap;
    gap: 24px;
    border: none;

    ${({ $fullWidthMobile }) =>
        $fullWidthMobile &&
        css`
            flex-flow: column;

            @media (min-width: 600px) {
                flex-flow: wrap;
            }
        `}
`;
