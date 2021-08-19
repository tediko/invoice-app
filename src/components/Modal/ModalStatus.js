import Button from '../shared/Button/Button';
import { useGlobalContext } from '../App/context';
import { Container, Title, Text, CtaGroup } from './ModalStyles';

const ModalStatus = ({ variants }) => {
    const { state, toggleModal, markInvoiceAsPaid } = useGlobalContext();
    const invoiceId = state.currInvoiceIndex;

    return (
        <Container variants={variants}>
            <Title>Confirm Status</Title>
            <Text>
                Are you sure you want to change status of invoice #{invoiceId}?
                This action cannot be undone.
            </Text>
            <CtaGroup>
                <Button type="button" $secondary onClick={toggleModal}>
                    Cancel
                </Button>
                <Button
                    type="button"
                    $primary
                    onClick={() => markInvoiceAsPaid()}
                >
                    Mark as Paid
                </Button>
            </CtaGroup>
        </Container>
    );
};

export default ModalStatus;
