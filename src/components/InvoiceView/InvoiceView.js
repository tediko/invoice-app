import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import Icon from '../shared/Icon/Icon';
import Status from '../shared/Status/Status';
import Button from '../shared/Button/Button';
import InvoiceInfo from '../InvoiceInfo/InvoiceInfo';
import { useGlobalContext } from '../App/context';
import {
    StyledInvoiceView,
    Container,
    Link,
    Controller,
    Text,
    ButtonWrapper,
} from './InvoiceViewStyles';

const InvoiceView = () => {
    const { state, windowWidth, markAsPaid, toggleDeleteModal } =
        useGlobalContext();
    const { colors } = useTheme();
    const { id } = useParams();
    const [invoice, setInvoice] = useState(
        state.invoices.find((item) => item.id === id)
    );
    const isPaid = invoice.status === 'paid' || invoice.status === 'draft';
    const isDesktop = windowWidth >= 768;

    return (
        <StyledInvoiceView>
            <Container>
                <Link to="/">
                    <Icon name={'arrow-left'} size={10} color={colors.purple} />
                    Go back
                </Link>
                <Controller>
                    <Text>Status</Text>
                    <Status currStatus={invoice.status} />
                    {isDesktop && (
                        <ButtonWrapper>
                            <Button $secondary>Edit</Button>
                            <Button
                                $delete
                                onClick={() => toggleDeleteModal(id)}
                            >
                                Delete
                            </Button>
                            {!isPaid && (
                                <Button $primary onClick={() => markAsPaid(id)}>
                                    Mark as Paid
                                </Button>
                            )}
                        </ButtonWrapper>
                    )}
                </Controller>
                <InvoiceInfo invoice={invoice} />
            </Container>
            {!isDesktop && (
                <ButtonWrapper>
                    <Button $secondary>Edit</Button>
                    <Button $delete>Delete</Button>
                    {!isPaid && <Button $primary>Mark as Paid</Button>}
                </ButtonWrapper>
            )}
        </StyledInvoiceView>
    );
};

export default InvoiceView;
