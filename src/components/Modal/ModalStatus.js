import Button from '../shared/Button/Button';
import { useGlobalContext } from '../App/context';
import { Container, Title, Text, CtaGroup } from './ModalStyles';

const ModalStatus = () => {
    const { state, toggleModal, markInvoiceAsPaid } = useGlobalContext();
    const invoiceId = state.currInvoiceIndex;

    return (
        <Container>
            <Title>Confirm Status</Title>
            <Text>
                Are you sure you want to change status of invoice #
                {state.currInvoiceIndex}? This action cannot be undone.
            </Text>
            <CtaGroup>
                <Button type="button" $secondary onClick={toggleModal}>
                    Cancel
                </Button>
                <Button
                    type="button"
                    $primary
                    onClick={() => markInvoiceAsPaid(invoiceId)}
                >
                    Mark as Paid
                </Button>
            </CtaGroup>
        </Container>
    );
};

export default ModalStatus;
