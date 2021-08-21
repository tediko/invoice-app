import { useReducedMotion } from 'framer-motion';
import { useGlobalContext } from '../../App/context';
import { invoicesVariants } from '../../../utilities/framerVariants';
import {
    StyledErrorMessage,
    Illustration,
    Title,
    Text,
    Bold,
} from './ErrorMessageStyles';

const ErrorMessage = () => {
    const { windowWidth } = useGlobalContext();
    const isDesktop = windowWidth >= 768;
    const shouldReduceMotion = useReducedMotion();
    const variant = (element) => {
        return shouldReduceMotion
            ? invoicesVariants.reduced
            : invoicesVariants[element];
    };

    return (
        <StyledErrorMessage
            variants={variant('errorMessage')}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Illustration />
            <Title>There is nothing here</Title>
            <Text>
                Create an invoice by clicking the{' '}
                <Bold>New {isDesktop && 'Invoice'}</Bold> button and get started
            </Text>
        </StyledErrorMessage>
    );
};

export default ErrorMessage;
