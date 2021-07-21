import { StyledButton } from './ButtonStyles';

const Button = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
