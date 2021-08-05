import Icon from '../../shared/Icon/Icon';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import { useGlobalContext } from '../../App/context';
import { StyledSelect, Cta, List, Item, Option } from './SelectStyles';

const Select = () => {
    const { invoice, handleInvoiceChange } = useGlobalContext();
    const { colors } = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);

    const expandSelect = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <StyledSelect>
            <Cta
                type="button"
                aria-label="Select payment terms"
                aria-expanded={isExpanded}
                aria-controls="select-list"
                onClick={expandSelect}
                $isExpanded={isExpanded}
            >
                Net {invoice.paymentTerms} Days
                <Icon name={'arrow-down'} size={12} color={colors.purple} />
            </Cta>
            {isExpanded && (
                <List id="select-list">
                    <Item>
                        <Option
                            type="button"
                            name="paymentTerms"
                            value="1"
                            onClick={(event) => handleInvoiceChange(event)}
                        >
                            Net 1 Days
                        </Option>
                    </Item>
                    <Item>
                        <Option
                            type="button"
                            name="paymentTerms"
                            value="7"
                            onClick={(event) => handleInvoiceChange(event)}
                        >
                            Net 7 Days
                        </Option>
                    </Item>
                    <Item>
                        <Option
                            type="button"
                            name="paymentTerms"
                            value="14"
                            onClick={(event) => handleInvoiceChange(event)}
                        >
                            Net 14 Days
                        </Option>
                    </Item>
                    <Item>
                        <Option
                            type="button"
                            name="paymentTerms"
                            value="30"
                            onClick={(event) => handleInvoiceChange(event)}
                        >
                            Net 30 Days
                        </Option>
                    </Item>
                </List>
            )}
        </StyledSelect>
    );
};

export default Select;
