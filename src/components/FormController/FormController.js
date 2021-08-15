import { useTheme } from 'styled-components';
import { useGlobalContext } from '../App/context';
import Icon from '../shared/Icon/Icon';
import SubmitController from './SubmitController/SubmitController';
import { StyledForm, Container, Link } from './FormControllerStyles';
import Form from './Form/Form';

const FormController = () => {
    const { state, windowWidth, discardForm } = useGlobalContext();
    const { colors } = useTheme();
    const isTablet = windowWidth >= 768;
    const isFormOpen = state.isFormOpen && !state.isInvoiceEdited;
    const isFormEdited = state.isFormOpen && state.isInvoiceEdited;

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
                {isFormOpen && <Form />}
                {isFormEdited && <Form isEdited />}
                <SubmitController />
            </Container>
        </StyledForm>
    );
};

export default FormController;
