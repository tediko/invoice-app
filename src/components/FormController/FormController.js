import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useTheme } from 'styled-components';
import { useReducedMotion } from 'framer-motion';
import { useGlobalContext } from '../App/context';
import { FormControllerVariants } from '../../utilities/framerVariants';
import Icon from '../shared/Icon/Icon';
import SubmitController from './SubmitController/SubmitController';
import { Backdrop, StyledFormController, Link } from './FormControllerStyles';
import Form from './Form/Form';

const FormController = () => {
    const { state, windowWidth, discard } = useGlobalContext();
    const { colors } = useTheme();
    const isTablet = windowWidth >= 768;
    const [isFormEdited] = useState(state.isFormOpen && state.isInvoiceEdited);
    const formRef = useRef();
    const backdropRef = useRef();
    const hasScroll = window.innerWidth > document.documentElement.clientWidth;
    const shouldReduceMotion = useReducedMotion();
    const variant = (element) => {
        return shouldReduceMotion
            ? FormControllerVariants.reduced
            : FormControllerVariants[element];
    };

    // Side effect to add event listeners and disable page scrolling.
    // Removing the event listener in the return function in order to avoid memory leaks.
    useEffect(() => {
        document.addEventListener('keydown', focusTrap);
        document.addEventListener('click', handleClickOutsideForm);
        formRef.current.focus();
        document.body.style.overflow = 'hidden';
        hasScroll && (document.body.style.paddingRight = '17px');

        return () => {
            document.removeEventListener('keydown', focusTrap);
            document.removeEventListener('click', handleClickOutsideForm);
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = 'unset';
        };
    }, []);

    /**
     * Function to hide Form component after user click outside Form contaienr.
     */
    const handleClickOutsideForm = (event) => {
        const target = event.target;
        if (target === backdropRef.current) discard();
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
        <>
            <Backdrop
                ref={backdropRef}
                variants={variant('backdrop')}
                initial="hidden"
                animate="visible"
                exit="exit"
            ></Backdrop>
            <StyledFormController
                aria-modal
                aria-label="Invoice form"
                tabIndex={-1}
                role="dialog"
                ref={formRef}
                variants={variant('form')}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
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
                <Form isEdited={isFormEdited} />
                <SubmitController />
            </StyledFormController>
        </>
    );

    return ReactDOM.createPortal(controller, document.body);
};

export default FormController;
