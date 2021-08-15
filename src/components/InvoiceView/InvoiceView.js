import { useEffect } from 'react';
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
    const { state, windowWidth, toggleModal, toggleEditForm } =
        useGlobalContext();
    const { colors } = useTheme();
    const { id } = useParams();
    const invoice = state.invoices.find((item) => item.id === id);
    const isPaid = invoice.status === 'paid' || invoice.status === 'draft';
    const isDesktop = windowWidth >= 768;

    // Running an effect on render and change document title.
    useEffect(() => {
        document.title = `Invoices | #${id}`;
    }, []);

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
                            <Button
                                $secondary
                                onClick={() => toggleEditForm(id)}
                            >
                                Edit
                            </Button>
                            <Button
                                $delete
                                onClick={() => toggleModal(id, 'delete')}
                            >
                                Delete
                            </Button>
                            {!isPaid && (
                                <Button
                                    $primary
                                    onClick={() => toggleModal(id, 'status')}
                                >
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
                    <Button $secondary onClick={() => toggleEditForm(id)}>
                        Edit
                    </Button>
                    <Button $delete onClick={() => toggleModal(id, 'delete')}>
                        Delete
                    </Button>
                    {!isPaid && (
                        <Button
                            $primary
                            onClick={() => toggleModal(id, 'status')}
                        >
                            Mark as Paid
                        </Button>
                    )}
                </ButtonWrapper>
            )}
        </StyledInvoiceView>
    );
};

export default InvoiceView;
