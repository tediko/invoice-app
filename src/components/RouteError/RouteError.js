import { useReducedMotion } from 'framer-motion';
import { routeErrorVariants } from '../../utilities/framerVariants';
import {
    StyledRouteError,
    Illustration,
    Title,
    Subtitle,
    Text,
    Link,
} from './RouteErrorStyles';

const RouteError = () => {
    const shouldReduceMotion = useReducedMotion();
    const variant = (element) => {
        return shouldReduceMotion
            ? routeErrorVariants.reduced
            : routeErrorVariants[element];
    };

    return (
        <StyledRouteError
            variants={variant('routeError')}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Illustration variants={variant('illustration')} />
            <Title variants={variant('title')}>404!</Title>
            <Subtitle>Ooops! You weren't supposed to see this</Subtitle>
            <Text>
                It looks like you've reached a URL that doesn't exist. Please
                use the button below to find your way back to our website.
            </Text>
            <Link to="/">Back to home</Link>
        </StyledRouteError>
    );
};

export default RouteError;
