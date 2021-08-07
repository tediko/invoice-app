import Button from '../shared/Button/Button';
import { useGlobalContext } from '../App/context';
import { useHistory } from 'react-router-dom';
import {
    StyledDeleteModal,
    Modal,
    Title,
    Text,
    CtaGroup,
} from './DeleteModalStyles';

const DeleteModal = () => {
    const { state, toggleDeleteModal, deleteInvoice } = useGlobalContext();
    const history = useHistory();

    const routeChange = () => {
        let path = `/`;
        history.push(path);
    };

    return (
        <StyledDeleteModal>
            <Modal>
                <Title>Confirm Deletion</Title>
                <Text>
                    Are you sure you want to delete invoice #
                    {state.currInvoiceIndex}? This action cannot be undone.
                </Text>
                <CtaGroup>
                    <Button
                        type="button"
                        $secondary
                        onClick={toggleDeleteModal}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="button"
                        $delete
                        onClick={() => {
                            deleteInvoice(), routeChange();
                        }}
                    >
                        Delete
                    </Button>
                </CtaGroup>
            </Modal>
        </StyledDeleteModal>
    );
};

export default DeleteModal;
