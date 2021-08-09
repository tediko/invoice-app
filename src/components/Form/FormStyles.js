import { Link as RouterLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { buttonDefault } from '../shared/Button/ButtonStyles';
import {
    primaryFontStyles,
    headingExtraSmall,
    headingMediumLarge,
    headingLarge,
} from '../../utilities/typographyStyles';

const customScrollbar = css`
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.bgFormScroll} transparent;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.bgFormScroll};
        border-radius: 20px;
    }
`;

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

    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.purple};
        outline: none;
    }
`;

export const StyledForm = styled.div`
    position: absolute;
    top: clamp(72px, 10.5vw, 80px); /* header height */
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;

    @media (min-width: 768px) {
        background-color: ${({ theme }) => theme.colors.blackAlpha50};
    }

    @media (min-width: 1024px) {
        top: 0;
    }
`;

export const Container = styled.div`
    position: relative;
    background-color: ${({ theme }) => theme.colors.bgForm};
    padding: 32px 24px 190px 24px;
    transition: background-color 400ms ease-in-out;

    &::before {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        right: 0;
        height: 190px;
        background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0) 100%
        );
        z-index: 2;
        pointer-events: none;
    }

    @media (min-width: 768px) {
        max-width: 616px;
        height: 100%;
        border-radius: 0 20px 20px 0;
        overflow: hidden;
        padding: 56px 32px 127px 56px;
    }

    @media (min-width: 1024px) {
        max-width: 719px;
        padding: 56px 32px 100px 159px;
    }
`;

export const Link = styled(RouterLink)`
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

export const Hashtag = styled.span`
    color: ${({ theme }) => theme.colors.textTertiary};
    transition: color 400ms ease-in-out;
`;

export const InvoiceForm = styled.form`
    ${customScrollbar}
    position: relative;
    display: flex;
    flex-flow: column;
    gap: 48px;

    @media (min-width: 768px) {
        overflow-y: scroll;
        height: 80%;
        padding: 0px 24px 0 0;
    }
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
