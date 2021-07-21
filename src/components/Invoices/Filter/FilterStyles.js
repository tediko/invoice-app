import styled, { css } from 'styled-components';
import checkIcon from '../../../assets/images/icon-check.svg';
import { buttonDefault } from '../../shared/Button/ButtonStyles';

export const StyledFilter = styled.div`
    position: relative;
`;

export const Button = styled.button`
    ${buttonDefault}
    display: flex;
    flex-flow: row;
    gap: 12px;
    align-items: center;
    padding: 0;

    @media (min-width: 768px) {
        gap: 16px;
    }
`;

export const List = styled.ul`
    display: none;
    position: absolute;
    flex-flow: column;
    gap: 10px;
    top: 40px;
    left: 50%;
    width: clamp(134px, 19vw, 192px);
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.bgFilter};
    box-shadow: 0 10px 20px 0 ${({ theme }) => theme.colors.bgFilterShadow};
    border-radius: 8px;
    transform: translateX(-50%);
    transition: background-color 400ms ease-in-out;
`;

export const Item = styled.li``;

export const StatusFilter = styled.button`
    ${buttonDefault}
    position: relative;
    padding-left: 29px;

    &::before {
        position: absolute;
        content: '';
        top: -2px;
        left: 0;
        width: 16px;
        height: 16px;
        background-color: ${({ theme }) => theme.colors.bgFilterBox};
        border: 1px solid transparent;
        border-radius: 2px;
        transition: background-color 400ms ease-in-out, border 300ms ease-in-out;

        ${({ $isActive }) =>
            $isActive &&
            css`
                background-color: ${({ theme }) => theme.colors.purple};
                background-image: url('${checkIcon}');
                background-repeat: no-repeat;
                background-size: 10px;
                background-position: center;
            `}
    }

    @media (min-width: 768px) {
        &:hover {
            &::before {
                border: 1px solid ${({ theme }) => theme.colors.purple};
                border-radius: 2px;
            }
        }
    }
`;
