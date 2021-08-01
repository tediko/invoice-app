import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import { primaryFontStyles } from '../../../utilities/typographyStyles';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    ul,
    ol {
        list-style: none;
    }

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    html {
        font-size: 16px;
    }

    body {
        ${primaryFontStyles}
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Provider = ({ children, themeColor }) => {
    return (
        <ThemeProvider
            theme={themeColor === 'light' ? theme.light : theme.dark}
        >
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default Provider;
