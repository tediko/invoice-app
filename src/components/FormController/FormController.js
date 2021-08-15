import { useTheme } from 'styled-components';
import { useGlobalContext } from '../App/context';
import Icon from '../shared/Icon/Icon';
import SubmitController from './SubmitController/SubmitController';
import {
    StyledForm,
    Container,
    Link,
    Title,
    Hashtag,
} from './FormControllerStyles';

const FormController = () => {
    const { state, windowWidth, discardForm } = useGlobalContext();
    const { colors } = useTheme();
    const isTablet = windowWidth >= 768;
    const isInvoiceEdited = state.isInvoiceEdited;
    const invoiceId = state.currInvoiceIndex;

    return (
        <StyledForm>
            <Container>
                {!isTablet && (
                    <Link to="/" onClick={discardForm}>
                        <Icon
                            name={'arrow-left'}
                            size={10}
                            color={colors.purple}
                        />
                        Go back
                    </Link>
                )}
                {!isInvoiceEdited ? (
                    <Title>New Invoice</Title>
                ) : (
                    <Title>
                        Edit <Hashtag>#</Hashtag>
                        {invoiceId}
                    </Title>
                )}
                <SubmitController />
            </Container>
        </StyledForm>
    );
};

export default FormController;
