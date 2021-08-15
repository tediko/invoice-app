import Icon from '../../shared/Icon/Icon';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { useGlobalContext } from '../../App/context';
import { StyledSelect, Cta, List, Item, Option } from './SelectStyles';

const Select = () => {
    const { invoice, handleInvoiceChange } = useGlobalContext();
    const { colors } = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);
    const ref = useRef();

    /* Running an effect whenever isExpanded changes and we are binding a click event to the document 
    so that whenever the user clicks on the document, we can check if it is inside or outside the list 
    and hide the list accordingly. */
    useEffect(() => {
        const checkIfClickedOutside = (event) => {
            const target = event.target;
            if (isExpanded && ref.current && !ref.current.contains(target)) {
                setIsExpanded(!isExpanded);
            }
        };
        document.addEventListener('click', checkIfClickedOutside);

        return () => {
            document.removeEventListener('click', checkIfClickedOutside);
        };
    }, [isExpanded]);

    const expandSelect = () => {
        setIsExpanded(!isExpanded);
    };

    const handleClick = (event) => {
        handleInvoiceChange(event, 'invoice');
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
                <List id="select-list" ref={ref}>
                    <Item>
                        <Option
                            type="button"
                            name="paymentTerms"
                            value="1"
                            onClick={(event) => handleClick(event)}
                        >
                            Net 1 Days
                        </Option>
                    </Item>
                    <Item>
                        <Option
                            type="button"
                            name="paymentTerms"
                            value="7"
                            onClick={(event) => handleClick(event)}
                        >
                            Net 7 Days
                        </Option>
                    </Item>
                    <Item>
                        <Option
                            type="button"
                            name="paymentTerms"
                            value="14"
                            onClick={(event) => handleClick(event)}
                        >
                            Net 14 Days
                        </Option>
                    </Item>
                    <Item>
                        <Option
                            type="button"
                            name="paymentTerms"
                            value="30"
                            onClick={(event) => handleClick(event)}
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
