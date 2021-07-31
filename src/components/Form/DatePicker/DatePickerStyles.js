import styled from 'styled-components';
import { defaultInput } from '../FormStyles';
import { buttonDefault } from '../../shared/Button/ButtonStyles';

export const CustomPicker = styled.button`
    ${buttonDefault}
    ${defaultInput}
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
