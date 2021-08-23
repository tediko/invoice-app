import { useEffect } from 'react';
import { useTheme } from 'styled-components';
import { useReducedMotion } from 'framer-motion';
import Icon from '../../shared/Icon/Icon';
import Status from '../../shared/Status/Status';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import languageSensitiveNum from '../../../utilities/languageSensitiveNum';
import dateToString from '../../../utilities/dateToString';
import { invoicesVariants } from '../../../utilities/framerVariants';
import { useGlobalContext } from '../../App/context';
import {
    StyledList,
    Item,
    Link,
    Uid,
    Hashtag,
    PaymentDue,
    ClientName,
    TotalPrice,
} from './ListStyles';

const List = () => {
    const { colors } = useTheme();
    const { windowWidth, filterType, filteredInvoices } = useGlobalContext();
    const isDesktop = windowWidth >= 768;
    const isEmpty = filteredInvoices.length === 0;
    const shouldReduceMotion = useReducedMotion();
    const variant = (element, index) => {
        return shouldReduceMotion
            ? invoicesVariants.reduced
            : invoicesVariants[element](index);
    };

    // Running an effect on filteredInvoices change and shift document title.
    useEffect(() => {
        if (filterType === 'all') {
            document.title = `Invoices (${filteredInvoices.length})`;
        } else {
            document.title = `Invoices | ${filterType} (${filteredInvoices.length})`;
        }
    }, [filteredInvoices]);

    return (
        <>
            {isEmpty && <ErrorMessage />}
            {!isEmpty && (
                <StyledList>
                    {filteredInvoices.map(
                        (
                            { id, paymentDue, clientName, status, total },
                            index
                        ) => (
                            <Item
                                key={id}
                                layout
                                variants={variant('list', index)}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <Link to={`/invoice/${id}`}>
                                    <Uid>
                                        <Hashtag>#</Hashtag>
                                        {id}
                                    </Uid>
                                    <PaymentDue>
                                        Due {dateToString(paymentDue)}
                                    </PaymentDue>
                                    <ClientName>{clientName}</ClientName>
                                    <TotalPrice>
                                        £&nbsp;{languageSensitiveNum(total)}
                                    </TotalPrice>
                                    <Status currStatus={status} $grid />
                                    {isDesktop && (
                                        <Icon
                                            name={'arrow-right'}
                                            size={10}
                                            color={colors.purple}
                                        />
                                    )}
                                </Link>
                            </Item>
                        )
                    )}
                </StyledList>
            )}
        </>
    );
};

export default List;
