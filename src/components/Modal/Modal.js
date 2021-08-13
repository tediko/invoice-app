import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import ModalDelete from './ModalDelete';
import ModalStatus from './ModalStatus';
import { useGlobalContext } from '../App/context';
import { StyledModal } from './ModalStyles';

const Modal = () => {
    const { state, toggleModal } = useGlobalContext();
    const isDeleteModal = state.isModalOpen.name === 'delete';
    const isStatusModal = state.isModalOpen.name === 'status';
    const isShown = state.isModalOpen.status;
    const modalRef = useRef();

    /**
     * Function to trap user focus within Modal component.
     */
    const focusTrap = (event) => {
        if (event.key === 'Escape' && isShown) toggleModal();
        if (event.key !== 'Tab' || !isShown) return;

        const modalElements = modalRef.current.querySelectorAll('button');
        const firstElement = modalElements[0];
        const lastElement = modalElements[modalElements.length - 1];

        // if going forward by pressing tab and lastElement is active shift focus to first focusable element
        if (!event.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
        }

        // if going backward by pressing tab and firstElement is active shift focus to last focusable element
        if (event.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
        }
    };

    // If isShown we focus on our modal container and disable page scrolling
    // Add event listener for keydown event to call focusTrap fn.
    // Removing the event listener in the return function in order to avoid memory leaks.
    useEffect(() => {
        document.addEventListener('keydown', focusTrap);
        isShown && modalRef.current.focus();
        isShown
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'unset');

        return () => {
            document.removeEventListener('keydown', focusTrap);
        };
    }, [isShown]);

    const modal = (
        <StyledModal
            aria-modal
            aria-label="Confirmation"
            tabIndex={-1}
            role="dialog"
            ref={modalRef}
        >
            {isDeleteModal && <ModalDelete />}
            {isStatusModal && <ModalStatus />}
        </StyledModal>
    );

    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
