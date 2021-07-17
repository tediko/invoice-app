import Icon from '../Icon/Icon';
import { useTheme } from 'styled-components';
import {
    StyledHeader,
    Container,
    Logo,
    ThemeToggle,
    Profile,
} from './HeaderStyles';

const Header = () => {
    const theme = useTheme();

    return (
        <StyledHeader>
            <Container>
                <Logo />
                <ThemeToggle>
                    <Icon
                        name="moon"
                        size={20}
                        color={theme.colors.blue600}
                        customStyle={{ transition: 'color 350ms ease-in-out' }}
                    />
                </ThemeToggle>
                <Profile />
            </Container>
        </StyledHeader>
    );
};

export default Header;
