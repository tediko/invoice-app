import { useReducedMotion } from 'framer-motion';
import {
    routeErrorVariants,
    routeErrorIllustrationVariants,
    routeErrorTitleVariants,
    motionReducedVariants,
} from '../../utilities/framerVariants';
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
    const illustrationVariant = shouldReduceMotion
        ? motionReducedVariants
        : routeErrorIllustrationVariants;
    const titleVariant = shouldReduceMotion
        ? motionReducedVariants
        : routeErrorTitleVariants;

    return (
        <StyledRouteError
            variants={routeErrorVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Illustration variants={illustrationVariant} />
            <Title variants={titleVariant}>404!</Title>
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
