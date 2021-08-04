import styled from 'styled-components';
import { primaryFontStyles } from '../../../utilities/typographyStyles';
import {
    Input as InputStyles,
    Fieldset as FieldsetStyles,
    Legend as LegendStyles,
    InputWrapper as InputWrapperStyles,
    Label as LabelStyles,
} from '../FormStyles';

export const Fieldset = styled(FieldsetStyles)`
    gap: 48px;
`;

export const Legend = styled(LegendStyles)``;

export const InputsGroup = styled.div`
    display: grid;
    grid-template-columns: minmax(64px, 1fr) minmax(100px, 1fr) 94px auto;
    grid-template-rows: auto auto;
    grid-template-areas: 'name name name name' 'qty price total delete';
    width: 100%;
    row-gap: 18px;
    column-gap: 16px;
`;

export const InputWrapper = styled(InputWrapperStyles)`
    min-width: unset;

    &:nth-child(1) {
        grid-area: name;
    }
    &:nth-child(2) {
        grid-area: qty;
    }
    &:nth-child(3) {
        grid-area: price;
    }
    &:nth-child(4) {
        grid-area: total;
    }
    &:nth-child(5) {
        grid-area: delete;
    }
`;

export const Label = styled(LabelStyles)``;

export const Input = styled(InputStyles)``;

export const TotalValue = styled.span`
    ${primaryFontStyles}
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color 400ms ease-in-out;
`;

export const Delete = styled.button`
    align-self: end;
    border: none;
    background-color: transparent;
    margin-bottom: 15px;
    cursor: pointer;

    @media (min-width: 768px) {
        svg {
            transition: color 300ms ease-in-out;
        }

        &:hover {
            svg {
                color: ${({ theme }) => theme.colors.red};
            }
        }
    }
`;
