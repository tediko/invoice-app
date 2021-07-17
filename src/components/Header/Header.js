import Icon from '../Icon/Icon';
import { useTheme } from 'styled-components';
import { StyledHeader, Logo, ThemeToggle, Profile } from './HeaderStyles';

const Header = () => {
    const theme = useTheme();

    return (
        <StyledHeader>
            <Logo aria-label="Home Page" />
            <ThemeToggle aria-label="Theme toggle">
                <Icon
                    name="moon"
                    size={20}
                    color={theme.colors.blue600}
                    customStyle={{ transition: 'color 350ms ease-in-out' }}
                />
            </ThemeToggle>
            <Profile />
        </StyledHeader>
    );
};

export default Header;
