import Button from '../shared/Button/Button';
import { useGlobalContext } from '../App/context';
import { useHistory } from 'react-router-dom';
import { Container, Title, Text, CtaGroup } from './ModalStyles';

const ModalDelete = ({ variants }) => {
    const { state, toggleModal, deleteInvoice } = useGlobalContext();
    const history = useHistory();

    const routeChange = () => {
        let path = `/`;
        history.push(path);
    };

    return (
        <Container variants={variants}>
            <Title>Confirm Deletion</Title>
            <Text>
                Are you sure you want to delete invoice #
                {state.currInvoiceIndex}? This action cannot be undone.
            </Text>
            <CtaGroup>
                <Button type="button" $secondary onClick={toggleModal}>
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
        </Container>
    );
};

export default ModalDelete;
