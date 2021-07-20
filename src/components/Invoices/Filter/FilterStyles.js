import styled, { css } from 'styled-components';
import checkIcon from '../../../assets/images/icon-check.svg';

const ButtonDefault = styled.button`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.016rem;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.textPrimary};
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: color 400ms ease-in;
`;

export const StyledFilter = styled.div`
    position: relative;
`;

export const Button = styled(ButtonDefault)`
    display: flex;
    flex-flow: row;
    gap: 12px;
    align-items: center;
`;

export const List = styled.ul`
    display: flex;
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
    transition: background-color 400ms ease-in;
`;

export const Item = styled.li``;

export const StatusFilter = styled(ButtonDefault)`
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
        border-radius: 2px;
        transition: background-color 400ms ease-in;

        ${({ $isActive }) =>
            $isActive &&
            css`
                background-color: ${({ theme }) => theme.colors.purple};
                background-image: url(${checkIcon});
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
