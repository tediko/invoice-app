import ModalDelete from './ModalDelete';
import ModalStatus from './ModalStatus';
import { useGlobalContext } from '../App/context';
import { StyledModal } from './ModalStyles';

const Modal = () => {
    const { state } = useGlobalContext();
    const isDeleteModal = state.isModalOpen.name === 'delete';
    const isStatusModal = state.isModalOpen.name === 'status';

    return (
        <StyledModal>
            {isDeleteModal && <ModalDelete />}
            {isStatusModal && <ModalStatus />}
        </StyledModal>
    );
};

export default Modal;
