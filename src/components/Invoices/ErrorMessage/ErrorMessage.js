import { useGlobalContext } from '../../App/context';
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

    return (
        <StyledErrorMessage>
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
