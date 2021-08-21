import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { useReducedMotion } from 'framer-motion';
import Icon from '../shared/Icon/Icon';
import Status from '../shared/Status/Status';
import Button from '../shared/Button/Button';
import InvoiceInfo from '../InvoiceInfo/InvoiceInfo';
import { invoiceViewVariants } from '../../utilities/framerVariants';
import { useGlobalContext } from '../App/context';
import {
    StyledInvoiceView,
    Container,
    MotionLink,
    Controller,
    Text,
    ButtonWrapper,
} from './InvoiceViewStyles';

const InvoiceView = () => {
    const { state, windowWidth, toggleModal, editInvoice } = useGlobalContext();
    const { colors } = useTheme();
    const { id } = useParams();
    const [invoice, setInvoice] = useState(
        state.invoices.find((item) => item.id === id)
    );
    const [isDeleting, setIsDeleting] = useState(false);
    const isPaid = invoice.status === 'paid';
    const isPaidOrDraft = isPaid || invoice.status === 'draft';
    const isDesktop = windowWidth >= 768;
    const shouldReduceMotion = useReducedMotion();
    const variant = (element) => {
        return shouldReduceMotion
            ? invoiceViewVariants.reduced
            : invoiceViewVariants[element];
    };

    // Running an effect on render and change document title.
    useEffect(() => {
        document.title = `Invoices | #${id}`;
    }, []);

    // setInvoice only if isDeleting is false on dependency array change
    // to prevent render error where invoice doesn't exist.
    useEffect(() => {
        !isDeleting &&
            setInvoice(state.invoices.find((item) => item.id === id));
    }, [state.invoices]);

    return (
        <StyledInvoiceView>
            <Container>
                <MotionLink
                    to="/"
                    variants={variant('link')}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <Icon name={'arrow-left'} size={10} color={colors.purple} />
                    Go back
                </MotionLink>
                <Controller
                    variants={variant('controller')}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <Text>Status</Text>
                    <Status currStatus={invoice.status} />
                    {isDesktop && (
                        <ButtonWrapper>
                            {!isPaid && (
                                <Button
                                    $secondary
                                    onClick={() => editInvoice(id)}
                                >
                                    Edit
                                </Button>
                            )}
                            <Button
                                $delete
                                onClick={() => {
                                    toggleModal(id, 'delete');
                                    setIsDeleting(true);
                                }}
                            >
                                Delete
                            </Button>
                            {!isPaidOrDraft && (
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
                    {!isPaid && (
                        <Button $secondary onClick={() => editInvoice(id)}>
                            Edit
                        </Button>
                    )}
                    <Button $delete onClick={() => toggleModal(id, 'delete')}>
                        Delete
                    </Button>
                    {!isPaidOrDraft && (
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
