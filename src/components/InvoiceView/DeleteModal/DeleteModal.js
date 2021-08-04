import Button from '../../shared/Button/Button';
import {
    StyledDeleteModal,
    Modal,
    Title,
    Text,
    CtaGroup,
} from './DeleteModalStyles';

const DeleteModal = () => {
    return (
        <StyledDeleteModal>
            <Modal>
                <Title>Confirm Deletion</Title>
                {/* change ID in Text dynamically */}
                <Text>
                    Are you sure you want to delete invoice #XM9141? This action
                    cannot be undone.
                </Text>
                <CtaGroup>
                    <Button type="button" $secondary>
                        Cancel
                    </Button>
                    <Button type="button" $delete>
                        Delete
                    </Button>
                </CtaGroup>
            </Modal>
        </StyledDeleteModal>
    );
};

export default DeleteModal;
