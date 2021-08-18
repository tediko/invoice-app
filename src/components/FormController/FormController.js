import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useTheme } from 'styled-components';
import { useGlobalContext } from '../App/context';
import Icon from '../shared/Icon/Icon';
import SubmitController from './SubmitController/SubmitController';
import { StyledFormController, Container, Link } from './FormControllerStyles';
import Form from './Form/Form';

const FormController = () => {
    const { state, windowWidth, discard } = useGlobalContext();
    const { colors } = useTheme();
    const isTablet = windowWidth >= 768;
    const isFormOpen = state.isFormOpen && !state.isInvoiceEdited;
    const isFormEdited = state.isFormOpen && state.isInvoiceEdited;
    const formRef = useRef();
    const isShown = state.isFormOpen;

    // If isShown we focus on our FormController container and disable page scrolling,
    // add event listener for keydown event to call focusTrap fn,
    // add event listener for click event to call handleClickOutsideForm fn.
    // Removing the event listener in the return function in order to avoid memory leaks.
    useEffect(() => {
        isShown &&
            (document.addEventListener('keydown', focusTrap),
            document.addEventListener('click', handleClickOutsideForm),
            formRef.current.focus());
        return () => {
            document.removeEventListener('keydown', focusTrap);
            document.removeEventListener('click', handleClickOutsideForm);
        };
    }, [isShown]);

    // Disable page scrolling based on isTablet variable.
    useEffect(() => {
        isTablet && isShown && (document.body.style.overflow = 'hidden');
        !isTablet && (document.body.style.overflow = 'unset');

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isTablet, isShown]);

    /**
     * Function to hide Form component after user click outside Form contaienr.
     */
    const handleClickOutsideForm = (event) => {
        const target = event.target;
        if (target === formRef.current) discard();
    };

    /**
     * Function to trap user focus within component.
     */
    const focusTrap = (event) => {
        if (event.key === 'Escape') discard();
        if (event.key !== 'Tab') return;

        const formElements =
            formRef.current.querySelectorAll('button, a, input');
        const firstElement = formElements[0];
        const lastElement = formElements[formElements.length - 1];

        // if going forward by pressing tab and lastElement is active shift focus to first focusable element
        if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }

        // if going backward by pressing tab and firstElement is active shift focus to last focusable element
        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        }
    };

    const controller = (
        <StyledFormController
            aria-modal
            aria-label="Invoice form"
            tabIndex={-1}
            role="dialog"
            ref={formRef}
        >
            <Container>
                {!isTablet && (
                    <Link to="/" onClick={discard}>
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
        </StyledFormController>
    );

    return isShown ? ReactDOM.createPortal(controller, document.body) : null;
};

export default FormController;
