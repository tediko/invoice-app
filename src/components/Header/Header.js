import Icon from '../Icon/Icon';
import { useTheme } from 'styled-components';
import { StyledHeader, Logo, ThemeToggle, Profile } from './HeaderStyles';

const Header = () => {
    const theme = useTheme();
    console.log(theme);
    return (
        <StyledHeader>
            <Logo aria-label="Home Page" />
            <ThemeToggle aria-label="Theme toggle">
                <Icon
                    name="moon"
                    size={20}
                    color={theme.colors.btnTheme}
                    customStyle={{ transition: 'color 350ms ease-in-out' }}
                />
            </ThemeToggle>
            <Profile />
        </StyledHeader>
    );
};

export default Header;
