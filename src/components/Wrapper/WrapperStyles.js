import styled from 'styled-components';

export const StyledWrapper = styled.div`
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.bgMain};
    transition: background-color 400ms ease-in-out;
`;
