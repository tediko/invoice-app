import styled, { css } from 'styled-components';
import { defaultInput } from '../FormStyles';
import { buttonDefault } from '../../shared/Button/ButtonStyles';

export const StyledSelect = styled.div`
    position: relative;
`;

export const Cta = styled.button`
    ${buttonDefault}
    ${defaultInput}
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 13px 16px 20px;
    width: 100%;
    cursor: pointer;

    svg {
        transition: transform 300ms ease-in-out;
    }

    ${({ $isExpanded }) =>
        $isExpanded &&
        css`
            svg {
                transform: rotate(180deg);
            }
        `}
`;

export const List = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: flex;
    flex-flow: column;
    background-color: ${({ theme }) => theme.colors.bgSelectBg};
    box-shadow: 0 10px 20px 0 ${({ theme }) => theme.colors.bgSelectShadow};
    border-radius: 8px;
    transition: background-color 400ms ease-in-out;
    margin-top: 8px;
    z-index: 10;
`;

export const Item = styled.li`
    padding: 0 24px;

    &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.bgSelectBorder};
    }
`;

export const Option = styled.button`
    ${buttonDefault}
    padding: 15px 0;
`;